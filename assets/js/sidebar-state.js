document.querySelectorAll(".sidebar details").forEach(function (detail) {
    const link = detail.querySelector(":scope > summary a");

    if (!link) {
        return;
    }

    const key = link.getAttribute("href");
    const storageKey = "sidebar-open:" + key;

    if (sessionStorage.getItem(storageKey) === "true") {
        detail.open = true;
    }
});

