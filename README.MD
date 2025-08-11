Repositorio: https://github.com/gurrutia15/M4AE2-ABP3.git

Esta actividad cuenta con 3 ejercicios:

# Problema 1
## Contexto
En un conocido juego de azar con opciones pertenecientes al conjunto de los números mayores a 1 y menores o iguales a 100, existen números que tienen más probabilidad de ganar. Esto aplica cuando un número es menor a 15 y mayor a 5, o bien si el número es el 70 o el 55.

## Requerimiento
Realiza un algoritmo y pieza de código en JavaScript tal que, ingresado un número, imprima en pantalla el mensaje “El número ingresado tiene opciones de ganar” en caso de que esté en el rango antes indicado, o bien imprima en pantalla el mensaje “El número ingresado no es favorable” en caso contrario.

### Archivos
- HTML: `problema_1.html`
- JS: `problema_1.js`
- CSS: `styles.css`

## Desarrollo
El problema_1.html cuenta con un formulario formado por un input que recibe un número y que contiene las primeras validaciones para cumplir con los requerimientos:

- Atributo `min="1"`

En el archivo problema_1.js lo primero es capturar los diferentes elementos del DOM para luego crear la función de validación junto con la lógica a utilizar. Por último la función que desencadena el evento

# Problema 2
## Contexto
Un año es bisiesto en el calendario Gregoriano si es divisible entre 4 y no divisible entre 100, o bien, si es divisible entre 400.

## Requerimiento
Desarrollar un algoritmo que reciba un número que represente a un año, e indique si corresponde a un año bisiesto o no. Debes validar que el valor ingresado sea un número mayor o igual a cero; de no ser así, no se puede realizar operación adicional alguna.

### Archivos
- HTML: `problema_2.html`
- JS: `problema_2.js`
- CSS: `styles.css`

## Desarrollo
El problema_1.html cuenta con un formulario formado por un input que recibe un número y que contiene las primeras validaciones para cumplir con los requerimientos:

- Atributo `min="0"`

En el archivo problema_2.js lo primero es capturar los diferentes elementos del DOM para luego crear la función de validación junto con la lógica a utilizar. Por último la función que desencadena el evento

# Problema 3
## Contexto
Un periodista llamado Perio Dista, debe relatar un partido de tenis, pero no conoce las reglas del deporte.En particular, no ha logrado aprender cómo saber si un set ya terminó, y quién lo ganó.Un partido de tenis se divide en sets.Para ganar un set, un jugador debe ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos más que su rival.Si el set está empatado a 5 juegos, el ganador es el primero que llegue a 7. Si el set está empatado a 6 juegos, el set se define en un último juego, en cuyo caso el resultado final es 7 - 6.

## Requerimiento
Sabiendo que el jugador A ha ganado m juegos, y el jugador B, n juegos, al periodista le gustaría saber si:
     ● A ganó el set, o
     ● B ganó el set, o
     ● el set todavía no termina, o el resultado es inválido(por ejemplo, 8 - 6 o 7 - 3).

### Archivos
- HTML: `problema_3.html`
- JS: `problema_3.js`
- CSS: `styles.css`

## Desarrollo
El problema_1.html cuenta con un formulario formado por 2 input, cada uno recibe un número que corresponde a los juegos que ha ganado cada jugador durante el set, y que contiene las primeras validaciones para cumplir con los requerimientos:

- Atributo `min="0"`
- Atributo `step="1"` valida que el número ingresado sea un entero
- Atributo `max=7`

En el archivo problema_3.js lo primero es capturar los diferentes elementos del DOM para luego crear la función de validación junto con la lógica a utilizar. Por último la función que desencadena el evento