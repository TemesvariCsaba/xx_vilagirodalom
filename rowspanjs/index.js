/** @type {string[]} Fejlec tomb tipusa */
const headerArr = ["Szerző", "Mű", "Fogalmak"] //fejlec tartalma egy tombben

/** @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} BodyArr tipus definicio amit hasznalni fogok a tombokre */
/** @type {BodyArr[]} a body tomb tipusa  */
const bodyArr = [ // body tartalma egy tombben
    {
        author: "Appolliniare", // Appolliniare sor szerzo tulajdonsaga
        title1: "A megsebzett galamb és a szökőkút", // Appolliniare sor mu tulajdonsaga
        concepts1: "képvers", // Appolliniare sor fogalmak tulajdonsaga
        title2: "Búcsú", // masodik Appolliniare sor mu tulajdonsaga
        concepts2: "avantgárd" // masodik Appolliniare sor fogalmak tulajdonsaga
    },
    {
        author: "Thomas Mann", // Thomas Mann sor szerzo tulajdonsaga
        title1: "Mario és a varázsló", // Thomas Mann sor mu tulajdonsaga
        concepts1: "kisregény" // Thomas mann sor fogalmak tulajdonsaga
    },
    {
        author: "Franz Kafka", // Franz Kafka sor szerzo tulajdonsaga
        title1: "A per", // Franz Kafka sor mu tulajdonsaga
        concepts1: "képvers", // Franz Kafka sor fogalmak tulajdonsaga
        title2: "Az átvlátozás", //masodik Franz Kafka sor mu tulajdonsaga
        concepts2: "kisregény" // masodik Franz Kafka sor fogalmak tulajdonsaga
    }
]

/** @type {HtmlTableElement} a tablazat tipusa */
const tableJs = document.createElement("table") //letrehoz egy tablazatot
document.body.appendChild(tableJs) //hozzafuzi a bodyhoz

/** @type {HTMLTableSectionElement} A tablazat fejlecenek tipusa*/
const theadJs = document.createElement("thead") //letrehozza a tablazat fejlecet
tableJs.appendChild(theadJs)//hozzafuzi a tablazathoz

/**
 * letrehozza a tablazat fejlecet
 * @param {string[]} array // fejlec adatait tartalmazo tomb
 * @param {HTMLTableSectionElement} fejlec //thead tag 
 * @returns {void} //nincs visszateresi erteke
 */
function createHeader(array, fejlec){ // fuggveny ami egy adattombot es egy thead taget var parameterul
    for(const headerElement of array){ // vegigjarja a fejlec tombot

        /** @type {HTMLTableCellElement} th tipusa */
        const thHeader = document.createElement("th") //letrehoz egy fejlec cellat
        thHeader.innerText = headerElement //feltolti adattal
        fejlec.appendChild(thHeader)//hozzafuzi a thead taghez
    }
}
createHeader(headerArr, theadJs) //fuggveny meghivasa 

/** @type {HTMLTableSectionElement} a tablazat torzsenek tipusa */
const tbodyJs = document.createElement("tbody") //letrehozza a tablazat torzset
tableJs.appendChild(tbodyJs) //hozzafuzi a tablazathoz
/**
/**
 *  letrehozza a tablazat torzset
 * @param {BodyArr[]} array array parameter tipusa
 * @param {HTMLTableSectionElement} torzs tbody tag
 * @returns {void} nincs visszateresi erteke
 */
