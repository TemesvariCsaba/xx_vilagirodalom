/** @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowType tipus definicio amit hasznalni fogok az objektumokra*/

/** @type {HTMLButtonElement} a rowspanos sorok gombja*/

const htmlNormalButton = document.getElementById("htmlbutton") //elkeri azonosito alapjan a rowspanos sor gombjat
htmlNormalButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {RowType} uj sor adatait tartalmazo valtozo tipusa */
    const testSimpleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom" //fogalmak oszlop tulajdonsaganak erteke
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    const htmlTbody = document.getElementById("tablebody") // elkeri a torzset azonosito alapjan

    /**@type {HTMLTableRowElement} az uj sor */
    const testTrow = document.createElement("tr") //letrehoz egy uj sort
    htmlTbody.appendChild(testTrow) //hozzafuzi a sort a torzshoz

    /** @type {HTMLTableColElement} az uj cella*/
    const testSzerzo = document.createElement("td") // letrehozza a szerzo cellat
    testSzerzo.innerText = testSimpleRow.author // beallitja az erteket 
    testTrow.appendChild(testSzerzo) // hozzafuzi a sorhoz

     /** @type {HTMLTableColElement} az uj cella*/
    const testMu = document.createElement("td") // letrehozza a mu cellat
    testMu.innerText = testSimpleRow.title1 // beallitja az erteket 
    testTrow.appendChild(testMu) // hozzafuzi a sorhoz

     /** @type {HTMLTableColElement} az uj cella*/
    const testFogalom = document.createElement("td") // letrehozza a fogalom cellat
    testFogalom.innerText = testSimpleRow.concepts1 // beallitja az erteket 
    testTrow.appendChild(testFogalom) // hozzafuzi a sorhoz

})