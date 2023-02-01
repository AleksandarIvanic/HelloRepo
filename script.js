// 1) Za element koji ima id="slika" ispisati vrednosti njegovih atributa.

var element = document.getElementById("slika");
console.log(element.attributes);

//2) Promeniti vrednost alt atributa.

var element = document.getElementById("slika");
 element.alt = "Nova vrednost alt atributa";

// // 3) Promeniti sliku za element koji ima id="slika"

var element = document.getElementById("slika");
element.src = "slika2.jpg";
