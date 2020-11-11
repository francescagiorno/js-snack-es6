/*Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10*/


var ball = {
  "nome" : "palla",
  "peso" : "10",
};

/*
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/

ball.peso = parseInt(prompt("inserici il peso della palla"));
