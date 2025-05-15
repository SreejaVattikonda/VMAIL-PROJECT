const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
	window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
	window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;
