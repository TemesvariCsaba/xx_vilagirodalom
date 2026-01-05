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
    generateNewRow(testSimpleRow, htmlTbody) //fuggveny meghivasa a normal gombra
})


/** @type {HTMLButtonElement} a dupla sorok gombja*/

const htmlDoubleButton = document.getElementById("htmlbuttondouble") //elkeri azonosito alapjan a dupla sor gombjat
htmlDoubleButton.addEventListener("click", function(){ // kattintas eseten rahivja a gombra az esemenykezelot
    /** @type {RowType} uj sor adatait tartalmazo valtozo tipusa */
    const testDoubleRow = { //adatok eltarolasa egy objektumban
        author: "Új szerző", //szerzo oszlop tuajdonsaganak erteke
        title1: "Új mű", //mu oszlop tulajdonsaganak erteke
        concepts1: "Új fogalom", //fogalmak oszlop tulajdonsaganak erteke
        title2: "Másik műve", // azonos szerzohoz tartozo masik mu
        concepts2: "Másik fogalma" // masik muhoz tartozo fogalom
    }
    /** @type {HTMLTableSectionElement} a torzs amihez csatolom az uj sort */
    const htmlTbody = document.getElementById("tablebody") // elkeri a torzset azonosito alapjan
    generateNewRow(testDoubleRow, htmlTbody) // fuggveny meghivasa a dupla gombra
  
})
/**
 * // legeneralja az uj sort 
 * @param {RowType} testAddRow // a sort adatait tartalmazo objektum
 * @param {HTMLTableSectionElement} parentTbody //torzs amihez hozzafuzi az uj sort
 * @returns {void} //nincs visszateresi erteke
 */
function generateNewRow(testAddRow, parentTbody){ //fuggveny ami egy objektumot es egy parent torzset var parameterul
      /**@type {HTMLTableRowElement} az uj sor */
        const testTrow = document.createElement("tr") //letrehoz egy uj sort
        parentTbody.appendChild(testTrow) //hozzafuzi a sort a torzshoz

        /** @type {HTMLTableColElement} az uj cella*/
        const testSzerzo = document.createElement("td") // letrehozza a szerzo cellat
        testSzerzo.innerText = testAddRow.author // beallitja az erteket 
        testTrow.appendChild(testSzerzo) // hozzafuzi a sorhoz

         /** @type {HTMLTableColElement} az uj cella*/
        const testMu = document.createElement("td") // letrehozza a mu cellat
        testMu.innerText = testAddRow.title1 // beallitja az erteket 
        testTrow.appendChild(testMu) // hozzafuzi a sorhoz

         /** @type {HTMLTableColElement} az uj cella*/
        const testFogalom = document.createElement("td") // letrehozza a fogalom cellat
        testFogalom.innerText = testAddRow.concepts1 // beallitja az erteket 
        testTrow.appendChild(testFogalom) // hozzafuzi a sorhoz

        if(testAddRow.concepts2&&testAddRow.title2){ // ha definialva van masik muve a szerzonek es annak a fogalma
            testSzerzo.rowSpan = "2" // a szerzo cella ket sort fog elfoglalni
            /** @type {HTMLTableRowElement}  az uj sor */
            const testTrowDouble = document.createElement("tr") // letrehoz egy uj sort 
            parentTbody.appendChild(testTrowDouble) // hozzafuzi a torzshoz

            /** @type {HTMLTableColElement} az uj cella*/
            const testMuSecond = document.createElement("td") // letrehozza a mu cellat
            testMuSecond.innerText = testAddRow.title2 // beallitja az erteket 
            testTrowDouble.appendChild(testMuSecond) // hozzafuzi a sorhoz

            /** @type {HTMLTableColElement} az uj cella*/
            const testFogalomSecond = document.createElement("td") // letrehozza a fogalom cellat
            testFogalomSecond.innerText = testAddRow.concepts2 // beallitja az erteket 
            testTrowDouble.appendChild(testFogalomSecond) // hozzafuzi a sorhoz
    }
    
}