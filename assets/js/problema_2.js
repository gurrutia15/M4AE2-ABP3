// Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no divisible entre 100, o bien, si es divisible entre 400.

// Requerimiento:
// Desarrolla un algoritmo que reciba un número que represente a un año, e indique si corresponde a un año bisiesto o no. Debes validar que el valor ingresado sea un número mayor o igual a cero; de no ser así, no se puede realizar operación adicional alguna.


let ingreso = document.getElementById('numero_ingresado')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

let añoBisiesto = (año)=> {
    año = parseInt(año)

    if (isNaN(año)){
    return respuesta.innerHTML= 'Debe ingresar un número'
    }
    if (año < 0){
        return respuesta.innerHTML = 'Debe ingresar un número igual o mayor a 0'
    }
    if (año % 4 ===0 && año % 100 != 0 || año % 400 === 0){
        return respuesta.innerHTML = `<strong>El año ${año} es bisiesto</strong>`
    } else {
        return respuesta.innerHTML = `<strong>El año ${año} no es bisiesto</strong>`
    }
}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let valorIngresado = ingreso.value
    añoBisiesto(valorIngresado)
    ingreso.value = ''
    ingreso.focus()
})