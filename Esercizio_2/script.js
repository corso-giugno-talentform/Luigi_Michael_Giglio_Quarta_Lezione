// CREA UN SISTEMA DI VALUTAZIONE CHE, DATA UN'ETA', DETERMINI LA CATEGORIA (BAMBINO 0-12, ADOLESCENTE 13-17, ADULTO 18-64, ANZIANO 65+) E SUGGERISCA UN'ATTIVITA' 
// APPROPRIATA! GESTISCI, INOLTRE, LA CASISTICA DEI NUMERI NEGATIVI!

let etaaa = 23;
console.log(etaaa < 0 ? 'Hai inserito un età NON VALIDA!' : '');
console.log(etaaa>=0 && etaaa<=12 ? 'Sei un bambino!' : '');
console.log(etaaa>=13 && etaaa<=17 ? 'Sei un adolescente!' : '');
console.log(etaaa>=18 && etaaa<=64 ? 'Sei un adulto!' : '');
console.log(etaaa>=65 ? 'Sei un anziano!' : '');

//LE CONDIZIONI NEL CONSOLE LOG SEMPRE 2 DEVONO ESSERE, COME PUOI NOTARE -> CONSOLE.LOG(ETAA < 0 ? 'HAI INSERITO UN ETA NON VALIDA' : '');
//                                                                                     CONDIZIONE   STAMPA 1                          STAMPA 2 (ANCHE SE VUOTA CON I 2 '');


//<------------------------------------------------------------------>


let eta = 23;
if(eta < 0){
    console.log("Hai inserito un'età NON VALIDA!")
}
if(eta>=0 && eta <=12){
    console.log('Sei un bambino!');
} 
else if(eta>=13 && eta<=17){
    console.log('Sei un adolescente!');
}
else if(eta>=18 && eta<=64){
    console.log('Sei un adulto!');
}
else if(eta >= 65){
console.log('Sei un anziano!');
}


//<------------------------------------------------------------------>


let etaa=13
switch(true){
    case (etaa < 0):
        console.log("L'età inserita NON E' VALIDA!");
        break;
    case (etaa <= 12):
        console.log("Sei un bambino!");
        break;
    case (etaa <= 17):
        console.log("Sei un adolescente!");
        break;
    case (etaa <= 64):
        console.log("Sei un adulto!");
        break;                       
    case (etaa > 65):
        console.log("Sei un anziano!");
        break;
    default:
        console.log('Hai inserito un carattere NON VALIDO!')
}