const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const overlayMsg = document.querySelector('.modal-container-mail ');

modalBtn.addEventListener('click', function () {
	//   if (modalOverlay.classList.contains('open-modal')) {
	//     modalOverlay.classList.remove('open-modal')
	//   } else {
	//     modalOverlay.classList.add('open-modal')
	//   }
	modalOverlay.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function () {
	modalOverlay.classList.remove('open-modal');
});

const modalBtnMails = document.querySelectorAll('.modal-btn-mail');
const modalOverlayMail = document.querySelector('.modal-overlay-mail');
const closeBtnMail = document.querySelector('.close-btn-mail');

[...modalBtnMails].map(btn =>
	btn.addEventListener('click', e => {
		if (modalOverlay.classList.contains('open-modal')) {
			modalOverlay.classList.remove('open-modal');
		} else {
			modalOverlay.classList.add('open-modal');
			overlayMsg.innerText = btn.innerText;
		}
		console.log('hrllo');
		modalOverlayMail.classList.toggle('open-modal-mail');
	})
);

closeBtnMail.addEventListener('click', function () {
	modalOverlayMail.classList.remove('open-modal-mail');
});
