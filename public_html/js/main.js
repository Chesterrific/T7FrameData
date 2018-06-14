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
    document.body.style.overflow = "hidden"; //Disable scrolling on main page

    var sidebarL = document.getElementById("leftNav");
    var sidebarR = document.getElementById("rightNav");

    sidebarL.style.width = "50%";
    sidebarR.style.width = "50%";

    sidebarL.innerHTML += '<img src="chars/' + name + '_thumbnail.png" class="img-fluid">';

    getFrameData(name);
}

/*Changes nav style width to 0 to close side nav*/
function closeNav() {
    document.body.style.overflow = "scroll"; //Enable scrolling on main page

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

    /*For special moves*/
    table.innerHTML += '<td colspan="7" style="text-align: center;">SPECIAL MOVES</td>';
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
        
        /*Error handling for missing "Hit level" fields*/
        if (myData.moves.special[i]["Hit level"] === undefined) {
            hitlevel.innerHTML = "";
        } else {
            hitlevel.innerHTML = myData.moves.special[i]["Hit level"];
        }
        
        /*Error handling for missing "Start up frame" fields*/
        if (myData.moves.special[i]["Start up frame"] === undefined) {
            startup.innerHTML = "";
        } else {
            startup.innerHTML = myData.moves.special[i]["Start up frame"];
        }
        
        /*Error handling for missing "On block" fields*/
        if (myData.moves.special[i]["Block frame"] === undefined) {
            block.innerHTML = "";
        } else {
            block.innerHTML = myData.moves.special[i]["Block frame"];
        }
        
        /*Error handling for missing "Hit frame" fields*/
        if (myData.moves.special[i]["Hit frame"] === undefined) {
            hit.innerHTML = "";
        } else {
            hit.innerHTML = myData.moves.special[i]["Hit frame"];
        }
        
        /*Error handling for missing "Counter hit frame" fields*/
        if (myData.moves.special[i]["Counter hit frame"] === undefined) {
            cH.innerHTML = "";
        } else {
            cH.innerHTML = myData.moves.special[i]["Counter hit frame"];
        }
        
        /*Error handling for missing "Notes" fields*/
        if (myData.moves.special[i]["Notes"] === undefined) {
            notes.innerHTML = "";
        } else {
            notes.innerHTML = myData.moves.special[i]["Notes"];
        }
    }

    /*For basic moves*/
    table.innerHTML += '<td colspan="7" style="text-align: center;">BASIC MOVES</td>';
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
      
        if (myData.moves.basic[i]["Block frame"] === undefined) {
            block.innerHTML = "";
        } else {
            block.innerHTML = myData.moves.basic[i]["Block frame"];
        }
        
        if (myData.moves.basic[i]["Hit frame"] === undefined) {
            hit.innerHTML = "";
        } else {
            hit.innerHTML = myData.moves.basic[i]["Hit frame"];
        }
        
        if (myData.moves.basic[i]["Counter hit frame"] === undefined) {
            cH.innerHTML = "";
        } else {
            cH.innerHTML = myData.moves.basic[i]["Counter hit frame"];
        }
        
        if (myData.moves.basic[i]["Notes"] === undefined) {
            notes.innerHTML = "";
        } else {
            notes.innerHTML = myData.moves.basic[i]["Notes"];
        }
    }
    //console.log(myData.moves.special[1].Command);     //practice on how to access the JSON files.
}