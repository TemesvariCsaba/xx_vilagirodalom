
//2. feladat 13. commit
/** 
/** @type {{name: string, colSpan: number}[]} A tomb tipusa  */
const headerArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] //fejlec tulajdonsagokkal

/** @typedef {{author: string, title: string, concepts: string, concepts2?: string}} BodyType A törzs adatait tarolo tomb tipusa */
/** @type {BodyType[]} a valtozo tipusa*/
const bodyArr = [ //Az adattal feltoltott objektumok tombbe szervezezve
    {
        author: "Appolliniare", // appolliniare sor elso cellaja
        title: "A megsebzett galamb és a szökőkút", // appolliniare sor masodik cellaja
        concepts: "Képvers",  // appolliniare sor harmadik cellaja
        concepts2: "Emlékezés", // appolliniare negyedik elso cellaja
    },
    {
        author: "Appolliniare", // masik appolliniare sor elso cellaja
        title: "Búcsú", // masik appolliniare sor masodik cellaja
        concepts: "Avantgárd" // masik appolliniare sor harmadik cellaja
    },
    {
        author: "Thomas Mann", // thomas mann sor elso cellaja
        title: "Mario és a varázsló", // thomas mann sor elso cellaja
        concepts: "Kisregény" // thomas mann sor elso cellaja
    },
    {
        author: "Franz Kafka", //franz kafka sor elso cellaja
        title: "A per", //franz kafka sor masodik cellaja
        concepts: "regény" //franz kafka sor harmadik cellaja
    },
    {
        author: "Franz Kafka", //masik franz kafka sor elso cellaja
        title: "Az átváltozás", //masik franz kafka sor masodik cellaja
        concepts: "kisregény", //masik franz kafka sor harmadik cellaja
        concepts2: "groteszk" //masik franz kafka sor negyedik cellaja
    }
]
/** @type {HtmlTableElement} a tablazat tipusa */
const tableJs = document.createElement("table") //letrehoz egy tablazatot
document.body.appendChild(tableJs) //hozzafuzi a bodyhoz

/** @type {HTMLTableSectionElement} A tablazat fejlecenek tipusa*/
const theadJs = document.createElement("thead") //letrehozza a tablazat fejlecet
tableJs.appendChild(theadJs)//hozzafuzi a tablazathoz

/** @type {HTMLTableRowElement} a fejlec soranak tipusa */
const trFejlec = document.createElement("tr") //A tablazat fejlec sora
theadJs.appendChild(trFejlec) //Hozzafuzi a fejlechez

/**
 *  fuggveny ami kirendereli a tablazat fejlecet 
 * @param {{name: string, colSpan: number}[]} array  tomb amin vegigmegy a ciklus
 * @param {HTMLTableRowElement} parentRow sor amihez hozzafuzzuk
 * @returns {void} //nincs visszateresi erteke
 */
function createThead(array, parentRow){ //letrehozza a fejlecet ami egy tombot var parameterkent valamint egy parent sort 
    for (let i = 0; i <array.length; i++ ) //vegigiteral a tombbon novelve az i erteket
    {   
        /** @type {HTMLTableCellElement} fejlec cellainak tipusa*/
        const thHead = document.createElement("th") //A tablazat fejlecenek letrehozza az i-ik cellajat
        thHead.innerText = array[i].name //feltolti tartalommal
        parentRow.appendChild(thHead) //hozzafuzi a fejlec sorhoz

        if(array[i].colSpan == 2){ //ha tobb cellat ivel at a fejlec
            thHead.colSpan = 2 //oszloposszevonast vegez
        }
}
}
createThead(headerArr, trFejlec) //fuggveny meghivasa a tombre

