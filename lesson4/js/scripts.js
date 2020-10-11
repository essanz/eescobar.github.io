let options = {
    weekday: "long", 
    day: "numeric",
    month: "long",
    year: "numeric"
};
document.getElementById("date").textContent = new Date().toLocaleDateString("en-DE", options);

function toggleMenu () {
    let menuStr = '\u2630';    
    document.getElementById("primaryNav").classList.toggle("hide");
    if (document.getElementById("menuButton").innerHTML == menuStr) {
        document.getElementById("menuButton").innerHTML = "X";
    } else {
        document.getElementById("menuButton").innerHTML = menuStr;
    }
}

