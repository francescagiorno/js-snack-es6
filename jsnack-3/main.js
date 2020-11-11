/*
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

var triangolo = {
  "base" : 20,
  "altezza" : 30,

  area : function(){
    return (this.altezza * this.base) / 2 }
};

let ipotenusa = Math.sqrt(triangolo.altezza ** 2 + triangolo.base ** 2);


console.log(ipotenusa);
 //perimetro
 let perimetro = ipotenusa + triangolo.base + triangolo.altezza;
console.log(perimetro);
