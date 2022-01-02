

function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var firstBar = document.querySelector(".menu div:nth-child(1)");
    var secondBar = document.querySelector(".menu div:nth-child(2)");
    var thirdBar = document.querySelector(".menu div:nth-child(3)");
   
    if(sidebar.classList.contains("close")) {

        sidebar.classList.remove("close");
        sidebar.classList.add("open");

        secondBar.classList.add("hide");
        secondBar.classList.remove("show");
        // angle change
        firstBar.classList.add("first-angle-45");
        firstBar.classList.remove("angle-0");
        thirdBar.classList.add("third-angle-45");
        thirdBar.classList.remove("angle-0");
        
    } else {
        // sidebar style
        sidebar.classList.add("close");
        sidebar.classList.remove("open");
        // menu icon 
        secondBar.classList.remove("hide");
        secondBar.classList.add("show");
        // angle change
        firstBar.classList.add("angle-0");
        firstBar.classList.remove("first-angle-45");
        thirdBar.classList.add("angle-0");
        thirdBar.classList.remove("third-angle-45");
    }
}
