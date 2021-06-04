function povecajNaslov() {
    document.getElementById("naslov").style.textTransform = "uppercase";
}

function vratiNaslov() {
    document.getElementById("naslov").style.textTransform = "initial";
}

var boje = ["red", "orange", "yellow", "green", "blue", "purple"];
var trenutna = 0;

function dugaJun() {
    var heder = document.getElementsByClassName("header")[0];
    trenutna = (trenutna + 1) % boje.length;
	heder.style.backgroundColor = boje[trenutna];
}

setInterval(dugaJun, 500);

function unetoIme() {
    var ime = document.forma.ime;
    
    if (!ime.value.length > 0 && document.getElementById("povratnaPorukaIme") == null) {
        var fieldset1 = document.getElementById("fieldset1");
        var povratna = document.createElement("p");
        povratna.setAttribute("class", "povratnaPoruka");
        povratna.setAttribute("id", "povratnaPorukaIme");
        povratna.innerHTML = "Morate uneti ime";
        fieldset1.appendChild(povratna);
    } else if (ime.value.length > 0 && document.getElementById("povratnaPorukaIme") != null){
        var povratna = document.getElementById("povratnaPorukaIme");
        document.getElementById("fieldset1").removeChild(povratna);
    }
    return (document.forma.ime.value.length > 0);
}

function proveriIme() {
    return (document.getElementsByName("ime")[0].value.length >= 2 &&
        document.getElementsByName("ime")[0].value.length <= 15);
}

function pocinjeVelikimIme() {
    var str = document.getElementsByName("ime")[0].value;
    return 'A' <= str[0] && str[0] <= 'Z';
}

function unetoPrezime() {
    var prezime = document.forma.prezime;
    
    if (!prezime.value.length > 0 && document.getElementById("povratnaPorukaPrezime") == null) {
        var fieldset1 = document.getElementById("fieldset1");
        var povratna = document.createElement("p");
        povratna.setAttribute("class", "povratnaPoruka");
        povratna.setAttribute("id", "povratnaPorukaPrezime");
        povratna.innerHTML = "Morate uneti prezime";
        fieldset1.appendChild(povratna);
    } else if (prezime.value.length > 0 && document.getElementById("povratnaPorukaPrezime") != null){
        var povratna = document.getElementById("povratnaPorukaPrezime");
        document.getElementById("fieldset1").removeChild(povratna);
    }
    return (document.forma.prezime.value.length > 0);
}

function proveriPrezime() {
    return (document.getElementsByName("prezime")[0].value.length >= 3 &&
        document.getElementsByName("prezime")[0].value.length <= 20);
}

function pocinjeVelikimPrezime() {
    var str = document.getElementsByName("prezime")[0].value;
    return 'A' <= str[0] && str[0] <= 'Z';
}

function proveriDatum() {
    var datum = document.getElementById("datum").value;
    return Date.parse(datum);
}

function bojaPozadine() {
    var boja = document.getElementById("color").value;
    document.body.style.backgroundColor = boja;
}

function proveriCheckbox1() {
    var niz = document.getElementsByName("check1");
    for (let i = 0; i < niz.length; i++) {
        var element = niz[i];
        if (element.checked) {
            return true;
        }
    }
    return false;
}

function obrisiSadrzaj() {
    if (document.getElementById("komentar").value == "Napišite komentar ovde...")
        document.getElementById("komentar").value = "";
}

function provera() {
    if (!unetoIme()) {
        return false;
    } else if (!proveriIme()) {
        window.alert("Dužina imena treba da je izmedju 2 i 15 znakova.");
        return false;
    } else if (!pocinjeVelikimIme()) {
        window.alert("Ime treba poceti velikim pocetnim slovom");
        return false;
    } else if (!unetoPrezime()) {
        return false;
    } else if (!proveriPrezime()) {
        window.alert("Dužina prezimena treba da je izmedju 3 i 20 znakova.");
        return false;
    } else if (!pocinjeVelikimPrezime()) {
        window.alert("Prezime treba poceti velikim pocetnim slovom");
        return false;
    } else if (!proveriDatum()) {
        window.alert("Morate uneti datum");
        return false;
    } else if (!proveriCheckbox1()) {
        window.alert("Morate čekirati makar jedan element");
        return false;
    } else {
        return true;
    }
}