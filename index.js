function themeSwitch() {
    var rootElement = document.getElementsByTagName("html")[0];
    var currentTheme = rootElement.getAttribute("theme");
    if (currentTheme == "dark") {
        rootElement.setAttribute("theme", "light");
        document.getElementsByClassName("theme-switch")[0].style.flexDirection = "row-reverse";
        document.getElementById("icon-light").style.display = "block";
        document.getElementById("icon-dark").style.display = "none";
    } else {
        rootElement.setAttribute("theme", "dark");
        document.getElementsByClassName("theme-switch")[0].style.flexDirection = "row";
        document.getElementById("icon-dark").style.display = "block";
        document.getElementById("icon-light").style.display = "none";
    }
}