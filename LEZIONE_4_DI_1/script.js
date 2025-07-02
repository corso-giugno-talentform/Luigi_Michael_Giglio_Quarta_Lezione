const MAX = 18;
let eta = 19;

if(MAX > eta){ 
    console.log('Sei minorenne!')
}
else if(MAX == eta){
    console.log('Hai esattamente 18 anni!')
}
else {
    console.log('Sei maggiorenne!');
}

//<------------------------------------------------------------------>


//OPERATORE TERNARIO
//console.log condizione ? 'prima stampa se verificata' : (oppure) 'seconda stampa verificata';
console.log(eta >= MAX ? 'Maggiorenne' : 'Sei minorenne');


//<------------------------------------------------------------------>


//abbiamo 2 modalità di scrittura... Questa è più sintetica! (Consigliata)
let status_prodotto = 0;
console.log(status_prodotto > 0 ? 'Prodotto Disponibile' : 'Esaurito');


//oppure si può scrivere in questo modo
if(status_prodotto > 0)[
    console.log('Prodotto Disponibile')
]
else[
    console.log('Esaurito')
]


//<------------------------------------------------------------------>


//Forma base, non sbagliata. Però scrivi tantissimo codice!

let giorno = 'lunedi';
if(giorno == 'lunedi') [
    console.log('Oggi è lunedi')
]
else if (giorno == 'martedi'){
    console.log('Oggi è Martedi')
}
else if (giorno == 'mercoledi'){
    console.log('Oggi è Mercoledi')
}
else if (giorno == 'giovedi'){
    console.log('Oggi è Giovedi')
}
else{
    console.log('Oggi è Venerdi')
}

//Switch Case

switch(giorno){
    case "lunedi":
        console.log('Oggi è Lunedi');
        break;
    case "martedi":
        console.log('Oggi è Martedi');
        break;
    case "mercoledi":
        console.log('Oggi è Mercoledi');
        break;
    case "giovedi":
        console.log('Oggi è Giovedi');
        break;
    case "venerdi":
        console.log('Oggi è Venerdi');
        break;

}