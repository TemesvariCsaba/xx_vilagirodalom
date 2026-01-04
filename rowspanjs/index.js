
/** @type {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} Fejlec tartalmanak tipusai title2 es concepts2 kerdojeles mert nem biztos h van */
const fejlec = { // fejlec objektumba szervezese 
    author: "Szerző", //fejlec elso cellaja
    title1: "Mű", //fejlec masodik cellaja
    concepts1: "Fogalmak" //fejlec harmadik cellaja
}
/** @type {{author: string, title1: string, concepts1: string, title2?: string, concepts2?: string}} appolliniare sor tartalmanak tipusai */
const appolliniareRow = { //appollinaire sor objektumba szervezese
    author: "Appolliniare", // appolliniare dupla sor nev cellaja
    title1: "A megsebzett galamb és a szökőkút", // appolliniare elso muvenek a cime
    concepts1: "Képvers",  // appolliniare elso muvenek a fogalma
    title2: "Búcsú", // appolliniare masodik muvenek a cime
    concepts2: "Avantgárd", // appolliniare masodik muvenek a fogalma
}

/** @type {{author: string, title1: string, concepts1: string, title2?:string, concepts2?: string}} thomas mann sor tartalmanak tipusai */
const thomasMannRow = { //thomas mann sor objektumba szervezese 
    author: "Thomas Mann", // thomas mann nev cellaja
    title1: "Mario és a varázsló", // thomas mann muvenek a cime
    concepts1: "Kisregény" // thomas mann muvenek a fogalma
}

/** @type {{author: string, title1: string, concepts1: string, title2?:string, concepts2?: string}} franz kafka sor tartalmanak tipusai */
const franzKafkaRow = { //franz kafka sor objektumba szervezese
    author: "Franz Kafka", //franz kafka dupla sor nev cellaja
    title1: "A per", //franz kafka elso muvenek a cime
    concepts1: "regény", //franz kafka elso muvenek a fogalma
    title2: "Az átváltozás", //franz kafka masik muvenek a cime
    concepts2: "kisregény" //franz kafka masik muvenek a fogalma   
}

console.log(fejlec.author+" | "+fejlec.title1+" | "+fejlec.concepts1+" | ") //fejlec sor konzolra kiiratasa
console.log(appolliniareRow.author+" | "+appolliniareRow.title1+" | "+appolliniareRow.concepts1+" | ") //elso sor konzolra kiiratasa
console.log(appolliniareRow.author+" | "+appolliniareRow.title2+" | "+appolliniareRow.concepts2+" | ") //masodik sor konzolra kiiratasa
console.log(thomasMannRow.author+" | "+thomasMannRow.title1+" | "+thomasMannRow.concepts1+" | ") //harmadik sor konzolra kiiratasa
console.log(franzKafkaRow.author+" | "+franzKafkaRow.title1+" | "+franzKafkaRow.concepts1+" | ") //negyedik sor konzolra kiiratasa
console.log(franzKafkaRow.author+" | "+franzKafkaRow.title2+" | "+franzKafkaRow.concepts2+" | ") //otodik sor konzolra kiiratasa