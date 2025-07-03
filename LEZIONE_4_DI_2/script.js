// CICLOFOR

// for(init, condizione, iterazione)
// contenuto

//<--------------------------------------------------------------------->

for(let i = 1; i <= 100; i++){
    if(i==50){
        console.log('Ciao');
    } else {
         console.log('Il numero che sto visulizzando è ' + i);
}  
}


//<--------------------------------------------------------------------->


// MI RACCOMANDO, SI METTONO 3 UGUALI ( === ) PERCHE' IL RESTO NON E' 
// UNA DIVISIONE. I 3 UGUALI INDICANO CHE DEVONO UGUALI (SIA DI NUMERO) CHE
// DI TIPO! 
n1 MODULO n2 === 0 //PARI
n1 MODULO n2 === 1 //DISPARI
console.log(3 % 2 === 0)


for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log('Il numero è PARI e sto visualizzando ' + i);
    } else {
        console.log('Il numero è DISPARI e sto visualizzando ' + i);
    }
}


//<--------------------------------------------------------------------->


// STAMPA DI NUMERI SOLO PARI!

if(i % 2 === 0){
    console.log('Il numero è PARI e sto visualizzando ' + i);
} else {
    break;
}

// Oppure si può scrivere in questa maniera! 

if(i % 2 !== 1){
    break; 
}
console.log('Il numero è PARI e sto visualizzando ' + i);

// Inoltre abbiamo sia il break che il continue! 
// (Break INTERROMPE) (Continue CONTINUA -> Ti fa andare nell'altra iterazione)

if(i % 2 !== 1){
    console.log('Sono qui!')
    continue; 
}
console.log('Il numero è PARI e sto visualizzando ' + i);


// STAMPA DI NUMERI SOLO DISPARI!

if(i % 2 === 1){                // <--------
    console.log('Sono qui!')    //          |
    continue;                   //IL CONTINUE RIPORTA LI!
}
console.log('Il numero è DISPARI e sto visualizzando ' + i);

//<--------------------------------------------------------------------->

console.log(i);
if(i == 50) {
    break;
}