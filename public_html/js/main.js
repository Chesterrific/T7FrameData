var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myData = JSON.parse(xhttp.responseText);
            RenderHTML(myData);
        }
    };
    xhttp.open("GET", "" + counter + ".json", true);
    xhttp.send();


