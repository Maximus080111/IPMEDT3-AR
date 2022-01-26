let overlaybeeld = document.getElementById("overlay");
let menu_bottom = document.getElementById("js--menu_bottom");
let popup = document.getElementById("js--popup");
let foto = document.getElementById("foto_info");

function tekst(){
    document.getElementById("titel").innerHTML = "Computerruimte";
    document.getElementById("tekst").innerHTML = "Dit is de computerruimte. Hier hebben we verschillende computer staan. Als je informatie online nodig hebt kan je dat hier vinden. Ook kan je hier de databanken aanroepen voor nog meer informatie";
    popup.style.display = "none";
    document.getElementById("foto_info").src = "IMG/foto3.jpg"
}


function stilte(){
    document.getElementById("titel").innerHTML = "Stitleruimte";
    document.getElementById("tekst").innerHTML = "In het mediacentrum kan je ook in stilte werken. Dus heb je er behoefte aan om te leren voor je tetamen of studeren dan kan je dat hier in alle rust doen.";
    document.getElementById("foto_info").src = "IMG/foto2.jpg"
    popup.style.display = "none";
}

function overlayOn() {
    overlaybeeld.style.display = "flex";
}

function overlayOff() {
    overlaybeeld.style.display = "none";
}