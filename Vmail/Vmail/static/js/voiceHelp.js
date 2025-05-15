const help = document.querySelector('#help');
const about = document.querySelector('#about');
const log = document.querySelector('#login');
const home = document.querySelector('#index');

const intro =
	'we are on the help page\n\n ' + document.querySelector('p').innerText;

const speech = new SpeechSynthesisUtterance();

//event listeners

window.addEventListener('load', () => {
	synth.cancel();
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
	speech.text = "sorry,you didn't say nothing";
	synth.speak(speech);
});

//functions

const action = cmd => {
	cmd = cmd.toLowerCase().replaceAll(' ', '');
	switch (cmd) {
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
			console.log('help');
			break;
		case 'login':
		case 'gotologin':
			log.click();
			break;
		default:
			console.log(cmd);
	}
};
