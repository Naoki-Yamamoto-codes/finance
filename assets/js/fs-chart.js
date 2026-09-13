document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas[data-json][data-date][data-chart-type][data-name]");

    canvases.forEach(canvas => {
        switch (canvas.dataset.chartType) {
            case "bar":
                loadBSChart(canvas);
                break;

            case "waterfall":
                loadWaterfallChart(canvas);
                break;
        }
    });
});


async function loadBSChart(canvas) {
    const jsonPath = canvas.dataset.json;
    const date = canvas.dataset.date;
    const itemName = canvas.dataset.name;
    const side = canvas.dataset.side;

    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status}`);
        }

        const data = await response.json();
        const bs = data.find(item => item.itemName === itemName).items.find(item => item.date === date);

        // canvas の id で資産・負債を判定
        let bsItems;

        if (side === "asset") {
            bsItems = bs.assets;
        }
        else if (side === "liability") {
            bsItems = bs.liabilitiesAndEquity;
        }
        else {
            console.warn(`Unknown BS chart: ${side}`);
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
    // 項目数に応じて高さを調整
    // const heightPerItem = 15;
    // canvas.style.height = `${validItems.length * heightPerItem}px`;
    // canvas.style.width = "100%";
    
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
                const x = bar.x + 6;
                ctx.textAlign = "left";
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
            // maintainAspectRatio: false,
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
                    beginAtZero: true,
                    suggestedMax: Math.max(...values) * 1.15,
                },
                y: { ticks: { autoSkip: false } }
            }
        }
    });
}

async function loadWaterfallChart(canvas) {
    const jsonPath = canvas.dataset.json;
    const date = canvas.dataset.date;
    const itemName = canvas.dataset.name;

    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status}`);
        }

        const data = await response.json();
        const plcf = data.find(item => item.itemName === itemName).items.find(item => item.date === date).items;

        createWaterfallChart(canvas, plcf);

    } catch (error) {
        console.error(`Failed to load BS data: ${jsonPath}`, error);
    }
}

function createWaterfallChart(canvas, items) {
    const barData = []
    let current = items[0].value / 1_000_000;
    barData.push([0, current])

    const labels = [items[0].label_jp];
    // const base = [0];
    // const values = [current];

    // 中間項目
    for (let i = 1; i < items.length - 1; i++) {
        const value = items[i].value / 1_000_000;
        labels.push(items[i].label_jp);
        const start = current;
        const end = current + value;
        barData.push([start, end])
        current = end;
        // if (value >= 0) {
        //     base.push(current);
        //     values.push(value);
        // } else {
        //     base.push(current + value);
        //     values.push(-value);
        // }
        // current += value;
    }
    // 最終値
    const last = items[items.length - 1];
    labels.push(last.label_jp);
    barData.push([0 ,last]);
    // base.push(0);
    // values.push(last.value / 1_000_000);
    barColors = items.map(item => item.value >=0 ? "steelblue" : "tomato")
    // const valueLabelPlugin = {
    //     id: "valueLabel",
    //     afterDatasetsDraw(chart) {
    //         const { ctx } = chart;
    //         ctx.save();
    //         ctx.font = "12px sans-serif";
    //         ctx.textAlign = "center";
    //         ctx.textBaseline = "bottom";
    //         const meta = chart.getDatasetMeta(1);
    //         meta.data.forEach((bar, index) => {
    //             const value = items[index].value / 1_000_000;
    //             const text = value.toLocaleString("ja-JP", {
    //                 minimumFractionDigits: 2,
    //                 maximumFractionDigits: 2
    //             }) + "百万円";
    //             ctx.fillText(text, bar.x, bar.y - 4);
    //         });
    //         ctx.restore();
    //     }
    // };

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                // {
                //     data: base,
                //     backgroundColor: "transparent",
                //     borderWidth: 0,
                //     stack: "waterfall"
                // },
                {
                    data: barData,
                    // data: values,
                    backgroundColor: barColors,
                    borderWidth: 1,
                    // stack: "waterfall"
                }
            ]
        },
        // plugins: [valueLabelPlugin],
        options: {
            plugins: { legend: { display: false } },
            scales: {
                // x: { stacked: true },
                y: {
                    // stacked: true,
                    // beginAtZero: true,
                    title: {
                        display: true,
                        text: "百万円"
                    }
                }
            }
        }
    });
}