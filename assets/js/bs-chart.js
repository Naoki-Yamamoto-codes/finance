document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas[data-json]");

    canvases.forEach(canvas => {
        loadBSChart(canvas);
    });
});


async function loadBSChart(canvas) {
    const jsonPath = canvas.dataset.json;

    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status}`);
        }

        const data = await response.json();

        const bs = data.items[0];

        // canvas の id で資産・負債を判定
        let items;

        if (canvas.id === "assetChart") {
            items = bs.Assets;
        }
        else if (canvas.id === "liabilityChart") {
            items = bs.LiabilitiesAndEquity;
        }
        else {
            console.warn(`Unknown BS chart: ${canvas.id}`);
            return;
        }

        createBSChart(canvas, items);

    } catch (error) {
        console.error(`Failed to load BS data: ${jsonPath}`, error);
    }
}


function createBSChart(canvas, items) {
    // null の値は除外
    const validItems = items.filter(item =>
        item.value !== null &&
        item.value !== undefined
    );

    const labels = validItems.map(item => item.label_jp);

    // 円 → 百万円
    const values = validItems.map(item =>
        item.value / 1_000_000
    );

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [ { data: values } ]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.raw.toLocaleString(
                                "ja-JP",
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }
                            )} 百万円`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "百万円"
                    },
                    beginAtZero: true
                },
                y: { ticks: { autoSkip: false } }
            }
        }
    });
}