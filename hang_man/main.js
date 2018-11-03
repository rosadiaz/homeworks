const mystery_words_array = [
  "Malamute",
  "Poodle",
  "Labrador",
  "Spaniel",
  "Bloodhound",
  "Sheppard",
  "Weiner",
  "Bulldog",
  "Boxer",
  "Chihuahua",
  "Mutt",
  "Weimaraner",
  "Pug"
]
const mystery_word = mystery_words_array[Math.floor(Math.random()*mystery_words_array.length)].toLowerCase();
console.log(mystery_word)
const mystery_letter_array = mystery_word.split("");
let wrong_attempt_counter = 0;
let win = 0;
const you_win_sound = new Audio(`sounds/win.wav`);
const you_loose_sound = new Audio(`sounds/fart.wav`);

$(document).ready(function (){

  drawKeyboard()
  drawMysteryWord(mystery_word)

  document.addEventListener('keydown', event => {
    const { keyCode } = event;
    guessLetter(keyCode)
  })
  document.querySelectorAll('.letter').forEach(node => {
    node.addEventListener('click', event => {
      let keyCode = event.currentTarget.id
      guessLetter(keyCode)
    }) 

  })
  document.querySelector("#hint-button").addEventListener("mouseenter", () => {
    document.querySelector("#hint-button").classList.add("d-none");
    document.querySelector("#cheater").classList.remove("d-none");
    document.querySelector("#hint").classList.remove("d-none");
  });
  document.querySelector("#cheater").addEventListener("mouseleave", () => {
    document.querySelector("#hint-button").classList.remove("d-none");
    document.querySelector("#cheater").classList.add("d-none");
    document.querySelector("#hint").classList.add("d-none");
  });
})
drawKeyboard = () => {
  for (let charCode = 65; charCode < 91; charCode++) {
    const div = document.createElement("div");
    div.classList.add("col-auto", "p-1");
    const button = document.createElement("button");
    button.setAttribute("id", charCode)
    button.classList.add("btn", "btn-outline-info", "btn-lg", "letter")
    const letter = document.createTextNode(String.fromCharCode(charCode));
    button.appendChild(letter);
    div.appendChild(button);
    document.getElementById("letters").appendChild(div); 
  }
}

drawMysteryWord = (mystery_word) => {
  for (let i = 0; i < mystery_word.length; i++) {
    const div = document.createElement("div");
    div.classList.add("col-auto", "p-1");
    const button = document.createElement("button");
    button.setAttribute("id", `mystery_letter_${i}`);
    button.classList.add("btn", "btn-info", "btn-lg");
    const letter = document.createTextNode("___");
    button.appendChild(letter);
    div.appendChild(button);
    document.getElementById("mystery-word-area").appendChild(div); 
  }
}

guessLetter = (keyCode) => {
  $(`#${keyCode}`).removeClass("btn-outline-info").addClass("btn-info");
  let guessed_letter = String.fromCharCode(keyCode).toLowerCase()
  if (mystery_letter_array.includes(guessed_letter)) {
    for (let letter of mystery_letter_array) {
      if (guessed_letter == letter) {
        const letter_position = mystery_letter_array.indexOf(letter)
        $(`#mystery_letter_${letter_position}`).text(letter)
        mystery_letter_array[letter_position] = "*"
        win++;
        if (win == mystery_letter_array.length) {
          you_win_sound.play();
          alert("How did you know?! Good job you win 🍰")
          playAgain();
        }
      }
    }
  } else {
    wrong_attempt_counter +=1
    $("img").attr("src", `images/${wrong_attempt_counter}_gallows.jpg`)
    if (wrong_attempt_counter == 7) {
      you_loose_sound.play();
      alert("You suck at hangman 💩");
      playAgain();
    }
  }

}

playAgain = () => {
  if (window.confirm("Do you want to play again?")) { 
    location.reload();
    wrong_attempt_counter = 0;
    win = 0;
  } 
}