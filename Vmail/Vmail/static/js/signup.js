inputFirstName = document.querySelector('#firstname');
inputLastName = document.querySelector('#lastname');
inputEmail = document.querySelector('#createemail');
inputPass = document.querySelector('#password');
inputRePass = document.querySelector('#repassword');
submitBtn = document.querySelector('#submit');
const help = document.querySelector('#help');
const about = document.querySelector('#about');
const log = document.querySelector('#login');
const home = document.querySelector('#index');

let firstName,
	lastName,
	email,
	pass,
	repass,
	fnSucess,
	lnSucess,
	emailSucess,
	passSucess,
	rePassSucess,
	intercativeMode;

firstName =
	lastName =
	email =
	pass =
	repass =
	fnSucess =
	lnSucess =
	emailSucess =
	passSucess =
	rePassSucess =
	intercativeMode =
		false;
// let firstName = false;
// let lastName = false;
// let email = false;
// let pass = false;
// let repass = false;

// let fnSucess = false;
// let lnSucess = false;
// let emailSucess = false;
// let passSucess = false;
// let rePassSucess = false;
// let intercativeMode = false;

speech = new SpeechSynthesisUtterance();

second = 1000;
minute = second * 60;

const intro = 'we are on the signup page\n\n please follow my instructions \n';

window.addEventListener('load', () => {
	synth.cancel();
	speech.text = intro;
	synth.speak(speech);
	speech.text = 'are you an existing user ?';
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
	if (emailSucess && passSucess && fnSucess && lnSucess && rePassSucess) {
		speech.text = 'you have successfully created your mail account';
		synth.speak(speech);
		submitBtn.click();
	} else recognition.start();
});

recognition.addEventListener('error', () => {
	speech.text = "sorry you didn't say anything";
	synth.speak(speech);
	if (!intercativeMode) {
		speech.text = 'are you an existing  user ?';
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
	if (cmd.includes('enterfirstname')) {
		cmd = cmd.replace('enterfirstname', '');
		firstName = cmd.trim();
		fnSucess = true;
		console.log(cmd);
		inputFirstName.value = firstName;
	} else if (cmd.includes('enterlastname')) {
		cmd = cmd.replace('enterlastname', '');
		lastName = cmd.trim();
		lnSucess = true;
		console.log(cmd);
		inputLastName.value = lastName;
	} else if (cmd.includes('enteremail')) {
		cmd = cmd.replace('enteremail', '');
		mail = cmd.trim();
		emailSucess = true;
		console.log(cmd);
		inputEmail.value = mail;
	} else if (cmd.includes('enterpassword')) {
		cmd = cmd.replace('enterpassword', '');
		password = cmd.trim();
		passSucess = true;
		console.log(cmd);
		inputPass.value = password;
	} else if (cmd.includes('repassword')) {
		cmd = cmd.replace('repassword', '');
		repass = cmd.trim();
		rePassSucess = true;
		console.log(cmd);
		inputRePass.value = repass;
	} else
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
				break;
			case 'login':
			case 'gotologin':
				log.click();
				break;
			default:
				console.log(cmd);
		}
	// if (fnSucess && lnSucess && emailSucess && passSucess && repass)
	// 	submitBtn.click();
};
