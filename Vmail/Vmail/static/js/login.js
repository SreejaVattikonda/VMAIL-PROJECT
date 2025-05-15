const help = document.querySelector('#help');
const about = document.querySelector('#about');
const log = document.querySelector('#log');
const home = document.querySelector('#index');
const signUp = document.querySelector('#signup');
const inputMail = document.querySelector('.email');
const inputPass = document.querySelector('.password');
const loginBtn = document.querySelector('#loginSubmit');

const intro = 'we are on the login page\n\n please follow my instructions \n';

let password = false;
let mail = false;

let emailSucess = false;
let passSucess = false;
let intercativeMode = false;

let utterThis;

second = 1000;
minute = second * 60;

const speech = new SpeechSynthesisUtterance();

//event listeners

window.addEventListener('load', () => {
	synth.cancel();
	speech.text = intro;
	synth.speak(speech);
	speech.text = 'are you a new user ?';
	synth.speak(speech);
	setTimeout(() => {
		recognition.start();
	}, second * 6);
});

recognition.addEventListener('result', e => {
	const text = recognition.interimResults
		? Array.from(e.results)
				.map(result => result[0])
				.map(result => result.transcript)
				.join('')
		: e.results[0][0].transcript;

	action(text);
});
recognition.addEventListener('end', () => {
	console.log('ended');
	if (emailSucess && passSucess) {
		// checking if all fielsds are filled and logging in

		speech.text = 'logging you in';
		synth.speak(speech);
		loginBtn.click();
	} else recognition.start();
});

recognition.addEventListener('error', () => {
	speech.text = "sorry you didn't say anything";
	synth.speak(speech);

	if (!intercativeMode) {
		speech.text = 'are you a new user ?';
		synth.speak(speech);
	} else {
		speech.text = "sorry,you didin't say your credentials";
		synth.speak(speech);
	}
});

// functions

const action = cmd => {
	cmd = cmd.toLowerCase().replaceAll(' ', '');
	console.log(cmd);

	if (cmd.includes('enteremail')) {
		cmd = cmd.replace('enteremail', '');
		mail = cmd.trim();
		emailSucess = true;
		console.log(cmd);
		inputMail.value = mail;
	} else if (cmd.includes('enterpassword')) {
		cmd = cmd.replace('enterpassword', '');
		password = cmd.trim();
		passSucess = true;
		console.log(cmd);
		inputPass.value = password;
	} else
		switch (cmd) {
			case 'yes':
				signUp.click();
				break;
			case 'no':
				recognition.interimResults = true;
				speech.text = 'please say your email id and password';
				synth.speak(speech);
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
				console.log(cmd);
		}
};
