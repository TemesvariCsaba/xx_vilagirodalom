
//1. feladat 5. commit
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

/** @type {string} a valtozo tipusa */
let appolliniareRow = bodyArr[0].author+" | "+bodyArr[0].title+" | " // lettel letrehozunk egy valtozot mivel valtoztatni szeretnenk az erteket
if(bodyArr[0].concepts2){ //ha a masodik fogalmak cella is defined
    appolliniareRow+= bodyArr[0].concepts+" | "+bodyArr[0].concepts2+" | " //a korabbi valtozohoz hozzaadjuk mindket fogalmat
}
else{ // egyebkent ha a masodik fogalmak cella undefined 
    appolliniareRow+= bodyArr[0].concepts+" | "+" | " //a korabbi valtozohoz csak az egyik definialt fogalmat adjuk hozza
}
console.log(appolliniareRow) // kiirja az elso sort a konzolra

/** @type {string} a valtozo tipusa */
let appolliniareSecondRow = bodyArr[1].author+" | "+bodyArr[1].title+" | " // lettel letrehozunk egy valtozot mivel valtoztatni szeretnenk az erteket
if(bodyArr[1].concepts2){ //ha a masodik fogalmak cella is defined
    appolliniareSecondRow+= bodyArr[1].concepts+" | "+bodyArr[1].concepts2+" | " //a korabbi valtozohoz hozzaadjuk mindket fogalmat
}
else{ // egyebkent ha a masodik fogalmak cella undefined 
    appolliniareSecondRow+= bodyArr[1].concepts+" | "+" | " //a korabbi valtozohoz csak az egyik definialt fogalmat adjuk hozza
}
console.log(appolliniareSecondRow) // kiirja a masodik sort a konzolra

/** @type {string} a valtozo tipusa */
let thomasMannRow = bodyArr[2].author+" | "+bodyArr[2].title+" | " // lettel letrehozunk egy valtozot mivel valtoztatni szeretnenk az erteket
if(bodyArr[2].concepts2){ //ha a masodik fogalmak cella is defined
    thomasMannRow+= bodyArr[2].concepts+" | "+bodyArr[2].concepts2+" | " //a korabbi valtozohoz hozzaadjuk mindket fogalmat
}
else{ // egyebkent ha a masodik fogalmak cella undefined 
    thomasMannRow+= bodyArr[2].concepts+" | "+" | " //a korabbi valtozohoz csak az egyik definialt fogalmat adjuk hozza
}
console.log(thomasMannRow) // kiirja a harmadik sort a konzolra

/** @type {string} a valtozo tipusa */
let franzKafkaRow = bodyArr[3].author+" | "+bodyArr[3].title+" | " // lettel letrehozunk egy valtozot mivel valtoztatni szeretnenk az erteket
if(bodyArr[3].concepts2){ //ha a masodik fogalmak cella is defined
    franzKafkaRow+= bodyArr[3].concepts+" | "+bodyArr[3].concepts2+" | " //a korabbi valtozohoz hozzaadjuk mindket fogalmat
}
else{ // egyebkent ha a masodik fogalmak cella undefined 
    franzKafkaRow+= bodyArr[3].concepts+" | "+" | " //a korabbi valtozohoz csak az egyik definialt fogalmat adjuk hozza
}
console.log(franzKafkaRow) // kiirja a negyedik sort a konzolra

/** @type {string} a valtozo tipusa */
let franzKafkaSecondRow = bodyArr[4].author+" | "+bodyArr[4].title+" | " // lettel letrehozunk egy valtozot mivel valtoztatni szeretnenk az erteket
if(bodyArr[4].concepts2){ //ha a masodik fogalmak cella is defined
    franzKafkaSecondRow+= bodyArr[4].concepts+" | "+bodyArr[4].concepts2+" | " //a korabbi valtozohoz hozzaadjuk mindket fogalmat
}
else{ // egyebkent ha a masodik fogalmak cella undefined 
    franzKafkaSecondRow+= bodyArr[4].concepts+" | "+" | " //a korabbi valtozohoz csak az egyik definialt fogalmat adjuk hozza
}
console.log(franzKafkaSecondRow) // kiirja az otodik sort a konzolra


