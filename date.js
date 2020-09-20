try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-US", options);
}