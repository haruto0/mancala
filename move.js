function move() {
    var ban = document.getElementById("box_enemy");

    y=0;
    for (var x=0; x<3; x++) {
        var oseta = ban.rows[x].cells[y];
        oseta.onclick = function () {oseta(this);}
    }
}
function oseta(Cell) {
    oseta.innerHTML="押した";
}