const inbox = document.querySelector('#inbox');
const sent = document.querySelector('#sent');
const starred = document.querySelector('#starred');
const trash = document.querySelector('#trash');
const compose = document.querySelector('#compose');
const home = document.querySelector('#home');
const logout = document.querySelector('#logout');
const sunnyBot = document.querySelector('#sunny');

intro = 'we are at the mail home page\n\n';
const speech = new SpeechSynthesisUtterance();

//event listeners

window.addEventListener('load', () => {
	synth.cancel();
	speech.text = intro;
	synth.speak(speech);
	speech.text = 'you can navigate to inbox\nsent\nstarred\ntrash and compose ';
	synth.speak(speech);

	setTimeout(() => {
		recognition.start();
		console.log('ready to recieve command');
	}, 7000);
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
	speech.text = 'sorry please say something';
	synth.speak(speech);
});

const action = cmd => {
	cmd = cmd.toLowerCase().replaceAll(' ', '');

	switch (cmd) {
		case 'mailhome':
		case 'gotomailhome':
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
		case 'compose':
		case 'gotocompose':
			compose.click();
			break;
		case 'logout':
			logout.click();
			break;
		case 'sunnybot':
		case 'heysunnybot':
		case 'sunny':
		case 'heysunny':	
			sunnyBot.click();
			break;
		case 'darkmode':
		case 'darktheme':
			darkMode();
			break;
		case 'lightmode':
		case 'lighttheme':
			lightMode();
			break;
		default:
			console.log(cmd);
	}
};
