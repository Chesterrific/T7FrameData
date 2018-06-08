var names = [];

/*var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    GetCharacter(btn.value);
    console.log(btn.value);
})
*/
function GetCharacter(name) {
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
