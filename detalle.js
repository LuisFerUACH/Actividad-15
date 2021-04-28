
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//document.getElementById("resultados").innerHTML += "<a href=./detalle.html?"+i+">ID: " + i + "</a>, Title: " + JSON.stringify(json[i].title)+"<br>";
fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {

          var i= getParameterByName("id")
          i--;

          document.getElementById("resultado").innerHTML += "Id: " + JSON.stringify(json[i].id) +"<br>Album Id:" + JSON.stringify(json[i].albumId) + "<br>title: " + JSON.stringify(json[i].title) + "<br>URL: " + JSON.stringify(json[i].url) + "<br>thumbnailUrl: " + JSON.stringify(json[i].thumbnailUrl);

      })
