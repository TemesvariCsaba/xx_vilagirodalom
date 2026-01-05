/** @type {HTMLButtonElement} Uj sor hozzáadása gomb */
const htmlButton = document.getElementById("htmlbutton") //letrehoz egy gombot a html-en megadott idje alapjan
htmlButton.addEventListener("click", function(){ //rahiv a gombra egy esemenykezelot ami kattintasra lep akcioba
    console.log("Kattintottál az új sor gombra") // kiirja a console-ra hogy megtortent a kattintas es erzekelte
})