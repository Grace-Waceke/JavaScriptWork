let back= document.querySelector("body");
back.style.backgroundColor = "silver"

const text = document.querySelector("#title");
text.style.color = "green";

let subtitle =document.querySelectorAll("h3").forEach(item =>item.innerHTML=item.textContent.toLocaleUpperCase())

let fruitChild = document.createElement("li");
fruitChild.appendChild(document.createTextNode("Apple"));
let newFruit = document.getElementById("fruList").appendChild(fruitChild);

let greenChild = document.createElement("li");
greenChild.appendChild(document.createTextNode("RedCabbage"));
let newVeg = document.getElementById("vegList").appendChild(greenChild);



// let fruit = document.querySelector("#tunda").innerHTML = "fruits".toLocaleUpperCase();
// let  veges = document.querySelector("#veges").innerHTML = "vegetables".toLocaleUpperCase();

// 


