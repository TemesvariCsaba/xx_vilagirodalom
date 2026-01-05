/** @type {string[]} Fejlec tomb tipusa */
const headerArr = ["Szerző", "Mű", "Fogalmak"] //fejlec tartalma egy tombben

/** @type {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}[]} body tomb tipusa*/
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

/** @type {string} valtozo tipusa */
let appolliniareRow = "| "+bodyArr[0].author+" | "+bodyArr[0].title1+" | "+bodyArr[0].concepts1+" | " // beleteszi azokat a tulajdonsagokat a valtozoba amik fixen vannak
if (bodyArr[0].title2 && bodyArr[0].concepts2){ // ha definialva van a masik cim es fogalmak cella akkor 
    appolliniareRow+= "\n"+"|_    |"+bodyArr[0].title2+" | "+bodyArr[0].concepts2+" | " //letrehoz egy uj sort es hozzaadja a valtozohoz a tulajdonsagok ertekeit
}
/** @type {string} valtozo tipusa */
let thomasMannRow = "| "+bodyArr[1].author+" | "+bodyArr[1].title1+" | "+bodyArr[1].concepts1+" | " // beleteszi azokat a tulajdonsagokat a valtozoba amik fixen vannak
if (bodyArr[1].title2 && bodyArr[1].concepts2){ // ha definialva van a masik cim es fogalmak cella akkor 
    thomasMannRow+= "\n"+"|_    |"+bodyArr[1].title2+" | "+bodyArr[1].concepts2+" | " //letrehoz egy uj sort es hozzaadja a valtozohoz a tulajdonsagok ertekeit
}
/** @type {string} valtozo tipusa */
let franzKafkaRow = "| "+bodyArr[2].author+" | "+bodyArr[2].title1+" | "+bodyArr[2].concepts1+" | " // beleteszi azokat a tulajdonsagokat a valtozoba amik fixen vannak
if (bodyArr[2].title2 && bodyArr[2].concepts2){ // ha definialva van a masik cim es fogalmak cella akkor 
    franzKafkaRow+= "\n"+"|_    | "+bodyArr[2].title2+" | "+bodyArr[2].concepts2+" | " //letrehoz egy uj sort es hozzaadja a valtozohoz a tulajdonsagok ertekeit
}
console.log("| "+headerArr[0]+" | "+headerArr[1]+" | "+headerArr[2]+" | ") //fejlec sor konzolra kiiratasa
console.log(appolliniareRow) //elso sor konzolra kiiratasa
console.log(thomasMannRow) //masodik sor konzolra kiiratasa
console.log(franzKafkaRow) //harmasik sor konzolra kiiratasa
