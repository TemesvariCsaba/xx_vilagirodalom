// 1. feladat 1. commit
console.log("| Szerző       | Mű                                | Fogalmak  |           |") //Fejlec kiiratasa konzolra
console.log("| Appolliniare | A megsebzett galamb és a szökőkút | képvers   | emlékezés |") //elso sor kiiratasa konzolra
console.log("| Appolliniare | Búcsú                             | avantgárd |           |") //masodik sor kiiratasa konzolra
console.log("| Thomas Mann  | Mario és a varázsló               | kisregény |           |") //harmadik sor kiiratasa konzolra
console.log("| Franz Kafka  | A per                             | regény    |           |") //negyedik sor kiiratasa konzolra
console.log("| Franz Kafka  | Az átváltozás                     | kisregény | groteszk  |") //otodik sor kiiratasa konzolra

//1. feladat 2. commit
/** @type {string}  fejlecSzerzo valtozo ertekenek tipusa */ 
const fejlecSzerzo = "Szerző" // fejlec elso cellaja eltarolva valtozoban
/** @type {string}  fejlecMu valtozo ertekenek tipusa */ 
const fejlecMu = "Mű" // fejlec masodik cellaja eltarolva valtozoban
/** @type {string}  fejlecFogalmak valtozo ertekenek tipusa */ 
const fejlecFogalmak = "Fogalmak" //fejlec harmadik cellaja eltarolva valtozoban

/** @type {string}  appolliniareSorSzerzo valtozo ertekenek tipusa */ 
const appolliniareSorSzerzo = "Appolliniare" //elso sor  szerzo cellaja eltarolva valtozoban
/** @type {string}  appolliniareSorMu valtozo ertekenek tipusa */ 
const appolliniareSorMu = "A megsebzett galamb és a szökőkút" //elso sor mu cellaja eltarolva valtozoban
/** @type {string}  appolliniareSorFogalmak valtozo ertekenek tipusa */
const appolliniareSorFogalmak = "Képvers" //elso sor Fogalmak elso cellaja eltarolva egy valtozoban
/** @type {string}  appolliniareSorFogalmakKetto valtozo ertekenek tipusa */
const appolliniareSorFogalmakKetto = "emlékezés" //elso sor Fogalmak masodik cellaja eltarolva egy valtozoban

/** @type {string}  appolliniareMaisikSorSzerzo valtozo ertekenek tipusa */
const appolliniareMasikSorSzerzo = "Appolliniare" // masodik sor szerzo cellaja eltarolva egy valtozoban
/** @type {string}  appolliniareMasikSorMu valtozo ertekenek tipusa */
const appolliniareMasikSorMu = "Búcsú" // masodik sor mu cellaja eltarolva egy valtozoban
/** @type {string}  appolliniareMasikSorFogalmak valtozo ertekenek tipusa */
const appolliniareMasikSorFogalmak = "avantgárd" // masodik sor fogalmak cellaja eltarolva egy valtozoban

/** @type {string}  thomasMannSorSzerzo valtozo ertekenek tipusa */
const thomasMannSorSzerzo = "Thomas Mann" // harmadik sor szerzo cellaja eltarolva egy valtozoban
/** @type {string}  thomasMannSorMu valtozo ertekenek tipusa */
const thomasMannSorMu = "Mario és a varázsló" // harmadik sor mu cellaja eltarolva egy valtozoban
/** @type {string}  thomasMannSorFogalmak valtozo ertekenek tipusa */
const thomasMannSorFogalmak = "Kisregény" // harmadik sor fogalmak cellaja eltarolva egy valtozoban

/** @type {string}  franzKafkaSorSzerzo valtozo ertekenek tipusa */
const franzKafkaSorSzerzo = "Franz Kafka" //negyedik sor szerzo cellaja eltarolva egy valtozoban
/** @type {string}  franzKafkaSorMu valtozo ertekenek tipusa */
const franzKafkaSorMu = "A per" //negyedik sor mu cellaja eltarolva egy valtozoban
/** @type {string}  franzKafkaSorFogalmak valtozo ertekenek tipusa */
const franzKafkaSorFogalmak = "regény" //negyedik sor fogalmak cellaja eltarolva egy valtozoban

/** @type {string}  franzKafkaMasikSorSzerzo valtozo ertekenek tipusa */
const franzKafkaMasikSorSzerzo = "Franz Kafka" //hatodik sor szerzo cellaja eltarolva egy valtozoban
/** @type {string}  franzKafkaMasikSorMu valtozo ertekenek tipusa */
const franzKafkaMasikSorMu = "Az átváltozás" //hatodik sor mu cellaja eltarolva egy valtozoban
/** @type {string}  franzKafkaMasikSorFogalmak valtozo ertekenek tipusa */
const franzKafkaMasikSorFogalmak = "kisregény" //hatodik sor fogalmak elso cellaja eltarolva egy valtozoban
/** @type {string}  franzKafkaMasikSorFogalmakKetto valtozo ertekenek tipusa */
const franzKafkaMasikSorFogalmakKetto = "groteszk" //hatodik sor fogalmak masodik cellaja eltarolva egy valtozoban

/** @type {string}  fejlecEgesz valtozo ertekenek tipusa */
const fejlecEgesz = fejlecSzerzo +" | "+ fejlecMu+" | "+ fejlecFogalmak+" | " //fejlec valtozoba tarolva

/** @type {string}  appolliniareEgesz valtozo ertekenek tipusa */
const appolliniareEgesz = appolliniareSorSzerzo+" | "+ appolliniareSorMu+" | "+ appolliniareSorFogalmak+" | "+appolliniareSorFogalmakKetto+" | " // elso sor valtozoba eltarolva

/** @type {string}  appolliniareKettoEgesz valtozo ertekenek tipusa */
const appolliniareKettoEgesz = appolliniareMasikSorSzerzo+" | "+ appolliniareMasikSorMu+" | "+ appolliniareMasikSorFogalmak+" | "  //masodik sor valtozoba eltarolva

/** @type {string}  thomasMannEgesz valtozo ertekenek tipusa*/
const thomasMannEgesz = thomasMannSorSzerzo +" | "+ thomasMannSorMu+" | "+ thomasMannSorFogalmak+" | " //harmadik sor valtozoba eltarolva

/** @type {string}  franzKafkaEgesz valtozo ertekenek tipusa*/
const franzKafkaEgesz = franzKafkaSorSzerzo +" | "+ franzKafkaSorMu+" | "+ franzKafkaSorFogalmak+" | " //negyedik sor valtozoba eltarolva

/** @type {string}  franzKafkaKettoEgesz valtozo ertekenek tipusa*/
const franzKafkaKettoEgesz = franzKafkaMasikSorSzerzo +" | "+ franzKafkaMasikSorMu+" | "+ franzKafkaMasikSorFogalmak+" | " +franzKafkaMasikSorFogalmakKetto+" | "//otodik sor valtozoba eltarolva

console.log(fejlecEgesz) //fejlec konzolra irasa 
console.log(appolliniareEgesz) //elso sor konzolra irasa
console.log(appolliniareKettoEgesz) //masodik sor konzolra irasa
console.log(thomasMannEgesz) //harmadik sor konzolra irasa
console.log(franzKafkaEgesz) //negyedik sor konzolra irasa
console.log(franzKafkaKettoEgesz) //otodik sor konzolra irasa