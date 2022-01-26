let overlaybeeld = document.getElementById("overlay");
let menu_bottom = document.getElementById("js--menu_bottom");


function stilte(){
    document.getElementById("titel").innerHTML = "Hello Dolly.";
    document.getElementById("tekst").innerHTML = "Hello Dolly.";
}

function overlayOn() {
    overlaybeeld.style.display = "flex";
}

function overlayOff() {
    overlaybeeld.style.display = "none";
}