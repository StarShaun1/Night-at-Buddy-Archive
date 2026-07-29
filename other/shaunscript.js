
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

const musicButton = document.createButton("button");
musicButton.textContent = "Music";
musicButton.className = "btn btn-primary";
musicButton.id = "musicButton";

document.body.append(musicButton);

// ahh
