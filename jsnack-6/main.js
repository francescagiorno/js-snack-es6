/*
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

*/

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];


function randomLetters(){

   const lettereRandom = "abcdefghilmnopqrstuvz"
   return lettereRandom[Math.floor(Math.random() * lettereRandom.length)]

}

const newArr = arrayObj.map((element, index) =>{
  let newEl = {
    ...element,
    position: randomLetters()
  }

  return newEl
})

console.log(newArr);
console.log(arrayObj);
