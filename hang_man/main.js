$( document ).ready(function (){
  let word = "poodle";
  let letter_array = word.split("");
  let attempt_number = 0;
  drawKeyboard = () => {
    for (let charCode = 65; charCode < 91; charCode++) {
      const div = document.createElement("div");
      div.classList.add("col-auto", "p-1");
      const button = document.createElement("button");
      button.setAttribute("id", charCode)
      button.classList.add("btn", "btn-outline-info", "btn-lg")
      const letter = document.createTextNode(String.fromCharCode(charCode));
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
      button.setAttribute("id", `guess_${i}`)
      button.classList.add("btn", "btn-info", "btn-lg")
      const letter = document.createTextNode("___");
      button.appendChild(letter);
      div.appendChild(button);
      document.getElementById("guessing-area").appendChild(div); 
    }
  }
  drawKeyboard()
  drawGuessingArea(word)

  document.addEventListener('keydown', event => {
    const { keyCode } = event;
    $(`#${keyCode}`).removeClass("btn-outline-info").addClass("btn-info");
    let letter = String.fromCharCode(keyCode).toLowerCase()
    console.log(letter_array)

    if (letter_array.includes(letter)) {
      const letter_position = letter_array.indexOf(letter)
      $(`#guess_${letter_position}`).text(letter)
      letter_array[letter_position] = "*"
      console.log("after replace", letter_array)
    } else {
      $("img").attr("src", `hangman-assets/${attempt_number}_gallows.jpg`)
      attempt_number +=1
      if (attempt_number == 6) {
        alert("You suck at hangman")
      }
    }

  })


})

//<div class="col-auto p-1">
//  <button class="btn btn-outline-info btn-lg">A</button>
//</div>