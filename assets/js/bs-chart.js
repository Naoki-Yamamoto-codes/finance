document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas[data-json][data-date]");

    canvases.forEach(canvas => {
        loadBSChart(canvas);
    });
});


async function loadBSChart(canvas) {
    const jsonPath = canvas.dataset.json;
    const date = canvas.dataset.date;

    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status}`);
        }

        const data = await response.json();
        const bs = data.find(item => item.itemName === "Balance Sheet").items.find(item => item.date === date);

        // canvas の id で資産・負債を判定
        let bsItems;

        if (canvas.id === "assetChart") {
            bsItems = bs.assets;
        }
        else if (canvas.id === "liabilityChart") {
            bsItems = bs.liabilitiesAndEquity;
        }
        else {
            console.warn(`Unknown BS chart: ${canvas.id}`);
            return;
        }

        createBSChart(canvas, bsItems);

    } catch (error) {
        console.error(`Failed to load BS data: ${jsonPath}`, error);
    }
}


function createBSChart(canvas, items) {
    // null の値は除外
    const validItems = items.filter(item => item.value !== null && item.value !== undefined);
    const labels = validItems.map(item => item.label_jp);
    // 円 → 百万円
    const values = validItems.map(item => item.value / 1_000_000);

    const valueLabelPlugin = {
        id: "valueLabel",
        afterDatasetsDraw(chart) {
            const { ctx } = chart;
            ctx.save();
            ctx.font = "12px sans-serif";
            ctx.textBaseline = "middle";
            chart.getDatasetMeta(0).data.forEach((bar, index) => {
                const value = values[index];
                const text = value.toLocaleString("ja-JP", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) + "百万円";
                const x = value >= 0 ? bar.x + 6 : bar.x - 6;
                ctx.textAlign = value >= 0 ? "left" : "right";
                ctx.fillText(text, x, bar.y);
            });
            ctx.restore();
        }
    };

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [ { data: values } ]
        },
        plugins: [valueLabelPlugin],
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