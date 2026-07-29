function playBeeGees() { 
  var beegees = new Audio("https://starshaun1.github.io/Night-at-Buddy-Archive/downloads/beegees.mp3"); 
  beegees.play(); 
} 

document.write('<button type="button" class="btn" id="musicButton">Music</button>');

document.getElementById("musicButton").addEventListener('click', () => {
    playBeeGees();
});
