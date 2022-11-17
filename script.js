const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

function speaker(start = true) {
  msg.text = document.querySelector("[name='text']").value;
  speechSynthesis.cancel();
  if (start) {
    speechSynthesis.speak(msg);
  }
}

function changeVoice() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`
    )
    .join("");
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === voicesDropdown.value);
}

speechSynthesis.addEventListener("voiceschanged", changeVoice);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", speaker);
stopButton.addEventListener("click", () => speaker(false));
