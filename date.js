//let modified = document.lastModified;
//document.getElementById("lastmodified").textContent = modified;
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"

}
document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);