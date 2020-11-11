/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.*/

var squadra = [
  {
    "nome" : "Roma",
    "puntiFatti": 0,
    "falliSubiti": 0,
  },

  {
    "nome" : "Atalanta",
    "puntiFatti": 0,
    "falliSubiti": 0,
  },

  {
    "nome" : "Fiorentina",
    "puntiFatti": 0,
    "falliSubiti": 0,
  },
];

/*Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti*/

for(  let i = 0; i < squadra.length; i++){
  randomNumbOne =  Math.floor(Math.random() * 100);
  randomNumbTwo = Math.floor(Math.random() * 100);
  squadra[i].falliSubiti = randomNumbOne;
  squadra[i].puntiFatti =  randomNumbTwo;
}


  console.log(squadra);
