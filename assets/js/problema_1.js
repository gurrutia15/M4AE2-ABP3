// En un conocido juego de azar con opciones pertenecientes al conjunto de los números mayores a 1 y menores o iguales a 100, existen números que tienen más probabilidad de ganar. Esto aplica cuando un número es menor a 15 y mayor a 5, o bien si el número es el 70 o el 55. 

// Requerimiento:
// Realiza un algoritmo y pieza de código en JavaScript tal que, ingresado un número, imprima en pantalla el mensaje “El número ingresado tiene opciones de ganar” en caso de que esté en el rango antes indicado, o bien imprima en pantalla el mensaje “El número ingresado no es favorable” en caso contrario.

let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

function mejoresOpciones(num) {
    num = parseInt(num)
    if (isNaN(num)) {
        respuesta.innerHTML = 'Debe ingresar un número'
        return
    }
    if (num < 1) {
        respuesta.innerHTML = 'Debe ingresar un número igual o mayor a 1'
        return
    }
    if (num > 100) {
        respuesta.innerHTML = 'Debe ingresar un número que sea igual o menor a 100'
        return
    }
    if (num < 15 && num > 5 || num === 70 || num === 55) {
        return respuesta.innerHTML = 'El número ingresado tiene opciones de ganar'
    } else {
        respuesta.innerHTML = 'El número ingresado no es favorable'
    }
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let valorIngresado = ingreso.value
    mejoresOpciones(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})