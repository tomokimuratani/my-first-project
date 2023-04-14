function addHeadline() {
    var h3 = document.createElement("h3");
    var text = document.createTextNode("世界を笑顔に");
    h3.appendChild(text);
    document.getElementById("myDiv").appendChild(h3);
  }

  
  addHeadline()