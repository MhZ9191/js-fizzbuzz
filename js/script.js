// ? CREO CICLO FOR AL CUI INTERNO INSERISCO I MIEI CONTROLLI
// ? INIZIO CON VERIFICARE SE SONO MULTIPLI DI 15, POI 5 E INFINE 3
// ? OUTPUT NELLA CONSOLE DIVERSO PER I 3 CASI

// //* INIZIO CICLO FOR
// for (let i = 1; i <= 100; i++) {
//   // * VERIFICO CHE SIA MULTIPLO DI 5 E DI 3
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`${i} : FizzBuzz`);
//   }
//   // * VERIFICO CHE SIA MULTIPLO DI 5
//   else if (i % 5 === 0) {
//     console.log(`${i} : Buzz`);
//   }
//   // * VERIFICO CHE SIA MULTIPLO DI 3
//   else if (i % 3 === 0) {
//     console.log(`${i} : Fizz`);
//   }
//   // * SE NON RISPETTA NESSUNA CONDIZIONE STAMPO SOLO "i"
//   else {
//     console.log(`${i}`);
//   }
// }

// ! SE HO UN SOLO COMANDO DOPO IF POSSO OMETTERE LE GRAFFE?

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) console.log(`${i} : FizzBuzz`); // ! primo IF
//   else if (i % 5 === 0) console.log(`${i} : Buzz`); // ! secondo ELSE IF
//   else if (i % 3 === 0) console.log(`${i} : Fizz`); // ! terzo ELSE IF
//   else console.log(`${i}`); // ! ELSE
// }
//
//
//
// ! POSSO USARE UNA LISTA DI FUNZIONI?
// function mulQuindici(num) {
//   console.log(`${num} : FizzBuzz`);
// }

// function mulCinque(num) {
//   console.log(`${num} : Buzz`);
// }

// function mulTre(num) {
//   console.log(`${num} : Fizz`);
// }

// // * lista con dentro nomi di funzione
// const myList = [mulQuindici, mulCinque, mulTre];

// // * inizio ciclo
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     myList[0](i);
//   } else if (i % 5 === 0) {
//     myList[1](i);
//   } else if (i % 3 === 0) {
//     myList[2](i);
//   } else {
//     console.log(`${i}`);
//   }
// }
//
//
//
//
//
// ! POSSO USARE VARIABILI COME CONDIZIONI?

// for (let i = 1; i < 100; i++) {
//   const firstCondition = i % 5 === 0 && i % 3 === 0;
//   const secondCondition = i % 5 === 0;
//   const thirdCondition = i % 3 === 0;

//   if (firstCondition) {
//     console.log(`${i} : FizzBuzz`);
//   } else if (secondCondition) {
//     console.log(`${i} : Buzz`);
//   } else if (thirdCondition) {
//     console.log(`${i} : Fizz`);
//   } else {
//     console.log(`${i}`);
//   }
// }
//
//
//
//
//
//
//
// ! USARE IL CICLO FOR SU UNA STRINGA

// let myString = "hello world!";
// let newString = "";

// for (let i = 0; i < myString.length; i++) {
//   if (i % 2 === 0) {
//     newString += myString[i].toUpperCase();
//   } else {
//     newString += myString[i];
//   }
// }

// console.log(newString);
//
//
//
//
//
//
//
//
// ! USARE CICLO FOR PER CREARE UNA LISTA DI NUMERI RANDOM E CICLARE SE CI SONO MULTIPLI DI 15,5 E 3

// let myList = [];

// // * CREO LA LISTA DI NUMERI RANDOM
// for (let i = 0; i < 30; i++) {
//   myList[i] = Math.floor(Math.random() * 200 + 1);
// }

// // * ORDINO GLI ELEMENTI IN ORDINE CRESCENTE
// let tmp;
// for (let i = 0; i < myList.length - 1; i++) {
//   for (let m = 0; m < myList.length - 1; m++) {
//     if (myList[m] > myList[m + 1]) {
//       tmp = myList[m + 1];
//       myList[m + 1] = myList[m];
//       myList[m] = tmp;
//     }
//   }
// }

// // * MANDO A SCHERMO
// for (let i = 0; i < myList.length; i++) {
//   const firstCondition = i % 5 === 0 && i % 3 === 0;
//   const secondCondition = i % 5 === 0;
//   const thirdCondition = i % 3 === 0;

//   if (firstCondition) {
//     console.log(`${myList[i]} : FizzBuzz`);
//   } else if (secondCondition) {
//     console.log(`${myList[i]} : Buzz`);
//   } else if (thirdCondition) {
//     console.log(`${myList[i]} : Fizz`);
//   } else {
//     console.log(`${myList[i]}`);
//   }
// }

//
//
//
//

// ! BONUS
/*
il bonus è: la tua soluzione è quella giusta!
maaaa
ne esiste un'altra
se ci pensi... fizzbuzz è fizz + buzz
quindi potremmo ottenere tramite concatenazione di stringhe e.... senza la condizione %15
pensaci!
*/

let myTest;

for (let i = 1; i <= 100; i++) {
  myTest = "";
  if (i % 5 === 0) {
    myTest += "fizz";
  }
  if (i % 3 === 0) {
    myTest += "buzz";
  }

  if (myTest) {
    console.log(myTest);
  } else {
    console.log(i);
  }
}
