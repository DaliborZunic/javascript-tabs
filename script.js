function activateContent(tabContentElement, clickedElement) {
    contentTabs = document.getElementsByClassName("tab-content");
    tabs = document.getElementsByClassName("button");

    for (let i = 0; i < contentTabs.length; i++) {
        contentTabs[i].classList.remove("active-content");

    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");

    }

    document.getElementById(tabContentElement).classList.add("active-content");
    clickedElement.classList.add("active-tab");
}