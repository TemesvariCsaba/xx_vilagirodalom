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
 * letrehozza az adott cellat
 * @param {HTMLTableCellElement} cellType fejlec vagy tablazattorzs cella
 * @param {string} cellContent az adott cella tartalma 
 * @param {HTMLTableRowElement} parentTr  tr amihez hozzafuzi a cellakat
 * 
 * @returns {HTMLTableCellElement} visszateresi erteke egy cella
 */
function generateCell(cellType, cellContent, parentTr){ //3 parameter csak igy tudtam megoldani hogy mindket elvarasnak megfeleljen :(
    /** @type {HTMLTableCellElement} a cella ami letrejon*/
    const cellTdOrTh = document.createElement(cellType) // letrehozza a cellat
    cellTdOrTh.innerText = cellContent //megadja a tartalmat
    parentTr.appendChild(cellTdOrTh) //hozzafuzi a parent sorhoz
    return cellTdOrTh //visszater a cellaval 
}

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
        /** @type {HTMLTableCellElement} az uj szerzo cella*/ 
        const tdSzerzo =  generateCell("td", testAddRow.author, testTrow) //letrehozza a szerzo cellat
        
        generateCell("td", testAddRow.title1, testTrow) //letrehozza a mu cellat

        generateCell("td", testAddRow.concepts1, testTrow) //letrehozza a fogalmak cellat

        if(testAddRow.concepts2&&testAddRow.title2){ // ha definialva van masik muve a szerzonek es annak a fogalma
            tdSzerzo.rowSpan = 2// a szerzo cella ket sort fog elfoglalni
            /** @type {HTMLTableRowElement}  az uj sor */
            const testTrowDouble = document.createElement("tr") // letrehoz egy uj sort 
            parentTbody.appendChild(testTrowDouble) // hozzafuzi a torzshoz
            
            generateCell("td", testAddRow.title2, testTrowDouble) //letrehozza a masik mu cellat

            generateCell("td", testAddRow.concepts2, testTrowDouble) //letrehozza a masik fogalmas
    }
    
}
