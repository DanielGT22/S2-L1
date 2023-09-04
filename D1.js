/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i Principali datatype sono:
Stringa: la stringa la scriviamo dentro le "", ci serve di solito se lavoriamo col testo o con dati che di solito non dobbiamo modificare o utilizare più di tanto nel futuro
Numerici: Ci serve per inserire valori, come numeri, che poi li usiamo per gli aalgoritmi,
booleane: sono le risposte che possiamo avere dopo che facciamo una domanda logica, possono essere True o False (vere o false)
undefined: ci mostra un oggetto non definito, quindi js non sa se definirlo come una stringa o un valore numerico
null: ci lascia lasciare il contenuto della variabile vuoto permetendoci di cambiare i suoi valori piu in davanti (solo se no è un const)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

*/
let name = "Daniel";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
let risultato = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* let name = "Daniel"; */
name = "Grujic";
console.log(name);

/*
const secondoNome = "Jovan";
secondoNome = "Non ho un secondo nome";
console.log(secondoNome);

qua ci risultato un errore come il valore di  const non può essere cambiato. */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

*/
let risultatoValoreX = x - 4;
console.log(risultatoValoreX);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);

let equalLower = name1.toLowerCase === name2.toLowerCase;
console.log(equalLower);
