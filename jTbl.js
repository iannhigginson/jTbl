//
/**
 * inhTbl.js
 * Ian Neal Higginson
 * 29/06/2021
 */

/**
 * We are going to build a table
 */

function inhTbl(tblStructure) {

 var tblRow, tblCell, elem;

 // Create a table element.
 let tbl = document.createElement('table');
 tbl.className = 'tbl';

 for (let tables in tblStructure) {
  let table = tblStructure[tables];
  for (let rows in table) {
   let row = table[rows];
   for (let cells in row) {
    // New row for these cells.
    tblRow = document.createElement('tr');
    let cell = row[cells];
    for (let cellContents in cell) {
     // New cell for this content.
     tblCell = document.createElement('td');
     // Append this cell to this row.
     tblRow.appendChild(tblCell);
     let cellContent = cell[cellContents];
     for (let item in cellContent) {
      // Is the content at this level an object.
      if (typeof (cellContent) === 'object') {
       switch (item) {
        case 'element':
         elem = document.createElement(cellContent[item]);
         break;
        case 'class':
         elem.className = cellContent[item];
         break;
        case 'cols':
         elem.setAttribute('cols', cellContent[item]);
         break;
        case 'innerText':
         elem.innerHTML = cellContent[item];
         break;
        case 'id':
         elem.id = cellContent[item];
         break;
        case 'onclick':
         elem.setAttribute('onclick', cellContent[item]);
         break;
        case 'size':
         elem.size = cellContent[item];
         break;
        case 'type':
         elem.type = cellContent[item];
         break;
         case 'value':
          elem.value = cellContent[item];
          break;
       }
       // Insert this element into this cell
       tblCell.appendChild(elem);
      } else {
       // Insert this content into this cell
       tblCell.innerHTML = cellContent;
      }
      // Append this row to the table
      tbl.appendChild(tblRow);
     }
    }
   }
  }
 }
 return tbl;
}

