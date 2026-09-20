document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas[data-json][data-key][data-chart-type]");

    canvases.forEach(canvas => {
        switch (canvas.dataset.chartType) {
            case "line":
                drawLineChart(canvas);
                break;

            case "double-line":
                drawDobleAxisLineChart(canvas);
                break;
        }
    });
});

async function drawLineChart(canvas) {
    const jsonPath = canvas.dataset.json;
    const response = await fetch(jsonPath);
    const data = await response.json();
    const key = canvas.dataset.key;
    const items = data[key];
    const datasets = items.map(x => ({
        label: x.title,
        data: x.values.map(y => ({
            x: y.date,
            y: y.value
        })),
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.1
    }));

    new Chart(canvas, {
        type: "line",
        data: {
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: "time",
                    time: {
                        unit: "month",
                        tooltipFormat: "yyyy-MM"
                    },
                    title: {
                        display: true,
                        text: "Date"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Amount"
                    }
                }
            }
        }
    });
}

async function drawDobleAxisLineChart(canvas)
{
    const jsonPath = canvas.dataset.json;
    const response = await fetch(jsonPath);
    const data = await response.json();
    const key = canvas.dataset.key;
    const items = data[key]

    new Chart(canvas, {
        type: "line",
        data: {
            datasets: [
                {
                    label: items[0].title,
                    data: items[0].values.map(x => ({
                        x: x.date,
                        y: x.value
                    })),
                    yAxisID: "y",
                    borderWidth: 2,
                    pointRadius: 2
                },
                {
                    label: items[1].title,
                    data: items[1].values.map(x => ({
                        x: x.date,
                        y: x.value
                    })),
                    yAxisID: "y1",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: "time",
                    time: { unit: "month" }
                },

                y: {
                    type: "linear",
                    position: "left",
                    title: {
                        display: true,
                        text: items[0].title
                    }
                },
                y1: {
                    type: "linear",
                    position: "right",
                    title: {
                        display: true,
                        text: items[1].title
                    },
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });
}