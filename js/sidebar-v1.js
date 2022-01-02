

function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if(sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
        sidebar.classList.add("open");
    } else {
        sidebar.classList.add("close");
        sidebar.classList.remove("open");
    }
}
