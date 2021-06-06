var pos = 10;
var povecavaj = true;
function nyanMove() {
    nyan = document.getElementById("nyan");
    if(pos <= 4) {
        povecavaj = true;
    } else if(pos >= 15){
        povecavaj = false;
    }

    if (povecavaj) {
        pos++;
        nyan.style.top = pos +"%";
    } else {
        pos--;
        nyan.style.top = pos +"%";
    }
}

setInterval(nyanMove, 50);

function povecajNaslov() {
    document.getElementById("naslov").style.textTransform = "uppercase";
}

function vratiNaslov() {
    document.getElementById("naslov").style.textTransform = "initial";
}

function unetoIme() {
    var ime = document.forma.ime;

    if (!ime.value.length > 0 && document.getElementById("povratnaPorukaIme") == null) {
        var fieldset1 = document.getElementById("fieldset1");
        var povratna = document.createElement("p");
        povratna.setAttribute("class", "povratnaPoruka");
        povratna.setAttribute("id", "povratnaPorukaIme");
        povratna.innerHTML = "Morate uneti ime";
        fieldset1.appendChild(povratna);
    } else if (ime.value.length > 0 && document.getElementById("povratnaPorukaIme") != null) {
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
    } else if (prezime.value.length > 0 && document.getElementById("povratnaPorukaPrezime") != null) {
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

function maxDatum() {
    var novi = new Date();
    var datum = document.getElementById("datum");
    var dan = novi.getDate();
    if (dan < 10) {
        dan = '0' + dan;
    }
    var mesec = novi.getMonth() + 1;
    if (mesec < 10) {
        mesec = '0' + mesec;
    }
    var godina = novi.getFullYear();
    datum.setAttribute("max", godina + '-' + mesec + '-' + dan);

    datum.oninvalid = losDatum;
}

function losDatum() {
    this.setCustomValidity("");
    if (this.validity.rangeOverflow) {
        this.setCustomValidity("Unesite datum ranije od danas");
    } else if (this.validity.rangeUnderflow) {
        this.setCustomValidity("Unesite datum kasnije od 01.01.1900.");
    }
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

function losBRP() {
    var brPoseta = document.getElementById("brojPoseta");
    if (!brPoseta.checkValidity()) {
        window.alert(brPoseta.validationMessage);
    }
}

function proveriKomentar() {
    return document.getElementById("komentar").value.length > 200;
}

function losKomentar() {
    var komentar = document.getElementById("komentar");
    if (komentar.value.length > 200) {
        document.getElementById("komentarKomentar").innerHTML = "Molimo Vas skratite komentar ( " + komentar.value.length + " )";
        document.getElementById("komentarKomentar").setAttribute("class", "lose");
    } else {
        document.getElementById("komentarKomentar").innerHTML = "Komentar je u okviru granica ( " + komentar.value.length + " )";
        document.getElementById("komentarKomentar").setAttribute("class", "dobro");
    }
}

function obrisiSadrzaj() {
    if (document.getElementById("komentar").value == "Napišite komentar ovde...")
        document.getElementById("komentar").value = "";
}

function provera() {
    if (!unetoIme()) {
        window.scrollTo(0, 0);
        return false;
    } else if (!proveriIme()) {
        window.scrollTo(0, 0);
        window.alert("Dužina imena treba da je izmedju 2 i 15 znakova.");
        return false;
    } else if (!pocinjeVelikimIme()) {
        window.scrollTo(0, 0);
        window.alert("Ime treba poceti velikim pocetnim slovom");
        return false;
    } else if (!unetoPrezime()) {
        window.scrollTo(0, 0);
        return false;
    } else if (!proveriPrezime()) {
        window.scrollTo(0, 0);
        window.alert("Dužina prezimena treba da je izmedju 3 i 20 znakova.");
        return false;
    } else if (!pocinjeVelikimPrezime()) {
        window.scrollTo(0, 0);
        window.alert("Prezime treba poceti velikim pocetnim slovom");
        return false;
    } else if (!proveriDatum()) {
        window.scrollTo(0, 0);
        window.alert("Morate uneti datum");
        return false;
    } else if (!proveriCheckbox1()) {
        window.scrollTo(0, 500);
        window.alert("Morate čekirati makar jedan element");
        return false;
    } else if (proveriKomentar()) {
        window.alert("Komentar nije u okviru granica");
        return false;
    } else {
        return true;
    }
}