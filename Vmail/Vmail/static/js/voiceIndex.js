const help = document.querySelector('#help');
const about = document.querySelector('#about');
const log = document.querySelector('#login');
const home = document.querySelector('#index');

const btn = document.querySelector('.btn');
const audio = document.querySelector('audio');

let intro =
	'we are on the home page\n\n ' +
	document.querySelector('.content h1').innerText +
	''; // add your instructions here

const speech = new SpeechSynthesisUtterance();

//event listeners
window.addEventListener('load', () => {
	synth.cancel();
	console.log('starting');
	speech.text = intro;
	synth.speak(speech);
	setTimeout(() => {
		recognition.start();
		console.log('ready to recieve command');
	}, 5000);
});
recognition.addEventListener('result', e => {
	let text = e.results[0][0].transcript;
	console.log(text);
	action(text);
});
recognition.addEventListener('end', () => {
	recognition.start();
});
recognition.addEventListener('error', () => {
	speech.text = "sorry,you didn't say anything";
	synth.speak(speech);
});

// functions

const action = cmd => {
	// handles the speech synthesis

	cmd = cmd.toLowerCase().replaceAll(' ', '');

	switch (cmd) {
		case 'playmusic':
		case 'startmusic':
			audio.play();
			break;

		case 'stopmusic':
		case 'pausemusic':
			audio.pause();
			break;
		case 'home':
		case 'gotohome':
			home.click();
			break;
		case 'about':
		case 'gotoabout':
			about.click();
			break;
		case 'help':
		case 'gotohelp':
			help.click();
			break;
		case 'login':
		case 'gotologin':
			log.click();
			break;

		default:
			speech.speak = 'sorry,not a valid command';
			synth.speak(speech);
	}
};
