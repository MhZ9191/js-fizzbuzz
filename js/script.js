// ? CREO CICLO FOR AL CUI INTERNO INSERISCO I MIEI CONTROLLI
// ? INIZIO CON VERIFICARE SE SONO MULTIPLI DI 15, POI 5 E INFINE 3
// ? OUTPUT NELLA CONSOLE DIVERSO PER I 3 CASI

//* INIZIO CICLO FOR
for (let i = 1; i <= 100; i++) {
  // * VERIFICO CHE SIA MULTIPLO DI 5 E DI 3
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`${i} : FizzBuzz`);
  }
  // * VERIFICO CHE SIA MULTIPLO DI 5
  else if (i % 5 === 0) {
    console.log(`${i} : Buzz`);
  }
  // * VERIFICO CHE SIA MULTIPLO DI 3
  else if (i % 3 === 0) {
    console.log(`${i} : Fizz`);
  }
  // * SE NON RISPETTA NESSUNA CONDIZIONE STAMPO SOLO "i"
  else {
    console.log(`${i}`);
  }
}
