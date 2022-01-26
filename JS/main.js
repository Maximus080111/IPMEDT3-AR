let overlaybeeld = document.getElementById("overlay");
let menu_bottom = document.getElementById("js--menu_bottom");
let popup = document.getElementById("js--popup");

function tekst(){
    document.getElementById("titel").innerHTML = "dfasdfasdfasdfasdf"
    document.getElementById("tekst").innerHTML = "dfasdfasdfasdfasdf"
    popup.style.display = "none";
}


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