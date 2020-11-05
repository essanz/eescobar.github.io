let t = document.getElementById('temp').textContent;
let s = document.getElementById('speed').textContent;

let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

let result = Math.round(wc);

if (t <= 50 && s > 3) {
    document.getElementById("chill").textContent = result+"\xB0F";
} else {
    document.getElementById("chill").textContent = "N/A";
}