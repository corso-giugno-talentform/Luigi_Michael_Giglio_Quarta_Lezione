//Esercizio 6.1: Crea un programma che calcoli la somma di tutti i numeri da 1 a 100 usando un ciclo for.
somma = 0;
for(let i = 1; i > i<=100; i++ ){
    somma += i;
    console.log('La somma dei numeri da 1 a 100 è', somma);

}


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 


//Esercizio 6.2: Crea un programma che stampi la tabellina di un numero (scelto da te) da 1 a 10, saltando il numero 5 usando continue.
for(let i = 1; i<=10; i++){
    if(i == 5)
        continue;
    console.log(`7 x ${i} = ${7 * i}`);
}


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 


//Esercizio 6.3: FIZZ-BUZZ: Utilizzando la logica appena appresa con l’operatore Modulo, scrivere un programma che stampi in console tutti i numeri da 1 a 30.
//Se il numero e’ multiplo di 3 deve stampare “Vostro Nome”; Se multiplo di 5 deve stampare “Cognome”; Se multiplo di 3 e 5 (15) deve stampare “Nome e Cognome”;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Michael Giglio");
    } else if (i % 3 === 0) {
        console.log("Michael");
    } else if (i % 5 === 0) {
        console.log("Giglio");
    } else {
        console.log(i);
    }
}


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 


// Esercizio 7.1: Crea una funzione calcolatrice che prenda tre parametri (numero1, numero2, operazione) e restituisca il risultato. L'operazione può essere "+", "-", "*", "/".
function calcolatrice(numero1, numero2, operazione){
    return operazione === '+' ? numero1 + numero2
    : operazione === '-' ? numero1 - numero2 
    : operazione === '/' ? (numero2 !== 0 ? numero1 / numero2 : "Errore: divisione per zero!")
    : operazione === '*' ? numero1 * numero2
    : "Operazione non valida!";
}

// Esempi di utilizzo
console.log(calcolatrice(10, 5, "+")); // 15
console.log(calcolatrice(10, 5, "-")); // 5
console.log(calcolatrice(10, 5, "*")); // 50
console.log(calcolatrice(10, 5, "/")); // 2
console.log(calcolatrice(10, 0, "/")); // Errore: divisione per zero!
console.log(calcolatrice(10, 5, "%")); // Operazione non valida!


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 


//Esercizio 7.2: Utilizzando un approccio funzionale (piccole funzioni che risolvono un piccolo problema), riscrivere il programma fatto in precedenza che stampi in console tutti i numeri da 1 a 30. 
//(usare 2 funzioni massimo)
//Se il numero e’ multiplo di 3 deve stampare “Vostro Nome”; Se multiplo di 5 deve stampare “Cognome”; Se multiplo di 3 e 5 (15) deve stampare “Nome e Cognome”;

const checkNumero = n =>
    n % 3 === 0 && n % 5 === 0 ? "Michael Giglio" :
        n % 3 === 0 ? "Michael" :
            n % 5 === 0 ? "Giglio" :
                n;

const stampa = finoA => {
    for (let i = 1; i <= finoA; i++) {
        console.log(checkNumero(i));
    }
};

stampa(30);


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 


//Esercizio 7.3: Scrivere un programma funzionale che, dato un numero in input (max), stampi a video:
//PRIMA tutti i numeri Dispari DOPO tutti i numeri PARI

function stampaNumeri(tipo, max){
    for(let i = 1; i <=max; i++){
        tipo === 'dispari' ? (i % 2 !== 0 ? console.log(i) : null)
    :   (tipo === 'pari' ? (i % 2 === 0 ? console.log(i): null) : null)
    }
}

function main(max){
    console.log("Numeri Dispari");
    stampaNumeri("dispari", max);

    console.log("Numeri Pari");
    stampaNumeri("pari", max);
}
main (10);