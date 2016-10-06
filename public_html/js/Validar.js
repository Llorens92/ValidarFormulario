function Validar() {    
    alert(!document.getElementsByTagName("input")[10].checked);
    return ValidarNotEmpty();
}

function ValidarNIF() {
    if (Validar9Digitos() && ValidarNoEspacios() && Validar8PrimDig()) {
        document.getElementsByTagName("form")[0].action = "Procesar_Alta.html";
    } else {
        document.getElementsByTagName("form")[0].action = "Error.html";
    }
    document.getElementById("form")[0].submit();
}

function Validar8PrimDig() {
    var nif = document.getElementsByTagName("input")[0].value;
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 8);
    nums = parseInt(nums);
    var letra = nif.substring(8, 9);
    console.log(letra);
    var resto = nums % 23;
    var correcto = false;
    if (isNaN(nums)) {
        alert("Los 8 primeros caracteres del NIF deben ser números");
    } else {
        switch (resto) {
            case 0:
                if (letra === "T" || letra === "t") {
                    correcto = true;
                }
                break;
            case 1:
                if (letra === "R" || letra === "r") {
                    console.log("TU PADRE");
                    correcto = true;
                }
                break;
            case 2:
                if (letra === "W" || letra === "w") {
                    correcto = true;
                }
                break;
            case 3:
                if (letra === "A" || letra === "a") {
                    correcto = true;
                }
                break;
            case 4:
                if (letra === "G" || letra === "g") {
                    correcto = true;
                }
                break;
            case 5:
                if (letra === "M" || letra === "m") {
                    correcto = true;
                }
                break;
            case 6:
                if (letra === "Y" || letra === "y") {
                    correcto = true;
                }
                break;
            case 7:
                if (letra === "F" || letra === "f") {
                    correcto = true;
                }
                break;
            case 8:
                if (letra === "P" || letra === "p") {
                    correcto = true;
                }
                break;
            case 9:
                if (letra === "D" || letra === "d") {
                    correcto = true;
                }
                break;
            case 10:
                if (letra === "X" || letra === "x") {
                    correcto = true;
                }
                break;
            case 11:
                if (letra === "B" || letra === "b") {
                    correcto = true;
                }
                break;
            case 12:
                if (letra === "N" || letra === "n") {
                    correcto = true;
                }
                break;
            case 13:
                if (letra === "J" || letra === "j") {
                    correcto = true;
                }
                break;
            case 14:
                if (letra === "Z" || letra === "z") {
                    correcto = true;
                }
                break;
            case 15:
                if (letra === "S" || letra === "s") {
                    correcto = true;
                }
                break;
            case 16:
                if (letra === "Q" || letra === "q") {
                    correcto = true;
                }
                break;
            case 17:
                if (letra === "V" || letra === "v") {
                    correcto = true;
                }
                break;
            case 18:
                if (letra === "H" || letra === "h") {
                    correcto = true;
                }
                break;
            case 19:
                if (letra === "L" || letra === "l") {
                    correcto = true;
                }
                break;
            case 20:
                if (letra === "C" || letra === "c") {
                    correcto = true;
                }
                break;
            case 21:
                if (letra === "K" || letra === "k") {
                    correcto = true;
                }
                break;
            case 22:
                if (letra === "E" || letra === "e") {
                    correcto = true;
                }
                break;
            case 23:
                if (letra === "T" || letra === "t") {
                    correcto = true;
                }
                break;
        }
        if (!correcto) {
            alert("La letra del NIF no es correcta");
        }
    }
    return correcto;
}

function ValidarNotEmpty() {
    var correcto = false;
    for (var i = 0; i < document.getElementsByTagName("input").length-1 && !correcto; i++) {
        if (document.getElementsByTagName("input")[i].value.length === 0) {
            alert("No puede dejar el campo " + nomInputs[i] + " vacío");
            correcto = true;
        } 
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


