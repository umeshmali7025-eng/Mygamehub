function loadGame(title, gameUrl) {
  const playerBox = document.getElementById('player-container');
  const gameFrame = document.getElementById('game-frame');
  const gameTitle = document.getElementById('current-game-title');

  gameTitle.innerText = "Playing: " + title;
  gameFrame.src = gameUrl;
  
  playerBox.classList.remove('hidden');
  
  // गेम स्क्रीन पर स्क्रॉल करें
  playerBox.scrollIntoView({ behavior: 'smooth' });
}

function closeGame() {
  const playerBox = document.getElementById('player-container');
  const gameFrame = document.getElementById('game-frame');

  // गेम बंद करने के लिए iframe का src खाली करें
  gameFrame.src = "";
  playerBox.classList.add('hidden');
}
