// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

// creo una funzione per generare numeri random;
function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creo una variabile con un array vuoto dove andrò ad inserire i numeri random generati;
var list_number = [];

// genero per 25 volte un numero random da 0 a 10;
do {
    var random_number = random(0, 10);
    list_number.push(random_number)
} while (list_number.length < 25)
console.log(list_number);
