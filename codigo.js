
function encriptarDesencriptarTexto(accion) {
    var mensajeOriginal = document.getElementById("textoIngresado").value;
    var texto = document.getElementById("textoIngresado").value;
    var mensajeModificado = '';
    var textoValido = true;
    for (var i = 0; i < texto.length; i++) {
        if (!((texto[i] >= 'a' && texto[i] <= 'z') || texto[i] === ' ')) {
            // Muestra un mensaje de error si se ingresan caracteres no permitidos y se limpian las cajas
            alert("¡Solo se permiten letras minúsculas y espacios!");
            textoValido = false;
            limpiarCajas();
            break;
        }
    }
    if (textoValido) {
        if (accion === 'encriptar') {
            var letrasReemplazo = {
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'o': 'ober',
                'u': 'ufat'
            };
            for (var i = 0; i < mensajeOriginal.length; i++) {
                var letraActual = mensajeOriginal[i];
                if (letrasReemplazo.hasOwnProperty(letraActual)) {
                    mensajeModificado += letrasReemplazo[letraActual];
                }//se busca si hay una vocal en el mensaje para ser reemplazada por su código
                else {
                    mensajeModificado += letraActual;
                }
            }
          
        }
        else if (accion === 'desencriptar') {
            var letrasReemplazo = {
                'ai': 'a',
                'enter': 'e',
                'imes': 'i',
                'ober': 'o',
                'ufat': 'u'
            };
            var mensajeModificado = '';
            var i = 0;
            while (i < mensajeOriginal.length) {
                var fragmentoActual = '';
                for (var j = i; j < mensajeOriginal.length; j++) {
                    fragmentoActual += mensajeOriginal[j];
                    if (letrasReemplazo.hasOwnProperty(fragmentoActual)) {
                        mensajeModificado += letrasReemplazo[fragmentoActual];
                        i = j + 1;
                        break;
                    }
                }
                if (j === mensajeOriginal.length) {
                    // Si no se encontró ningún fragmento para desencriptar, se agrega el carácter original
                    mensajeModificado += mensajeOriginal[i];
                    i++;
                }
            }          
        }
        document.getElementById("mensajeModificado").value = mensajeModificado;
    }
}

function copiarTexto() {
    document.querySelector('#textoIngresado').value = '';
    var mensajeEncriptado = document.getElementById("mensajeModificado").value;
    navigator.clipboard.writeText(mensajeEncriptado)
}

function limpiarCajas() {
    document.querySelector('#textoIngresado').value = '';
    document.querySelector('#mensajeModificado').value = '';
}

function pegarTexto() {
    navigator.clipboard.readText()
        .then(texto => {
            document.getElementById("textoIngresado").value = texto;
        })
    limpiarCajas()
}



