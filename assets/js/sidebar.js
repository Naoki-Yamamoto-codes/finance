document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll(".sidebar details");

    details.forEach(function (detail) {
        const key = detail.dataset.tocKey;

        if (!key) {
            return;
        }

        const storageKey = "sidebar-open:" + key;

        if (localStorage.getItem(storageKey) === "true") {
            detail.open = true;
        }

        detail.addEventListener("toggle", function () {
            localStorage.setItem(storageKey, detail.open);
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
                        localStorage.setItem(
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