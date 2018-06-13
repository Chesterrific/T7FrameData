function getCharacter(name) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myData = JSON.parse(xhttp.responseText);
            console.log(myData.name);
        }
    };
    xhttp.open("GET", "frames/24_" + name + ".json", true);
    xhttp.send();
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav(name) {
    var sidebarL = document.getElementById("leftNav");
    var sidebarR = document.getElementById("rightNav");
    
    sidebarL.style.width = "70%";
    sidebarR.style.width = "30%";
    
    sidebarL.innerHTML += '<img src="chars/' + name + '_thumbnail.png" class="img-fluid">';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    var sidebarL = document.getElementById("leftNav");
    var sidebarR = document.getElementById("rightNav");
    
    sidebarL.style.width = 0;
    sidebarR.style.width = 0;
    
    sidebarL.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
} 