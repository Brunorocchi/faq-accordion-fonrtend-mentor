const botonAbrir1 = document.querySelector("#boton-mas1");
const botonAbrir2 = document.querySelector("#boton-mas2");
const botonAbrir3 = document.querySelector("#boton-mas3");
const botonAbrir4 = document.querySelector("#boton-mas4");
const botonCerrar1 = document.querySelector("#boton-menos1");
const botonCerrar2 = document.querySelector("#boton-menos2");
const botonCerrar3 = document.querySelector("#boton-menos3");
const botonCerrar4 = document.querySelector("#boton-menos4");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");
const resp4 = document.querySelector("#resp4");
const preg1 = document.querySelector("#preg1");
const preg2 = document.querySelector("#preg2");
const preg3 = document.querySelector("#preg3");
const preg4 = document.querySelector("#preg4");



botonAbrir1.addEventListener("click", () => {
    resp1.classList.remove("disabled");
    botonAbrir1.classList.add("disabled");
    botonCerrar1.classList.remove("disabled");
});

botonCerrar1.addEventListener("click", () => {
    resp1.classList.add("disabled");
    botonAbrir1.classList.remove("disabled");
    botonCerrar1.classList.add("disabled");
});

botonAbrir2.addEventListener("click", () => {
    resp2.classList.remove("disabled");
    botonAbrir2.classList.add("disabled");
    botonCerrar2.classList.remove("disabled");
});

botonCerrar2.addEventListener("click", () => {
    resp2.classList.add("disabled");
    botonAbrir2.classList.remove("disabled");
    botonCerrar2.classList.add("disabled");
});

botonAbrir3.addEventListener("click", () => {
    resp3.classList.remove("disabled");
    botonAbrir3.classList.add("disabled");
    botonCerrar3.classList.remove("disabled");
});

botonCerrar3.addEventListener("click", () => {
    resp3.classList.add("disabled");
    botonAbrir3.classList.remove("disabled");
    botonCerrar3.classList.add("disabled");
});

botonAbrir4.addEventListener("click", () => {
    resp4.classList.remove("disabled");
    botonAbrir4.classList.add("disabled");
    botonCerrar4.classList.remove("disabled");
});

botonCerrar4.addEventListener("click", () => {
    resp4.classList.add("disabled");
    botonAbrir4.classList.remove("disabled");
    botonCerrar4.classList.add("disabled");
});

preg1.addEventListener("click", () => {
    resp1.classList.toggle("disabled");
    botonAbrir1.classList.toggle("disabled");
    botonCerrar1.classList.toggle("disabled");  
});

preg2.addEventListener("click", () => {
    resp2.classList.toggle("disabled");
    botonAbrir2.classList.toggle("disabled");
    botonCerrar2.classList.toggle("disabled");  
});

preg3.addEventListener("click", () => {
    resp3.classList.toggle("disabled");
    botonAbrir3.classList.toggle("disabled");
    botonCerrar3.classList.toggle("disabled");  
});

preg4.addEventListener("click", () => {
    resp4.classList.toggle("disabled");
    botonAbrir4.classList.toggle("disabled");
    botonCerrar4.classList.toggle("disabled");  
});

