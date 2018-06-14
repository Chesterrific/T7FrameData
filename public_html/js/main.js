function getFrameData(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myData = JSON.parse(xhttp.responseText);

            populateMoves(myData);
        }
    };
    xhttp.open("GET", "frames/" + name + ".json", true);
    xhttp.send();


}

/*Changes nav style width to open side nav*/
function openNav(name) {
    var sidebarL = document.getElementById("leftNav");
    var sidebarR = document.getElementById("rightNav");

    sidebarL.style.width = "55%";
    sidebarR.style.width = "45%";

    sidebarL.innerHTML += '<img src="chars/' + name + '_thumbnail.png" class="img-fluid">';

    getFrameData(name);
}

/*Changes nav style width to 0 to close side nav*/
function closeNav() {
    var sidebarL = document.getElementById("leftNav");
    var sidebarR = document.getElementById("rightNav");
    var tableContents = document.getElementById("moves");

    sidebarL.style.width = 0;
    sidebarR.style.width = 0;

    sidebarL.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
    tableContents.innerHTML = '';
}

/*Populates movelist*/
function populateMoves(myData) {
    var table = document.getElementById("moves");

    table.innerHTML += '<td colspan="7" style="text-align: center;">SPECIAL MOVES</td>'
    /*For special moves*/
    for (var i in myData.moves.special) {
        var row = table.insertRow(-1);
        var command = row.insertCell(0); //command cell
        var hitlevel = row.insertCell(1); //hitlevel cell
        var startup = row.insertCell(2); //startup cell
        var block = row.insertCell(3); //block cell
        var hit = row.insertCell(4); //hit cell
        var cH = row.insertCell(5); //counterhit cell
        var notes = row.insertCell(6); //notes cell
        
        command.innerHTML = myData.moves.special[i].Command;
        hitlevel.innerHTML = myData.moves.special[i]["Hit level"];
        startup.innerHTML = myData.moves.special[i]["Start up frame"];
        block.innerHTML = myData.moves.special[i]["Block frame"];
        hit.innerHTML = myData.moves.special[i]["Hit frame"];
        cH.innerHTML = myData.moves.special[i]["Counter hit frame"];
        notes.innerHTML = myData.moves.special[i]["Notes"];
    }

    table.innerHTML += '<td colspan="7" style="text-align: center;">BASIC MOVES</td>'
    /*For basic moves*/
    for (var i in myData.moves.basic) {
        var row = table.insertRow(-1);
        var command = row.insertCell(0); //command cell
        var hitlevel = row.insertCell(1); //hitlevel cell
        var startup = row.insertCell(2); //startup cell
        var block = row.insertCell(3); //block cell
        var hit = row.insertCell(4); //hit cell
        var cH = row.insertCell(5); //counterhit cell
        var notes = row.insertCell(6); //notes cell
        
        command.innerHTML = myData.moves.basic[i].Command;
        hitlevel.innerHTML = myData.moves.basic[i]["Hit level"];
        startup.innerHTML = myData.moves.basic[i]["Start up frame"];
        block.innerHTML = myData.moves.basic[i]["Block frame"];
        hit.innerHTML = myData.moves.basic[i]["Hit frame"];
        cH.innerHTML = myData.moves.basic[i]["Counter hit frame"];
        notes.innerHTML = myData.moves.basic[i]["Notes"];
    }
    //console.log(myData.moves.special[1].Command);     //practice on how to access the JSON files.
}