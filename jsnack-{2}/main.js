/*
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


var bicycles = [
  {
    "nome" : "mountain-bike",
    "peso" : 50,
  },

  {
    "nome" : "city-bike" ,
    "peso" : 25,
  },

  {
    "nome" : "bici-ibrida",
    "peso" : 10,
  },

];

 //bicycles.sort((a,b) => a.peso - b.peso );

//console.log( "La bici più leggera è: " + bicycles[0].nome + "con il peso di: " + bicycles[0].peso);
let biciclette = bicycles[0];

for (let i =0; i < bicycles.length; i++){
  if(bicycles[0].peso < bicycles.peso){
    biciclette = bicycles[i];
  }
}

const {nome} = biciclette;
console.log(` la bici più leggera è $(nome)`);
