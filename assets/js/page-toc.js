document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("page-toc");
    const headings = Array.from(
        document.querySelectorAll(
            ".content h2, .content h3, .content h4, .content h5, .content h6"
        )
    ).filter(heading => !heading.classList.contains("toc-title"));

    if (headings.length === 0) {
        toc.remove();
        return;
    }

    const root = document.createElement("ul");
    toc.appendChild(root);

    const lists = { 2: root };

    headings.forEach(function (heading, index) {
        const level = Number(heading.tagName.substring(1));

        if (!heading.id) {
            heading.id = "heading-" + index;
        }

        if (!lists[level]) {
            const parentLevel = level - 1;
            const parentList = lists[parentLevel] || root;
            const parentLi = parentList.lastElementChild;
            const newList = document.createElement("ul");

            if (parentLi) {
                parentLi.appendChild(newList);
            } else {
                parentList.appendChild(newList);
            }

            lists[level] = newList;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = "#" + heading.id;
        a.textContent = heading.textContent;

        li.appendChild(a);
        lists[level].appendChild(li);

        for (let i = level + 1; i <= 6; i++) {
            delete lists[i];
        }
    });
});