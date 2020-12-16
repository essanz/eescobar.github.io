let modified = document.lastModified;
document.getElementById("lastmodified").textContent = modified;

function toggleMenu () {
    let menuStr = '\u2630';    
    document.getElementById("primaryNav").classList.toggle("hide");
    if (document.getElementById("menuButton").innerHTML == menuStr) {
        document.getElementById("menuButton").innerHTML = "X";
    } else {
        document.getElementById("menuButton").innerHTML = menuStr;
    }
}
