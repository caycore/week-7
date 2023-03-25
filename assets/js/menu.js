const activeMenuItem = document.getElementById(window.location.pathname.replace("/", "").split(".")[0]);
activeMenuItem.style.color = "#FF001F";
const activeMobileMenuItem = document.getElementById(`m-${window.location.pathname.replace("/", "").split(".")[0]}`);
activeMobileMenuItem.style.color = "#FF001F";

const foonterContainer = document.getElementById("footer-container");
foonterContainer.style.position = "fixed";

const sideMenu = document.getElementById("side-menu");

var menuState = false;
function toggleMenu() {
    menuState = !menuState;
    if(menuState) {
        sideMenu.classList.add("isActive");
    } else {
        sideMenu.classList.remove("isActive");
    }
}

function goTo(path) {
    if(menuState) {
        toggleMenu();
        setTimeout(() => {
            window.location.href = path;
        }, 1000);
    } else {
        window.location.href = path;
    }
}

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        foonterContainer.style.position = "relative";
    } else {
        foonterContainer.style.position = "fixed";
    }
});
