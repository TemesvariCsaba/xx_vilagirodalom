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

    /** @type {HTMLTableRowElement} az uj sor amit hozzafuzunk a tablazathoz */
    const trSimple = document.createElement("tr") //letrehozza az uj sort
    tbodyHtml.appendChild(trSimple) //hozzacsatolja a sort a torzshoz
    
    /** @type {HTMLTableColElement} az elso uj cella*/
    const tdSzerzoSimple = document.createElement("td") // letrehozza az uj szerzo oszlopot
    tdSzerzoSimple.innerText = testAddRow.author //feltolti tartalommal
    trSimple.appendChild(tdSzerzoSimple) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a masodik uj cella*/
    const tdMuSimple = document.createElement("td") // letrehozza az uj mu oszlopot
    tdMuSimple.innerText = testAddRow.title //feltolti tartalommal
    trSimple.appendChild(tdMuSimple) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a harmadik uj cella*/
    const tdFogalmakSimple = document.createElement("td") // letrehozza az uj fogalmak oszlopot
    tdFogalmakSimple.innerText = testAddRow.concepts1 //feltolti tartalommal
    trSimple.appendChild(tdFogalmakSimple) //hozzafuzi az oszlopot a sorhoz

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

    /** @type {HTMLTableRowElement} az uj sor amit hozzafuzunk a tablazathoz */
    const trDouble = document.createElement("tr") //letrehozza az uj sort
    tbodyHtml.appendChild(trDouble) //hozzacsatolja a sort a torzshoz
    
    /** @type {HTMLTableColElement} az elso uj cella*/
    const tdSzerzoDouble = document.createElement("td") // letrehozza az uj szerzo oszlopot
    tdSzerzoDouble.innerText = testAddRowDouble.author //feltolti tartalommal
    trDouble.appendChild(tdSzerzoDouble) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a masodik uj cella*/
    const tdMuDouble = document.createElement("td") // letrehozza az uj mu oszlopot
    tdMuDouble.innerText = testAddRowDouble.title //feltolti tartalommal
    trDouble.appendChild(tdMuDouble) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a harmadik uj cella*/
    const tdFogalmakDouble = document.createElement("td") // letrehozza az uj fogalmak oszlopot
    tdFogalmakDouble.innerText = testAddRowDouble.concepts1 //feltolti tartalommal
    trDouble.appendChild(tdFogalmakDouble) //hozzafuzi az oszlopot a sorhoz

    /** @type {HTMLTableColElement} a negyedik uj cella*/
    const tdSecondFogalmakDouble = document.createElement("td") // letrehozza a masodik uj fogalmak oszlopot
    tdSecondFogalmakDouble.innerText = testAddRowDouble.concepts2 //feltolti tartalommal
    trDouble.appendChild(tdSecondFogalmakDouble) //hozzafuzi az oszlopot a sorhoz


})