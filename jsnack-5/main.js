/*
Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

*/

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


let choiseOne = prompt(` scegli un numero fra 0 e ${myArray.length}`);
let choiseTwo =  prompt(` scegli un numero fra 0 e ${myArray.length}`);


const newArr = myArray.filter((elemnt,index) =>{
  if(index >= choiseOne && index <= choiseTwo){
    return elemnt;
  }
});

console.log(newArr);
