fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        for(var i=1; i<json.length;i++){
          document.getElementById("resultados").innerHTML += "<a href=./detalle.html?id="+i+">ID: " + i + "</a>, Title: " + JSON.stringify(json[i].title)+"<br>";
        }
      })
