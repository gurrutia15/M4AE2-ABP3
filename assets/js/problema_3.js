// Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no conoce las reglas del deporte.En particular, no ha logrado aprender cómo saber si un set ya terminó, y quién lo ganó.Un partido de tenis se divide en sets.Para ganar un set, un jugador debe ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos más que su rival.Si el set está empatado a 5 juegos, el ganador es el primero que llegue a 7. Si el set está empatado a 6 juegos, el set se define en un último juego, en cuyo caso el resultado final es 7 - 6. Sabiendo que el jugador A ha ganado m juegos, y el jugador B, n juegos, al periodista le gustaría saber si:
// ● A ganó el set, o
// ● B ganó el set, o
// ● el set todavía no termina, o el resultado es inválido(por ejemplo, 8 - 6 o 7 - 3).

let ingresoJugadorA = document.getElementById('juegosA')
let ingresoJugadorB = document.getElementById('juegosB')
let btnIngresar = document.getElementById('btn_ingresar')
let respuesta = document.getElementById('resultado')

let quienGana = (m, n) => {
    m = Number(m)
    n = Number(n)

    if (isNaN(m) || isNaN(n)) {
        return 'Resultado inválido'
    }

    if (m < 0 || n < 0 || m > 7 || n > 7) {
        return 'Resultado inválido'
    }

    if (!Number.isInteger(m) || !Number.isInteger(n)) {
        return 'Sólo se pueden ingresar números enteros'
    }
    if (m === 7 && n < 5 && n !== 6) { // n !== 6 por el tie-break
        return 'Resultado inválido';
    }
    if (n === 7 && m < 5 && m !== 6) {
        return 'Resultado inválido';
    }

    if ((m === 6 && n <= 4) || (m === 7 && n === 5) || (m === 7 && n === 6)) {
        return `Ganó el jugador A : ${m} - ${n}`
    }
    else if ((n === 6 && m <= 4) || (n === 7 && m === 5) || (n === 7 && m === 6)) {
        return `Ganó el jugador B : ${m} - ${n}`
    }
    else {
        return 'El set aún no termina'
    }


}

btnIngresar.addEventListener('click', function (e) {
    e.preventDefault()
    let juegosGanadosA = ingresoJugadorA.value
    let juegosGanadosB = ingresoJugadorB.value
    let resultado = quienGana(juegosGanadosA, juegosGanadosB)
    respuesta.textContent = resultado
    ingresoJugadorA.value = ''
    ingresoJugadorB.value = ''
    ingresoJugadorA.focus()
})

