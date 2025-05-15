gray = '#121212';
purple = '#BB86FC';
teal = '#03DAC5';
reddishh = '#d54c4c';

// add more color palletes

h2_s = [...document.querySelectorAll('h2')];

// add more dom elements to change color

const darkMode = () => {
	document.body.style.background = gray;
	document.body.style.color = purple;
	h2_s.map(h2 => (h2.style.color = teal));
};

const lightMode = () => {
	document.body.style.background = 'white';
	document.body.style.color = 'black';
	h2_s.map(h2 => (h2.style.color = reddishh));
};
