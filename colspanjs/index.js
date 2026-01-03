
//1. feladat 4. commit
/** @type {string[]} A fejlec tomb tipusa */
const headerArr = ["Szerző", "Mű", "Fogalmak"] //fejlec tombbe szervezve

/** @type {{author: string, title: string, concepts: string, concepts2?: string}[]} A törzs adatait tarolo tomb tipusa */
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

console.log(headerArr[0]+" | "+headerArr[1]+" | "+headerArr[2]+" | "+" | ") //fejlec kiiratasa 0ik elem szero elso elem mu masodik elem fogalmak
console.log(bodyArr[0].author+" | "+bodyArr[0].title+" | "+bodyArr[0].concepts+" | "+bodyArr[0].concepts2+" | ") //elso sor konzolra irasa
console.log(bodyArr[1].author+" | "+bodyArr[1].title+" | "+bodyArr[1].concepts+" | "+" | ") //masodik sor konzolra irasa
console.log(bodyArr[2].author+" | "+bodyArr[2].title+" | "+bodyArr[2].concepts+" | "+" | ") //harmadik sor konzolra irasa
console.log(bodyArr[3].author+" | "+bodyArr[3].title+" | "+bodyArr[3].concepts+" | "+" | ") //negyedik sor konzolra irasa
console.log(bodyArr[4].author+" | "+bodyArr[4].title+" | "+bodyArr[4].concepts+" | "+bodyArr[4].concepts2+" | ") //otodik sor konzolra irasa