document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll(".sidebar details");

    details.forEach(function (detail) {
        const link = detail.querySelector(":scope > summary a");
        if (!link) {
            return;
        }

        const key = link.getAttribute("href");
        const storageKey = "sidebar-open:" + key;

        if (sessionStorage.getItem(storageKey) === "true") {
            detail.open = true;
        }

        detail.addEventListener("toggle", function () {
            sessionStorage.setItem(storageKey, detail.open);
        });
    });

    // リンククリック時に、親 details の状態を保存
    document.querySelectorAll(".sidebar a").forEach(function (link) {
        link.addEventListener("click", function () {
            let parent = link.parentElement;

            while (parent) {
                if (parent.tagName === "DETAILS") {
                    const key = parent.dataset.tocKey;

                    if (key) {
                        sessionStorage.setItem(
                            "sidebar-open:" + key,
                            "true"
                        );
                    }
                }

                parent = parent.parentElement;
            }
        });
    });
});