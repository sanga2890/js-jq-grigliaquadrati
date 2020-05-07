// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2:

// creo una funzione per generare numeri random;
function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// BONUS 1: genero la griglia con jquery;
for(var i = 0; i < 25; i++) {
    $('.grill').append('<div class = "square"></div>')
}

// sostituisco precendete ciclo do while con each e creo una variabile per i numeri random;
$('.square').each(function(){
    var random_numbers = random (0 , 10);

//BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde
    if (random_numbers % 2 == 0 && random_numbers != 0){
        $(this).addClass('red')
    } else if (random_numbers == 0){
        $(this).addClass('green')
    }


// ad ogni quadrato aggiungo 1 numero generato;
    $(this).append(random_numbers)
})
