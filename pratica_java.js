let numArray = [1, 2, "3", 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numArray.length; i++) {
  if (typeof numArray[i] !== "number") {
    console.log(
      `Hay un colado, este elemento ${numArray[i]}
       no es un numero y esta en la posicion ${i}!!!`
    );
  }
}

// let estudiantesArray = [
//     "Michael",
//     true !== false,
//     12 * 5,
//     {
//         nombre: "Esteban",
//         apellido: "Nanote"
//     },
//     "Gabriela",
//     "Natalia",
//     "Angel",
//     "Andres",
//     "Dewey",
//   ];
  
//   for (let i in estudiantesArray) {
//     console.log(estudiantesArray[i]);
//   }
