const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const confetti = document.getElementById("confetti");

btn.addEventListener("click", () => {
  surprise.classList.add("show");
  btn.textContent = "🎉 Surprise Opened!";
  launchConfetti(100);
});

function launchConfetti(amount) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 3500);
  }
}
