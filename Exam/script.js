function maxCell() {
    var cells = document.getElementsByTagName("td");
    var max = cells[0];
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
    for (var i = 0; i < cells.length; i++) {
        if (Number(cells[i].innerHTML) > Number(max.innerHTML)) {
            max = cells[i];
        }
    }

    max.style.backgroundColor = "red";
}