/** @type {HTMLTableSectionElement} a tablazat torzsenek tipusa */
const tbodyJs = document.createElement("tbody") //letrehozza a tablazat torzset
tableJs.appendChild(tbodyJs) //hozzafuzi a tablazathoz
/**
 * eltarolja az egesz ciklust hogy ha tobbszor felhasznalnank akkor kevesebb legyen a kod
 *  @param {BodyType[]} array a parameter tipusa
 *  @param {HTMLTableSectionElement} tBody // a tablazat torzse
 *  @returns {void} nincs visszateresi erteke a fuggvenynek 
*/
function createTbody(array, tBody){ // bevezetunk egy fuggvenyt ami egy tombot es egy torzset var parameterul amihez hozzafuzi a sorokat
    tBody.innerHTML = "" //kiuriti a tablazat torzsenek a tartalmat
for(const element of array){ //bejarjuk az adatokat tartalmazo tombot ciklus segitsegevel
    /** @type {HTMLTableRowElement} tablazat soranak a tipusa */
    const trTbody = document.createElement("tr") //letrehozza az adott sort
    tBody.appendChild(trTbody) //hozzafuzi a sort a torzshoz

    /** @type {HTMLTableColElement} Az oszlop tipusa*/
    const tdAuthor = document.createElement("td") //letrehozza az elso oszlopot
    tdAuthor.innerText = element.author // Beallitja a sor erteket
    trTbody.appendChild(tdAuthor) //hozzafuzi a sorhoz az oszlopot

    /** @type {HTMLTableColElement} Az oszlop tipusa*/
    const tdTitle = document.createElement("td") //letrehozza a masodik oszlopot
    tdTitle.innerText = element.title // Beallitja a sor erteket
    trTbody.appendChild(tdTitle) //hozzafuzi a sorhoz az oszlopot

    /** @type {HTMLTableColElement} Az oszlop tipusa*/
    const tdConcepts = document.createElement("td") //letrehozza a harmadik oszlopot
    tdConcepts.innerText = element.concepts // Beallitja a sor erteket
    trTbody.appendChild(tdConcepts) //hozzafuzi a sorhoz az oszlopot

    if(element.concepts2){ // ha ket fogalom van definialva
        /** @type {HTMLTableColElement} Az oszlop tipusa*/
        const tdConceptsTwo = document.createElement("td") //letrehozza a negyedik opcionalis oszlopot
        tdConceptsTwo.innerText = element.concepts2 // Beallitja a sor erteket
        trTbody.appendChild(tdConceptsTwo) //hozzafuzi a sorhoz az oszlopot

    }
}
}
createTbody(bodyArr, tbodyJs) //meghivjuk a fuggvenyt a bodyArr tombbel es tbodyJs tablazattorzzsel mint parameter

/** @type {HTMLButtonElement} egy gombot hozunk letre aminek ez a tipusa*/

const testButton = document.createElement("button") //letrehozunk egy gombot
testButton.innerText = "Új sor hozzáadása" // megadja a gomb szoveget
document.body.appendChild(testButton) //hozzafuzi a gombot a torzshoz
testButton.addEventListener("click", function(){ //kattintas eseten meghiv egy esemenykezelot
    /** @type {BodyType} uj sor adatait tartalmazo valtozo tipusa */
    const testRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    bodyArr.push(testRow) //hozzafuzzuk a tombhoz az uj sort
    createTbody(bodyArr) //fuggveny segitsegevel kiirjuk az ujitott tablazatot a console-ra
})  

/** @type {HTMLButtonElement} egy gombot hozunk letre aminek ez a tipusa*/

const testButtonDouble = document.createElement("button") //letrehozunk egy gombot
testButtonDouble.innerText = "Új 2 fogalmas sor  hozzáadása" // megadja a gomb szoveget
document.body.appendChild(testButtonDouble) //hozzafuzi a gombot a torzshoz
testButtonDouble.addEventListener("click", function(){ //kattintas eseten meghiv egy esemenykezelot
    /** @type {BodyType} uj sor adatait tartalmazo valtozo tipusa */
    const testRowDouble = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts: "Új fogalom", //fogalmak oszlop tulajdonsaganak erteke
        concepts2: "Másik új fogalom" //fogalmak masodik tulajdonsaganak erteke
    }
    bodyArr.push(testRowDouble) //hozzafuzzuk a tombhoz az uj sort
    createTbody(bodyArr) //fuggveny segitsegevel kiirjuk az ujitott tablazatot a console-ra
})  