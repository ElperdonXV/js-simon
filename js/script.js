//Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creo un array vuoto che conterrà i 5 numeri casuali 
let randomNumbers = [];

//inzializzo la costante dei 5 numeri
const numNumbers = parseInt(5);

// genero i 5 numeri casuali e li pusho nell'array
for (let i = 0; i < numNumbers; i++) {
    //genero un numero da 1 a 100
    let numberRand = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    //controllo se il numero generato è dentro l'array dei numeri
    //se non lo è allora lo inserisco nell'array
    //altrimenti ne genero uno nuovo

    while (randomNumbers.includes(numberRand)) { 
        numberRand = Math.floor(Math.random());
    }

    randomNumbers.push(numberRand);
}

console.log(randomNumbers); //controllo l'array  //ok