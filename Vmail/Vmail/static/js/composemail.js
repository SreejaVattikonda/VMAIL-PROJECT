const inbox = document.querySelector('#inbox');
const sent = document.querySelector('#sent');
const starred = document.querySelector('#starred');
const trash = document.querySelector('#trash');
const home = document.querySelector('#home');
const logout = document.querySelector('#logout');

const inputMail = document.querySelector('#reciepient');
const inputSub = document.querySelector('#subject');
const inputMsg = document.querySelector('#message');
const sendBtn = document.querySelector('#send');

intro = 'we are at the compose mail page\n\n';
const speech = new SpeechSynthesisUtterance();

let recepient = false;
let subject = false;
let message = false;

let recepientSucess = false;
let subjectSucess = false;
let meassageSucess = false;

let sucess = false;

recognition.interimResults = true;

window.addEventListener('load', () => {
	synth.cancel();
	speech.text = intro;
	synth.speak(speech);
	speech.text = 'please follow my instructions to send a mail to someone\n ';
	synth.speak(speech);

	setTimeout(() => {
		recognition.start();
		console.log('ready to recieve command');
	}, 5000);
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
	if (!recepientSucess || !subjectSucess || !meassageSucess) {
		recognition.start();
	} else {
		speech.text = `sending mail to ${inputMail.value}`;
		synth.speak(speech);
	}
});
recognition.addEventListener('error', () => {
	speech.text = 'sorry please say something';
	synth.speak(speech);
});

const action = cmd => {
	cmd = cmd.toLowerCase().replaceAll(' ', '');

	if (cmd.includes('emailis')) {
		cmd = cmd.replace('emailis', '');
		mail = cmd.trim();
		recepientSucess = true;
		console.log(cmd);
		inputMail.value = mail;
	} else if (cmd.includes('subjectis')) {
		cmd = cmd.replace('subjectis', '');
		mail = cmd.trim();
		subjectSucess = true;
		console.log(cmd);
		inputSub.value = mail;
	} else if (cmd.includes('messageis')) {
		cmd = cmd.replace('messageis', '');
		mail = cmd.trim();
		meassageSucess = true;
		console.log(cmd);
		inputMsg.value = mail;
	} else
		switch (cmd) {
			case 'home':
			case 'gotohome':
				home.click();
				break;
			case 'inbox':
			case 'gotoinbox':
				inbox.click();
				break;
			case 'sent':
			case 'gotosent':
				sent.click();
				break;
			case 'starred':
			case 'gotostarred':
				starred.click();
				break;
			case 'trash':
			case 'gototrash':
				trash.click();
				break;
			case 'darkmode':
			case 'darktheme':
				darkMode();
				break;
			case 'lightmode':
			case 'lighttheme':
				lightMode();
				break;

			case 'logout':
				logout.click();
			default:
				console.log(cmd);
		}
	if (recepientSucess && subjectSucess && meassageSucess) {
		sendBtn.click();
	}
};
