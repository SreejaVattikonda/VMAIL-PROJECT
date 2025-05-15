const mic = document.querySelector('#mic');
const chatareamain = document.querySelector('.chatarea-main');
const chatareaouter = document.querySelector('.chatarea-outer');
const home = document.querySelector('#home');
let inConversation = false;

const teal = '#03DAC5';
const gray = '#121212';

const introMsg = 'hey buddy..\n i am your sunny bot\n your personal assistant';
const speech = new SpeechSynthesisUtterance();
const intro = [
	'Hello, I am Sunny Bot',
	'Hi, I am a Sunny Bot',
	'Hello, My name is Sunny Bot',
];
const help = [
	'How may i assist you?',
	'How can i help you?',
	'What i can do for you?',
];
const greetings = [
	'i am good you little piece of love',
	'i am fine, what about you',
	'i am good',
];
const hobbies = [
	'i love to talk with humans',
	'i like to make friends like you',
	'i like cooking',
];
const pizzas = [
	'which type of pizza do you like?',
	'i can make a pizza for you',
	'i would love to make a pizza for you',
	'would you like cheese pizza?',
];
const thank = [
	'Most welcome',
	'Not an issue',
	'Its my pleasure',
	'Mention not',
];
const closing = [
	'Ok bye-bye',
	'As you wish, bye take-care',
	'Bye-bye, see you soon..',
];

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
	const output = `<div class="chatarea-inner user">${usermsg}</div>`;
	chatareaouter.innerHTML += output;
	return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
	const output = `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
	chatareaouter.innerHTML += output;
	return chatareaouter;
}

//theming
const darkMode = () => {
	document.body.style.background = gray;
	[...document.querySelectorAll('.chatarea-inner')].map(e => {
		e.style.backgroundColor = teal;
		e.style.color = 'black';
	});
};

const lightMode = () => {
	document.body.style.background = 'white';
	document.body.style.color = 'black';
	[...document.querySelectorAll('.chatarea-inner')].map(e => {
		e.style.backgroundColor = '#466eb6';
		e.style.color = 'white';
	});
};

function chatbotvoice(message) {
	speech.text = '';
	if (message.includes('who are you')) {
		let finalresult = intro[Math.floor(Math.random() * intro.length)];
		speech.text = finalresult;
	} else if (message.includes('fine')) {
		let finalresult = help[Math.floor(Math.random() * help.length)];
		speech.text = finalresult;
	} else if (message.includes('how are you' || 'how are you doing today')) {
		let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalresult;
	} else if (
		message.includes(
			'tell me something about you' || 'tell me something about your hobbies'
		)
	) {
		let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
		speech.text = finalresult;
	} else if (message.includes('pizza')) {
		let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
		speech.text = finalresult;
	} else if (message.includes('thank you' || 'thank you so much')) {
		let finalresult = thank[Math.floor(Math.random() * thank.length)];
		speech.text = finalresult;
	} else if (message.includes('talk to you' || 'talk')) {
		let finalresult = closing[Math.floor(Math.random() * closing.length)];
		speech.text = finalresult;
	}
	window.speechSynthesis.speak(speech);
	cmd = message.toLowerCase().replaceAll(' ', '');
	switch (cmd) {
		case 'home':
			home.click();
			break;
		case 'darkmode':
		case 'darktheme':
			darkMode();
			// [...document.querySelectorAll('.chatarea-inner chatbot')].map(
			// 	e => (e.style.background = teal)
			// );

			break;
		case 'lightmode':
		case 'lighttheme':
			lightMode();
			break;

		default:
			console.log(cmd);
	}
	if (speech.text) {
		chatareamain.appendChild(showusermsg(message));
		chatareamain.appendChild(showchatbotmsg(speech.text));
	}

	setTimeout(() => {
		inConversation = false;
		mic.click();
	}, 3000);
}

recognition.onresult = function (e) {
	inConversation = true;
	let resultIndex = e.resultIndex;
	let transcript = e.results[resultIndex][0].transcript;
	chatbotvoice(transcript);
	console.log(transcript);
};
recognition.onend = function () {
	if (inConversation) return;
	mic.style.background = '#ff3b3b';
	mic.click();
};
mic.addEventListener('click', function () {
	mic.style.background = '#39c81f';
	if (!inConversation) recognition.start();
	console.log('Activated');
});

window.addEventListener('load', () => {
	speech.text = introMsg;

	window.speechSynthesis.speak(speech);
	setTimeout(() => mic.click(), 10000);
});
