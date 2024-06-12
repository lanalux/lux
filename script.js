
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    // menu.classList.toggle("hide");
    if(menu.className == "hide"){
        menu.className = "show";
    } else {
        menu.className = "hide";
    }
}
