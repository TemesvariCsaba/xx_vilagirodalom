/** @typedef {{author: string, title: string, concepts1: string, concepts2?: string}} RowType Az új sor adatait tarolo tomb tipusa */

/** @type {HTMLButtonElement} Uj sor hozzáadása gomb */
const htmlButton = document.getElementById("htmlbutton") //leker egy gombot a html-en megadott idje alapjan
htmlButton.addEventListener("click", function(){ //rahiv a gombra egy esemenykezelot ami kattintasra lep akcioba
    console.log("Kattintottál az új sor gombra") // kiirja a console-ra hogy megtortent a kattintas es erzekelte

    /** @type {RowType} az adattomb tartalma*/

    const testAddRow =  //objektum ami tarolja a tulajdonsagokat
        {
            author: "Új szerző", // szerzo erteke
            title: "Új mű", //mu erteke
            concepts1: "Új fogalom" //fogalmak erteke
        }
    
    /** @type {HTMLTableSectionElement} a tablazat torzse*/

    const tbodyHtml = document.getElementById("tablebody") //lekeri a tablazat torzset azonosito alapjan

    generateNewRow(testAddRow, tbodyHtml) //meghivja a fuggvenyt a szimpla soros objektumra

})


/** @type {HTMLButtonElement}  uj dupla fogalmas sor hozzaadasa gomb */

const htmlButtonDouble = document.getElementById("htmlbuttondouble") //leker egy gombot a html-en megadott idje alapjan
htmlButtonDouble.addEventListener("click", function(){ //rahiv a gombra egy esemenykezelot ami kattintasra lep akcioba
    console.log("Kattintottál az új dupla fogalmas sor gombra") // kiirja a console-ra hogy megtortent a kattintas es erzekelte

    /** @type {RowType} az adattomb tartalma*/

    const testAddRowDouble =  //objektum ami tarolja a tulajdonsagokat
        {
            author: "Új szerző", // szerzo erteke
            title: "Új mű", //mu erteke
            concepts1: "Új fogalom", //fogalmak erteke
            concepts2: "Másik új fogalom" //masik fogalmak erteke
        }
    /** @type {HTMLTableSectionElement} a tablazat torzse*/
    const tbodyHtml = document.getElementById("tablebody") //lekeri a tablazat torzset azonosito alapjan

    generateNewRow(testAddRowDouble, tbodyHtml) //meghivja a fuggvenyt a dupla fogalmas objektumra
})
/**
 * // legeneralja az uj sort 
 * @param {RowType} testAddRow // a sort adatait tartalmazo objektum
 * @param {HTMLTableSectionElement} parentTbody //torzs amihez hozzafuzi az uj sort
 * @returns {void} //nincs visszateresi erteke
 */
function generateNewRow(testAddRow, parentTbody){ // fuggveny egy objektum es egy torzs parameterrel
    /** @type {HTMLTableRowElement} az uj sor*/ 
    const trUjRow = document.createElement("tr") //sor letrehozas amihez csatoljuk az uj cellakat
    parentTbody.appendChild(trUjRow) //hozzacsatolja a sort a parent torzshoz

        /** @type {HTMLTableColElement} az elso uj cella*/
    const tdSzerzoDouble = document.createElement("td") // letrehozza az uj szerzo oszlopot
    tdSzerzoDouble.innerText = testAddRow.author //feltolti tartalommal
    trUjRow.appendChild(tdSzerzoDouble) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a masodik uj cella*/
    const tdMuDouble = document.createElement("td") // letrehozza az uj mu oszlopot
    tdMuDouble.innerText = testAddRow.title //feltolti tartalommal
    trUjRow.appendChild(tdMuDouble) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a harmadik uj cella*/
    const tdFogalmakDouble = document.createElement("td") // letrehozza az uj fogalmak oszlopot
    tdFogalmakDouble.innerText = testAddRow.concepts1 //feltolti tartalommal
    trUjRow.appendChild(tdFogalmakDouble) //hozzafuzi az oszlopot a sorhoz

    if(testAddRow.concepts2){ //ha definialt a masodik fogalom is 
        /** @type {HTMLTableColElement} a negyedik uj cella*/
        const tdFogalmakDoubleSecond = document.createElement("td") // letrehozza az uj fogalmak oszlopot
        tdFogalmakDoubleSecond.innerText = testAddRow.concepts2 //feltolti tartalommal
        trUjRow.appendChild(tdFogalmakDoubleSecond) //hozzafuzi az oszlopot a sorhoz

    }
    else{ //ha nem definialt
        tdFogalmakDouble.colSpan = "2" //az elso fogalom ket cellat von egybe
    }
}