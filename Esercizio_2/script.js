// CREA UN SISTEMA DI VALUTAZIONE CHE, DATA UN'ETA', DETERMINI LA CATEGORIA (BAMBINO 0-12, ADOLESCENTE 13-17, ADULTO 18-64, ANZIANO 65+) E SUGGERISCA UN'ATTIVITA' 
// APPROPRIATA! GESTISCI, INOLTRE, LA CASISTICA DEI NUMERI NEGATIVI!

//let eta = 23;
//console.log(eta < 0 ? 'Hai inserito un'età NON VALIDA!);
//console.log(eta>=0 && eta<=12 ? 'Sei un bambino!');
//console.log(eta>=13 && eta<=17 ? 'Sei un adolescente!');
//console.log(eta>=18 && eta<=64 ? 'Sei un adulto!');
//console.log(eta>=65 ? 'Sei un anziano!');


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