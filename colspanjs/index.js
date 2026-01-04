
//1. feladat 8. commit
/** @type {string[]} A fejlec tomb tipusa */
const headerArr = ["Szerző", "Mű", "Fogalmak"] //fejlec tombbe szervezve

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
/**
 * eltarolja az egesz ciklust hogy ha tobbszor felhasznalnank akkor kevesebb legyen a kod
 *  @param {BodyType[]} array a parameter tipusa
 *  @returns {void} nincs visszateresi erteke a fuggvenynek 
*/
function createTbody(array){ // bevezetunk egy fuggvenyt ami egy tombot var parameterul
    console.log(headerArr[0]+" | "+headerArr[1]+" | "+headerArr[2]+" | ") //fejlec kiiratasa 0ik elem szero elso elem mu masodik elem fogalmak

for(const element of array){ //bejarjuk az adatokat tartalmazo tombot ciklus segitsegevel
    /** @type {string}  valtozo tipusa */
    let bodyContent = element.author+" | "+element.title+" | " //belerakja a valtozoba a biztos adatokat

    if(element.concepts2){ //elagazas ami vizsgalja hogy van e erteke a concepts2-nek
        bodyContent+= element.concepts+" | "+element.concepts2+" | "  //ha van akkor hozzaadja mindket fogalmak cellat az adott sorhoz

    } 
    else{ //abban az esetben ha nincs erteke
        bodyContent+= element.concepts+" | " //csak az elso fogalmak cellat adja hozza ami sornak van
    }
    console.log(bodyContent) //kiirja a tablazatot a console-ra
}
}
createTbody(bodyArr) //meghivjuk a fuggvenyt a bodyArr tombbel mint parameter

/** @type {HTMLButtonElement} egy gombot hozunk letre aminek ez a tipusa*/

const testButton = document.createElement("button") //letrehozunk egy gombot
testButton.innerText = "Új sor hozzáadása" // megadja a gomb szoveget
document.body.appendChild(testButton) //hozzafuzi a gombot a torzshoz
testButton.addEventListener("click", function(){ //kattintas eseten meghiv egy esemenykezelot
    console.log("--------------------------------") //elvalaszto vonal
    console.log("---------Kattintas utan---------") //atlathatobba teszi a torteneseket
    console.log("--------------------------------") //elvalaszto vonal

    /** @type {BodyType} uj sor adatait tartalmazo valtozo tipusa */
    const testRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    bodyArr.push(testRow) //hozzafuzzuk a tombhoz az uj sort
    createTbody(bodyArr) //fuggveny segitsegevel kiirjuk az ujitott tablazatot a console-ra
})  