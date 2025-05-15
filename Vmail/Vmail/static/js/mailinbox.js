const inbox = document.querySelector('#inbox');
const sent = document.querySelector('#sent');
const starred = document.querySelector('#starred');
const trash = document.querySelector('#trash');
const compose = document.querySelector('#compose');
const home = document.querySelector('#home');
const logout = document.querySelector('#logout');

const modalBtnMailsArray = [...document.querySelectorAll('.modal-btn-mail')];
const names = {};
const namelist = [];
closeBtnOverlay = document.querySelector('.close-btn-mail');
closeMsg = document.querySelector('.close-btn');

[...document.querySelectorAll('.emailRow__title')].map((name, i) => {
	//forming an array of names and an object to map them
	text = name.innerText.split(' ')[0].toLowerCase();
	namelist.push(text);
	names[text] = modalBtnMailsArray[i];
});

intro = 'we are at the inbox\n\n';
const speech = new SpeechSynthesisUtterance();

const action = cmd => {
	cmd = cmd.toLowerCase().replaceAll(' ', '');

	if (cmd.includes('open')) {
		cmd = cmd.replace('open', '').replace('email', '');
		let name = cmd.trim();
		if (names[name]) {
			names[name].click();
			speech.text = names[name].querySelector('.emailRow__message').innerText;
			synth.speak(speech);
		}
	} else if (cmd.includes('close')) {
		let name = cmd.trim();
		closeMsg.click();
		closeBtnOverlay.click();
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
				case 'compose':
				case 'gotocompose':
					compose.click();
					break;
			case 'logout':
				logout.click();
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
window.addEventListener('load', () => {
	synth.cancel();
	speech.text = intro;
	synth.speak(speech);
	speech.text = 'you have mails from' + namelist.join('\n');
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
