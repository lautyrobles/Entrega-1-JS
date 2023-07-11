// Ejercicio 1: Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function ParOImpar(numero) {
    if(numero %2 === 0) {
        console.log(`El numero ${numero} es par.`)
    } else {
        console.log(`El numero ${numero} es impar.`)
    }
}

ParOImpar(2);
ParOImpar(3);

// Ejercicio 2: Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function MayorOMenor(num1, num2) {
    if(num1 > num2) {
        console.log(`El numero ${num1} es mayor al numero ${num2}.`)
    } else if (num2 > num1) {
        console.log(`El numero ${num2} es mayor a ${num1}.`)
    } else {
        console.log('Los numeros son iguales.')
    }
}

MayorOMenor(3,2);
MayorOMenor(5,7);
MayorOMenor(0,0);

// Ejercicio 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function MultiploDeCinco(numero) {
    if(numero %5 === 0) {
        console.log(`El numero ${numero} es multiplo de 5.`)
    } else {
        console.log(`El numero ${numero} no es multiplo de 5.`)
    }
}

MultiploDeCinco(10);
MultiploDeCinco(5);
MultiploDeCinco(12);

// Ejercicio 4: Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ImprimirDesdeCeroHastaElNumero(numero) {
    for(let i = 0; i <= numero; i++) {
        console.log(i)
    }
}

ImprimirDesdeCeroHastaElNumero(10);

// Ejercicio 5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

let palabra = 'Hola Mundo'
let numero = 5;

function ImprimirPalabraUnNumeroDeVeces(palabra, numero) {
    for(let i = 0; i < numero; i++) {
        console.log(palabra)
    }
}

ImprimirPalabraUnNumeroDeVeces(palabra,numero)

// Ejercicio 6: Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let PrimerArray = [1, 2, 3, 4, 5]

function ImprimirArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

ImprimirArray(PrimerArray);

// Ejercicio 7: Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.

let SegundoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ImprimirValoresSinElQuinto(array) {
    for(let i = 0; i < array.length; i++) {
        if(i !=4) {
            console.log(array[i])
        }
    }
}

ImprimirValoresSinElQuinto(SegundoArray);

// Ejercicio 8: Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let TercerArray = [2, 4, 6, 8]

function ImprimirMultiplicacionDeArray(array, numero) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i] * numero)
    }
}

ImprimirMultiplicacionDeArray(TercerArray, 2);
