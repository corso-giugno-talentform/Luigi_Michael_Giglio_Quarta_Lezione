// CREA UN PROGRAMMA CHE DETERMINI LA STAGIONE BASANDOSI SUL MESE (1-12) USANDO SWITCH STATEMENT!

let mese = "luglio";
switch(mese){
    case ("dicembre"||"gennaio"||"febbraio"):
        console.log('Inverno')
        break;
    case ("marzo"||"aprile"||"maggio"):
        console.log('Primavera')
        break;
     case ("gigugno"||"luglio"||"agosto"):
        console.log('Estate')
        break;
    case ("settembre"||"ottobre"||"novembre"):
        console.log('Autunno')
        break;
}