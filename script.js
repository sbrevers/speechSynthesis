const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
console.log(msg);
// 5 addEvenlistener + 5 fonctions

function speaker(start = true) {
  msg.text = document.querySelector("[name='text']").value;
  speechSynthesis.cancel();
  if (start) {
    speechSynthesis.speak(msg);
    console.log(msg);
  }
}

function changeVoice() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`
    )
    .join("");
}

speakButton.addEventListener("click", speaker);

stopButton.addEventListener("click", () => {
  speaker(false);
});

speechSynthesis.addEventListener("voiceschanged", changeVoice);
