const menuIcon = document.getElementById("menu-icon2");
const menuEl = document.getElementById("menu-icon");

menuIcon?.addEventListener('click', () => {
    if (menuEl?.className === "hidden") {
        menuEl.classList.remove("hidden");
    } else {
        menuEl.classList.add("hidden");
    }
})