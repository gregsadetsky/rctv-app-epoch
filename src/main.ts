import "./style.css";
import ConfettiGenerator from "confetti-js";
import JSConfetti from "js-confetti";

let partyStarted = false;

function animate() {
  let time = Date.now();

  if (time > 1700000000000 && !partyStarted) {
    partyStarted = true;
    startParty();
  }

  time = time.toString();
  const ms = time.slice(-3);
  const s = time.slice(0, time.length - 3);
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h1 style="text-align: left">${s}.${ms}</h1>
  `.trim();

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", function () {
  requestAnimationFrame(animate);
});

function startParty() {
  const jsConfetti = new JSConfetti();

  var confettiSettings = { target: "my-canvas", max: 500, rotate: true };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setInterval(() => {
    setInterval(() => {
      jsConfetti.addConfetti();
    }, 300 + Math.random() * 200);
  }, 2500);
}
