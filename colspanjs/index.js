//1. feladat 3. commit
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} Fejlec tartalmanak tipusai concepts2 kerdojeles mert nem biztos h van */
const fejlec = { // fejlec objektumba szervezese 
    author: "Szerző", //fejlec elso cellaja
    title: "Mű", //fejlec masodik cellaja
    concepts: "Fogalmak" //fejlec harmadik cellaja
}
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} appolliniare sor tartalmanak tipusai */
const appolliniareRow = { //appollinaire sor objektumba szervezese
    author: "Appolliniare", // appolliniare sor elso cellaja
    title: "A megsebzett galamb és a szökőkút", // appolliniare sor masodik cellaja
    concepts: "Képvers",  // appolliniare sor harmadik cellaja
    concepts2: "Emlékezés", // appolliniare negyedik elso cellaja
}
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} masik appolliniare sor tartalmanak tipusai */
const appolliniareSecondRow = {  //masik appollinaire sor objektumba szervezese
    author: "Appolliniare", // masik appolliniare sor elso cellaja
    title: "Búcsú", // masik appolliniare sor masodik cellaja
    concepts: "Avantgárd" // masik appolliniare sor harmadik cellaja
}
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} thomas mann sor tartalmanak tipusai */
const thomasMannRow = { //thomas mann sor objektumba szervezese 
    author: "Thomas Mann", // thomas mann sor elso cellaja
    title: "Mario és a varázsló", // thomas mann sor elso cellaja
    concepts: "Kisregény" // thomas mann sor elso cellaja
}
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} franz kafka sor tartalmanak tipusai */
const franzKafkaRow = { //franz kafka sor objektumba szervezese
    author: "Franz Kafka", //franz kafka sor elso cellaja
    title: "A per", //franz kafka sor masodik cellaja
    concepts: "regény" //franz kafka sor harmadik cellaja
}
/** @type {{author: string, title: string, concepts: string, concepts2?: string}} masik franz kafka sor tartalmanak tipusai */
const franzKafkaSecondRow = { //masik franz kafka sor objektumba szervezese
    author: "Franz Kafka", //masik franz kafka sor elso cellaja
    title: "Az átváltozás", //masik franz kafka sor masodik cellaja
    concepts: "kisregény", //masik franz kafka sor harmadik cellaja
    concepts2: "groteszk" //masik franz kafka sor negyedik cellaja
}

console.log(fejlec.author+" | "+fejlec.title+" | "+fejlec.concepts+" | "+" | ") //fejlec sor konzolra kiiratasa
console.log(appolliniareRow.author+" | "+appolliniareRow.title+" | "+appolliniareRow.concepts+" | "+appolliniareRow.concepts2+" | ") //elso sor konzolra kiiratasa
console.log(appolliniareSecondRow.author+" | "+appolliniareSecondRow.title+" | "+appolliniareSecondRow.concepts+" | "+" | ") //masodik sor konzolra kiiratasa
console.log(thomasMannRow.author+" | "+thomasMannRow.title+" | "+thomasMannRow.concepts+" | "+" | ") //harmadik sor konzolra kiiratasa
console.log(franzKafkaRow.author+" | "+franzKafkaRow.title+" | "+franzKafkaRow.concepts+" | "+" | ") //negyedik sor konzolra kiiratasa
console.log(franzKafkaSecondRow.author+" | "+franzKafkaSecondRow.title+" | "+franzKafkaSecondRow.concepts+" | "+franzKafkaSecondRow.concepts2+" | ") //otodik sor konzolra kiiratasa
