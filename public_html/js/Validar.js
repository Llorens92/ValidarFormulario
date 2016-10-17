function Validar() {
    var correcto=false;
    if (ValidarNIF() && ValidarNomyApe(1) && ValidarNomyApe(2))
        if (ValidarPass() && ValidarEmail()) {
            correcto=ValidarNotEmpty();
        } else {
            ValidarNotEmpty();
        }
    return correcto;
}
function ValidarNomyApe(num) {
    var arrayCar = document.getElementsByTagName("input")[num].value.split("");
    var letras = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "ç", "z", "x", "c", "v", "b", "n", "m"];
    var correcto = false;
    var salir = false;
    if (arrayCar.length > 0) {
        for (var i = 0; i < arrayCar.length && !salir; i++) {
            correcto = false;
            for (var j = 0; j < letras.length && !correcto; j++) {
                if (arrayCar[i].toLowerCase() === letras[j]) {
                    correcto = true;
                }
            }
            if (!correcto) {
                salir = true;
            }
        }
        if (!correcto) {
            alert("El nombre y los apellidos deben estar compuestos solo por letras");
        }
    } else {
        correcto = true;
    }
    return correcto;
}

function ValidarPass() {
    var arrayCar = document.getElementsByTagName("input")[5].value.split("");
    var hayNum = false;
    var hayLetra = false;
    var correcto = false;
    if (arrayCar.length < 2) {
        document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-remove text-danger");
    } else {
        for (var i = 0; i < arrayCar.length && (!hayNum || !hayLetra); i++) {
            if (isNaN(arrayCar[i])) {
                hayLetra = true;
            } else {
                hayNum = true;
            }
        }
        if (hayNum && hayLetra) {
            document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-ok text-success");
            correcto = true;
        } else {
            document.getElementsByTagName("span")[1].setAttribute("class", "glyphicon glyphicon-remove text-danger");
        }
    }
    return correcto;

}
function ValidarEmail() {
    var arrayCar = document.getElementsByTagName("input")[4].value.split("");
    var correctoArro = false;
    var posArro = -1;
    var correcto = false;
    for (var i = 0; i < arrayCar.length && !correctoArro; i++) {
        if (arrayCar[i] === "@" && i !== 0 && i < arrayCar.length - 3) {
            correctoArro = true;
            posArro = i;
        }
    }
    var correctoPunto = false;
    for (var i = 0; i < arrayCar.length && !correctoPunto; i++) {
        if (arrayCar[i] === "." && i > 2 && i < arrayCar.length - 1) {
            correctoPunto = true;
        }
    }
    var correctoNotNum = false;
    for (var i = posArro; i < arrayCar.length; i++) {
        if (isNaN(arrayCar[i])) {
            correctoNotNum = true;
        }
    }
    if (correctoArro && correctoPunto && correctoNotNum) {
        document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-ok text-success");
        correcto = true;
    } else {
        document.getElementsByTagName("span")[0].setAttribute("class", "glyphicon glyphicon-remove text-danger");
    }
    return correcto;
}

function ValidarNIF() {
    return (ValidarNotEmptyNif() && Validar9Digitos() && ValidarNoEspacios() && Validar8PrimDig());
}

function Validar8PrimDig() {
    var nif = document.getElementsByTagName("input")[0].value;
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 8);
    nums = parseInt(nums);
    var letra = nif.substring(8, 9);
    var resto = nums % 23;
    var correcto = false;
    if (isNaN(nums)) {
        alert("Los 8 primeros caracteres del NIF deben ser números");
    } else {
        var letrasValidas = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e", "t"];
        if (letrasValidas[resto] === letra.toLowerCase()) {
            correcto = true;
        }
        if (!correcto) {
            alert("La letra del NIF no es correcta");
        }
    }
    return correcto;
}

function ValidarNotEmpty() {
    var correcto = false;
    var form = document.forms[0];
    for (var i = 1; i < form.length - 1 && !correcto; i++) {
        if (form.elements[i].value.length === 0) {
            alert("No ha rellenado el campo " + form.elements[i].name);
            correcto = true;
        }
    }
    return !correcto;
}

function ValidarNotEmptyNif() {
    var correcto = false;
    var nif = document.getElementsByTagName("input")[0].value;
    if (nif.length === 0) {
        alert("No ha rellenado el campo NIF");
        correcto = true;
    }
    return !correcto;
}


function ValidarNoEspacios() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split(" ");
    var hayEspacios = false;
    if (array.length > 1)
        hayEspacios = true;
    if (hayEspacios) {
        alert("Ha introducido espacios en blanco");
    }
    return !hayEspacios;
}

function Validar9Digitos() {
    var nums = document.getElementsByTagName("input")[0].value;
    var array = nums.split("");
    var NueveDig = false;
    if (array.length !== 9)
        NueveDig = true;
    if (NueveDig) {
        alert("Debe introducir 9 dígitos");
    }
    return !NueveDig;
}


