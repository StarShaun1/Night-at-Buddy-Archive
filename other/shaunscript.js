
// please don't kill me

alert("Welcome to my profile");

var orange = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 

if (orange === 1) { 
  alert("Give orange"); 
} else { 
  console.log("Awww, no orange message " + orange); 
} 

playBeeGees(); 

function playBeeGees() { 
  var beegees = new Audio("https://starshaun1.github.io/Night-at-Buddy-Archive/downloads/beegees.mp3"); 
  beegees.play(); 
} 

/*
const elements = getElementsByClassName("content");
const elementOne = elements[0];

elementOne.insertAdjacentHTML('beforeend', `
    <button type="button" class="btn" onclick="playBeeGees()">
        Music
    </button>
`);
*/

const elements = getElementsByClassName("content");
const elementOne = elements[0];

const musicButton = document.createElement("button");

musicButton.type = "button";
musicButton.textContent = "Music";
musicButton.id = "musicButton";

elementOne.appendChild(musicButton);

// ahh
