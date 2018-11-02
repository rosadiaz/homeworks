$( document ).ready(function (){

  drawKeyboard = () => {
    for (let i = 65; i < 91; i++) {
      const div = document.createElement("div");
      div.classList.add("col-auto", "p-1");
      const button = document.createElement("button");
      button.classList.add("btn", "btn-outline-info", "btn-lg")
      const letter = document.createTextNode(String.fromCharCode(i));
      button.appendChild(letter);
      div.appendChild(button);
      document.getElementById("letters").appendChild(div); 
    }
  }

  drawGuessingArea = (word) => {
    for (let i = 0; i < word.length; i++) {
      const div = document.createElement("div");
      div.classList.add("col-auto", "p-1");
      const button = document.createElement("button");
      button.classList.add("btn", "btn-info", "btn-lg")
      const letter = document.createTextNode("___");
      button.appendChild(letter);
      div.appendChild(button);
      document.getElementById("guessing-area").appendChild(div); 
    }
  }
  drawKeyboard()
  drawGuessingArea("poodle")

})
