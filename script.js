let messages = [
  "Are you sure?",
  "Really sure??",
  "Think again 😢",
  "Last chance!",
  "You’re breaking my heart 💔"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (currentSize * 1.4) + "px";
}

function handleYesClick() {
  document.body.innerHTML = "<h1>Yayyy!! ❤️😍</h1>";
}
