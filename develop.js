
// puento 1: hacer un cubo

let fila = 12

for (let i = 1; i <= fila; i++) {
    if (i >= 2 && i < fila) {
        console.log("*              *")
    } else {
        console.log("****************")
    }

}
// ---------------------------------------


// punto 2: multiplos y agregar nombre 

let n = 29
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
        console.log("TzStriker")
    } else if (i % 3 == 0) {
        console.log("Tz")
    } else if (i % 5 == 0) {
        console.log("Straiker")
    } else {
        console.log(i)
    }
}
// ---------------------------------

// punto 3: multiplicacion 

let Tabla = 8
let contador = 0
for (let i = 1; i <= 10; i++) {
    console.log(`${Tabla} x ${i} = ${i*Tabla} `)
}

// -----------------------------------------

// punto avanzado 

let nombre = 'DANIEL'
let posicion =3

let resultado = nombre.split('')

for (let i = 0; i < resultado.length; i++) {
    if(i !=3){
        console.log(resultado[i])
    }
    
}

// ----------------------------------------------------