function generateTableBody(array, torzs) {//tomb parameteru fuggveny
    torzs.innerHTML = "" //kiuriti a tablazat torzsenek a tartalmat

    for(const element of array){ //vegigjarom a tombot egy ciklus segitsegevel
        

        /** @type {HTMLTableRowElement} tablazat soranak a tipusa */
        const trTbody = document.createElement("tr") //letrehozza az adott sort
        torzs.appendChild(trTbody) //hozzafuzi a sort a torzshoz

        /** @type {HTMLTableColElement} Az oszlop tipusa*/
        const tdAuthor = document.createElement("td") //letrehozza az elso oszlopot
        tdAuthor.innerText = element.author // Beallitja a sor erteket
        trTbody.appendChild(tdAuthor) //hozzafuzi a sorhoz az oszlopot

        /** @type {HTMLTableColElement} Az oszlop tipusa*/
        const tdTitle = document.createElement("td") //letrehozza a masodik oszlopot
        tdTitle.innerText = element.title1 // Beallitja a sor erteket
        trTbody.appendChild(tdTitle) //hozzafuzi a sorhoz az oszlopot

         /** @type {HTMLTableColElement} Az oszlop tipusa*/
        const tdConcepts = document.createElement("td") //letrehozza a harmadik oszlopot
        tdConcepts.innerText = element.concepts1 // Beallitja a sor erteket
        trTbody.appendChild(tdConcepts) //hozzafuzi a sorhoz az oszlopot

        if(element.title2 && element.concepts2){ //elagazas vizsgalja hogy definialt e a masik cim es masik fogalmak, ha igen:
             /** @type {HTMLTableRowElement} tablazat soranak a tipusa */
            const trRowSpan = document.createElement("tr") //letrehoz egy uj sort
            tbodyJs.appendChild(trRowSpan) //hozzafuzi a torzshoz

            /** @type {HTMLTableColElement} Az oszlop tipusa*/
            const tdAuthorRowSpan = document.createElement("td") //letrehozza az elso oszlopot
            tdAuthorRowSpan.innerText = element.author //erteket ad az elso oszlopnak
            trRowSpan.appendChild(tdAuthorRowSpan) // hozzafuzi az oszlopot a sorhoz

            /** @type {HTMLTableColElement} Az oszlop tipusa*/
            const tdTitleTwo = document.createElement("td") //letrehozza a masodik oszlopot
            tdTitleTwo.innerText = element.title2 //erteket ad a masodik oszlopnak
            trRowSpan.appendChild(tdTitleTwo) // hozzafuzi az oszlopot a sorhoz

            /** @type {HTMLTableColElement} Az oszlop tipusa*/
            const tdConceptsTwo = document.createElement("td") //letrehozza a harmadik oszlopot
            tdConceptsTwo.innerText = element.concepts2 //erteket ad a harmadik oszlopnak
            trRowSpan.appendChild(tdConceptsTwo)// hozzafuzi az oszlopot a sorhoz
        }
    }
}
generateTableBody(bodyArr, tbodyJs) //Teljes tablazat kiirasa a console-ra


/** @type {HTMLButtonElement} egy gombot hozunk letre aminek ez a tipusa*/

const testButton = document.createElement("button") //letrehozunk egy gombot
testButton.innerText = "Új sor hozzáadása" // megadja a gomb szoveget
document.body.appendChild(testButton) //hozzafuzi a gombot a torzshoz
testButton.addEventListener("click", function(){ //kattintas eseten meghiv egy esemenykezelot
    /** @type {BodyArr} uj sor adatait tartalmazo valtozo tipusa */
    const testRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    bodyArr.push(testRow) //hozzafuzzuk a tombhoz az uj sort
    generateTableBody(bodyArr, tbodyJs) //fuggveny segitsegevel kiirjuk az ujitott tablazatot a console-ra
})  

/** @type {HTMLButtonElement} egy gombot hozunk letre aminek ez a tipusa*/

const testButtonDouble = document.createElement("button") //letrehozunk egy gombot
testButtonDouble.innerText = "Új dupla sor hozzáadása" // megadja a gomb szoveget
document.body.appendChild(testButtonDouble) //hozzafuzi a gombot a torzshoz
testButtonDouble.addEventListener("click", function(){ //kattintas eseten meghiv egy esemenykezelot

    /** @type {BodyArr} uj dupla sor adatait tartalmazo valtozo tipusa */
    const testRowDouble = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom", //fogalmak oszlop tulajdonsaganak erteke
        title2: "Másik új mű", //szerzo masodik sor muvenek az erteke
        concepts2: "Másik új mű fogalma" //szerzo masodik sor muvenek a fogalmanak az erteke
    }
    bodyArr.push(testRowDouble) //hozzafuzzuk a tombhoz az uj dupla sort
    generateTableBody(bodyArr, tbodyJs) //fuggveny segitsegevel kiirjuk az ujitott tablazatot a console-ra
})  
