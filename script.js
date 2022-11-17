const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector("[name='text']").value;
// 5 addEvenlistener + 5 fonctions

function speaker() {
  speechSynthesis.speak(msg);
}

speakButton.addEventListener("click", speaker);

stopButton.addEventListener("click", () => {
  speechSynthesis.cancel();
});
