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
        numberRand = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    }
    
    randomNumbers.push(numberRand);
}

//console.log(randomNumbers); //controllo l'array  //ok

//seleziono il conteritore nel dom dove inserire i numeri 
lista = document.querySelector('.container');
//faccio visualizzare i numeri 
lista.innerHTML = `<h2>${randomNumbers}</h2>`;


// imposto il timer 
setTimeout(function () {

    //svuoto il dom 
    lista.innerHTML = '';

    //imposto un secondo timer per far apparire il prompt 
    setTimeout(function () {

        //inizializzo l'array dei numeri inseriti dall'utente 
        let userNumbers = [];

        // inizializzo il contatore del risultato 
        let risultato = parseInt(0);

        //ciclo per far inserire i numeri all'utente 
        for (let index = 0; index < randomNumbers.length; index++) {
            
            let number = parseInt(prompt('Inserisci il' + '' + (index+1) + '°' + '' + 'numero'));

            //controllo che l'utente abbia inserito un numero 
            while (isNaN(number)) {
                number = parseInt(prompt('Inserisci il' + '' + (index+1) + '°' + '' + 'numero'));
            }
            //arrivo quì solo se l'utente ha inserito un numero e pusho nell'array
            userNumbers.push(number);

            //controllo se il numero inserito dall'utente è presente nell'array dei numeri random 
            if (randomNumbers.includes(number)) {
                risultato = risultato + 1;
            }
        }
        //mostro all'utente i numeri che ha 
        lista.innerHTML = `<h2>Hai indovinato: ${risultato} numeri</h2>`;
    }, 500);
}, 30000);
