Repositorio: https://github.com/gurrutia15/M4AE2-ABP3.git

Esta actividad cuenta con 3 ejercicios:

# Ejercicio 1
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

En el archivo problema_1.js lo primero es capturar los diferentes elementos del DOM para luego crear la función de validación y con la lógica a utilizar. Por último la función que desencadena el evento