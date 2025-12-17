/*
Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:

    scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

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
}
