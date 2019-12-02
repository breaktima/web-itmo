let coll;
let xcoll;
let ycoll;

function check_negative(ele){
    let val = ele.value;
    val = val[val.length - 1];
    if (!(val >= '0' && val <= '9') || ele.value.length > 2) {
        ele.value = ele.value.substring(0, ele.value.length - 1);
    }
}

function createTable(){
    document.getElementById('tableForm').setAttribute('Hidden', 'true');
    document.getElementById('tableForm').style.display='';
    let td = document.getElementById('cols').value;
    let tr = document.getElementById("rows").value;
    toolBoxCreate(td, tr);

    let k = 1;
    let x = 1;
    let y;
    document.body.innerHTML += "<div><table id='mainTable' style='border-collapse: collapse; border-spacing: 0; border: 0;' cellspacing='0' cellpadding='1' border='1'>" +
    "<caption id='mainTableCaption'></caption>";
    for (y = 1; y <= tr; y++) {
        document.getElementById('mainTable').innerHTML += "<TR id= 'row" + y + "'>";
        for (x = 1; x <= td; x++) {
            document.getElementById('row' + y).innerHTML += "<TD  id = 'col" + x + "_" + y + "' style= 'width: 235px; height: 40px; border: 1px solid black;'>" +
                "<p><textarea id='textArea" + k + "' placeholder='write' style='width: 170px; height: 20px;'></textarea>" +
                "<input type='button' id='buttonSaveArea" + k + "' value='save' onclick='saveTextArea(" + k + "," + x + "," + y + ")' style='height: 26px;'></p></TD>";
            k = k + 1;
        }
        document.getElementById('mainTable').innerHTML += "</TR>";
    }
    document.body.innerHTML += "</table></div>";
    coll = k;
    xcoll = x;
    ycoll = y;
}

function saveTextArea(i, m, n){
    document.getElementById('textArea' + i).setAttribute('Hidden', 'true');
    document.getElementById('textArea' + i).style.display='';
    document.getElementById('buttonSaveArea' + i).setAttribute('Hidden', 'true');
    document.getElementById('buttonSaveArea' + i).style.display='';

    document.getElementById('col' + m + "_" + n).innerHTML += "<p id='text" + i + "'>" + document.getElementById('textArea' + i).value + "</p>";
}

function removeTextArea(i) {
    document.getElementById('textArea' + i).setAttribute('Hidden', 'false');
    document.getElementById('textArea' + i).style.display='block';
    document.getElementById('buttonSaveArea' + i).setAttribute('Hidden', 'false');
    document.getElementById('buttonSaveArea' + i).style.display='block';

    document.getElementById('text' + i).remove();
    
}

function toolBoxCreate(x, y) {
    document.body.innerHTML += "<p id='changeTableBorder' style='margin: 5px; border:1px solid black; width: 176px'>" +
        "<input type='text' id='borderSize' placeholder='write...' style='margin: 5px' oninput='check_negative(this); changeButtonText();'>" +
        "<select id='borderStyle' style='margin: 5px; width: 166px; height: 20px;' onchange='changeButtonText()'> <option value=''>Border style</option> <option value='dotted'>dotted</option> <option value='dashed'>dashed</option> <option value='solid'>solid</option> <option value='double'>double</option> <option value='groove'>groove</option> </select>" +
        "<input type='button' id='buttonBorderSize' onclick='changeBorder(" + x + "," + y +  ")' value='set' style='margin: 5px';>" +
        "</p>";
    document.body.innerHTML += "<p id='changeTableTitle' style='margin: 5px; border:1px solid black; width: 176px'>" +
        "<input type='text' id='tableTitle' placeholder='write...' style='margin: 5px'>" +
        "<input type='button' id='buttonTableTitle' value='set title' onclick='changeTableTitle()' style='margin: 5px;' >" +
        "</p>";
    document.body.innerHTML += "<p id='deleteRow' style='margin: 5px; border:1px solid black; width: 176px'>" +
        "<input type='text' id='rowToDelete' placeholder='write...' style='margin: 5px' oninput=\"check_negative(this)\">" +
        "<input type='button' id='buttonDeleteRow' value='delete row' onclick='deleteRow()' style='margin: 5px;'" +
        "</p>";

    document.body.innerHTML += "<p id='randomScript' style='margin: 5px; border:1px solid black; width: 176px'>" +
        "<input type='button' id='buttonRemove' value='Magic' onclick='randomGenerate()' style='margin: 5px;'" +
        "</p>";

    document.body.innerHTML += "<p id='remove' style='margin: 5px; border:1px solid black; width: 176px'>" +
        "<input type='button' id='buttonRemove' value='remove' onclick='removeTable()' style='margin: 5px;'" +
        "</p>";
}

function removeTable() {
    document.getElementById('mainTable').remove();
    document.getElementById('tableForm').setAttribute('Hidden', 'false');
    document.getElementById('tableForm').style.display='block';

    document.getElementById('changeTableBorder').remove();
    document.getElementById('changeTableTitle').remove();
    document.getElementById('deleteRow').remove();
    document.getElementById('randomScript').remove();
    document.getElementById('remove').remove();

}

function randomGenerate() {
    let x = getRandomInt(1, xcoll);
    let y = getRandomInt(1, ycoll);
    let k = getRandomInt(1, coll);
    switch(getRandomInt(1, 5)){
        case 1:
            setRandomBgColorInRandomCell(x, y);
            break;
        case 2:
             setRandomFontColorInRandomCell(x, y);
             break;
        case 3:
            setRandomFontSizeInRandomCell(x, y);
            break;
        case 4:
            removeTextArea(k);
            break;

        }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomBgColorInRandomCell(m, n) {
    document.getElementById('')
    document.getElementById('col' + m + "_" + n).style.backgroundColor = getRandomColor();
}

function setRandomFontColorInRandomCell(m, n) {
    document.getElementById('')
    document.getElementById('col' + m + "_" + n).style.color = getRandomColor();
}

function setRandomFontSizeInRandomCell(m, n) {
    document.getElementById('')
    document.getElementById('col' + m + "_" + n).style.fontSize=getRandomInt(15, 25)+'pt';
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function deleteRow() {
    let rowToDelete = document.getElementById('rowToDelete').value;
    document.getElementById('mainTable').deleteRow(rowToDelete-1)
}

function changeTableTitle() {
    document.getElementById('mainTableCaption').innerText = document.getElementById('tableTitle').value;
}

function changeButtonText() {
    document.getElementById('buttonBorderSize').value = 'set: ' + document.getElementById("borderSize").value + 'px ';
    document.getElementById('buttonBorderSize').value += 'style ' + document.getElementById("borderStyle").value;
}

function changeBorder(td, tr, bs) {
    let borderSize = document.getElementById('borderSize').value;
    let BorderStyle = document.getElementById('borderStyle').value;
    for (let y = 1; y <= tr; y++)
        for (let x = 1; x <= td; x++)
            document.getElementById('col' + x + '_' + y).style.border = borderSize + 'px ' + BorderStyle + ' black';
}
