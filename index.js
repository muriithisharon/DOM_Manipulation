const body  = document.querySelector("body");
const textTitle = document.querySelector("h1");
const h3 = document.querySelector("h3");
const text =document.querySelector("p");
body.style.backgroundColor = "lightgreen";

textTitle.style.color = "white";
textTitle.style.textAlign = "center";
textTitle.style.fontSize = "3rem";
textTitle.style.fontFamily = "Arial, sans-serif";

h3.style.color = "darkgreen";
h3.style.textAlign = "center";
h3.style.fontSize = "1.5rem";
h3.style.fontFamily = "Arial, sans-serif";
h3.style.textTransform = "uppercase";

text.style.color = "darkgreen";
text.style.textAlign = "center";
text.style.fontSize = "1.2rem";
text.style.fontFamily = "Rockwell, sans-serif";

const fruit1 = document.getElementById("mango");
fruitImg = document.createElement("img");
fruitImg.src = "https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542130.jpg?t=st=1749107560~exp=1749111160~hmac=247bb28c5ceaa3c564132cdd11d1e23a0f3f6fc4a44914a810375014447a3c63&w=1380";
fruit1.appendChild(fruitImg);
fruitImg.style.width = "20vw";
fruitImg.style.height = "30vh";

const fruit2 = document.getElementById("banana");
bananaImg = document.createElement("img");
bananaImg.src = "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?t=st=1749110348~exp=1749113948~hmac=7ead4bc03bae66f73d7c67a8b936fbea4ec678157f9bbe6c2eeb8c85e466460f&w=1380";
fruit2.appendChild(bananaImg);
bananaImg.style.width = "20vw";
bananaImg.style.height = "30vh";

const fruit3 = document.getElementById("watermelon");
watermelonImg = document.createElement("img");
watermelonImg.src = "https://img.freepik.com/free-psd/fruits-composition-isolated_23-2151856344.jpg?t=st=1749110534~exp=1749114134~hmac=2fb5a974fbaf39600d076d92fff3626b8ef52103c3c2b4a372229ba928c355c6&w=1380";
fruit3.appendChild(watermelonImg);
watermelonImg.style.width = "20vw";
watermelonImg.style.height = "30vh";

const fruList = document.querySelector("li");
const fruitList = document.createElement("li");
fruitList.textContent = "Pineapple";
fruList.appendChild(fruitList);

const fruit4 = document.getElementById("pineapple");
pineappleImg = document.createElement("img");
pineappleImg.src = "https://img.freepik.com/premium-photo/ripe-pineapple-is-tropical-fruit-isolated_33736-3788.jpg?w=1380";
fruitList.appendChild(pineappleImg);
pineappleImg.style.width = "20vw";
pineappleImg.style.height = "30vh";

const fruits = document.getElementById("fruList");
fruits.style.listStyleType = "none";
fruits.style.display = "inline-flex";
fruits.style.padding = "0";
fruits.style.gap = "20px";
fruits.style.margin = "20px 0";
fruits.style.borderRadius = "10px";
fruits.style.margin = "0%";
