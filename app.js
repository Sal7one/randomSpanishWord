let randomwordbtn = document.querySelector("#morebtn");
randomwordbtn.addEventListener("click", nextWord)
cleanedWords = JSON.parse(apiResponse);

// Text To speach
const synth = window.speechSynthesis;
const voices = synth.getVoices();

function nextWord(){
  let randomnumber= Math.floor(Math.random() * 1992);
  let bothWords = cleanedWords[randomnumber];
  let englishWord = bothWords.substring(0, bothWords.indexOf("–"))
  let SpanishWord = bothWords.substring(bothWords.indexOf("–")+1);
  document.querySelector("#word").innerHTML = SpanishWord
  document.querySelector("#translation").innerHTML = englishWord
}

nextWord();


let currentvoice = synth.getVoices()[8]; // Spanish es-US

// Text to speech 
document.querySelector(".speaker").addEventListener("click",()=>{
  let currentSpanishWord = document.querySelector("#word").innerHTML;
  const utterThis = new SpeechSynthesisUtterance(currentSpanishWord);

  if(currentvoice == synth.getVoices()[8] || currentvoice == undefined){
    currentvoice = synth.getVoices()[7] // Spanish es-ES
    utterThis.voice = currentvoice;
  }else{
    currentvoice = synth.getVoices()[8]
    utterThis.voice = currentvoice;
  }

  utterThis.lang = 'es-ES';
  synth.speak(utterThis);
})

// Google transalte to check
document.querySelector(".translate").addEventListener("click",()=>{
  let currentSpanishWord = document.querySelector("#word").innerHTML;
  let link = `https://translate.google.com/?sl=es&tl=en&text=${encodeURIComponent(currentSpanishWord)}&op=translate`
  window.open(link)
})
// Handle touch devices
let touch_div = document.querySelector('.flip-card');
let is_touch_device = false;
let touchstart_event_listener; 	// save the event listeners, if you want to delete them later
let touchend_event_listener; 		// save the event listeners, if you want to delete them later

if ("ontouchstart" in document.documentElement) {	// check if touch is enabled on device
  is_touch_device = true;
}

if (is_touch_device) {
	touch_div.classList.add('touch-device');	// adds a class to style the div for touch devices
  
  touch_div.addEventListener('touchstart', touchstart_event_listener = () => {	// event listener changes the class to hovered when you put your 
  	touch_div.classList.replace('touch-device', 'touch-device-hovered');				// finger on the div
  });
  
  touch_div.addEventListener('touchend', touchstart_event_listener = () => {		// event listener changes the class back to not hovered when you 
  	touch_div.classList.replace('touch-device-hovered', 'touch-device');				// release your finger
  });
} else {
	touch_div.classList.add('mouse-device');	// adds a class to style the div for mouse devices
}