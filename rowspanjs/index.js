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
/**
 *  eltarolja a tablazatot meghivaskor meg kiirja a console-ra 
 * @param {BodyArr[]} array array parameter tipusa
 * @returns {void} nincs visszateresi erteke
 */
function generateConsoleTable(array) {//tomb parameteru fuggveny
    console.log("| "+headerArr[0]+" | "+headerArr[1]+" | "+headerArr[2]+" | ") //fejlec sor konzolra kiiratasa
    for(const element of array){ //vegigjarom a tombot egy ciklus segitsegevel
        /** @type {string} valtozo tipusa */
        let createRows = "| "+element.author+" | "+element.title1+" | "+element.concepts1+" | " // beleteszi azokat a tulajdonsagokat a valtozoba amik fixen vannak
    if (element.title2 && element.concepts2){ // ha definialva van a masik cim es fogalmak cella akkor 
        createRows+= "\n"+"|_    |"+element.title2+" | "+element.concepts2+" | " //letrehoz egy uj sort es hozzaadja a valtozohoz a tulajdonsagok ertekeit
    }
    console.log(createRows) //tablazat torzsenek a kiiratasa 
    }
}
generateConsoleTable(bodyArr) //Teljes tablazat kiirasa a console-ra

