const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.stopwatch');
const brightModeBtn = document.querySelector('.bright');
const darkModeBtn = document.querySelector('.dark');

let root = document.documentElement;
let sec = 0;
let hsec = 0;

let timer;

const startTimer = () => {
	clearInterval(timer);
	timer = setInterval(function () {
		hsec++;
		if (hsec <= 9) {
			display.textContent = `${sec}:0${hsec}`;
		} else if (hsec > 9 && hsec <= 99) {
			display.textContent = `${sec}:${hsec}`;
		} else {
			hsec = 0;
			sec++;
			display.textContent = `${sec}:0${hsec}`;
		}
	}, 10);
};

const pauseTimer = () => {
	clearInterval(timer);
};
const stopTimer = () => {
	pauseTimer();
};

const clearTimer = () => {
	pauseTimer();
	hsec = 0;
	sec = 0;
	display.textContent = `${sec}:0${hsec}`;
};

const brightMode = () => {
	darkModeBtn.classList.remove('active');
	brightModeBtn.classList.add('active');
	const mainBackgroundColor = 'rgb(153, 233, 255)';
	const stoperBackgroundColor = 'rgb(82, 185, 214)';
	const fontColor = '#000';
	const fontColorHover = '#FFF';
	root.style.setProperty('--mainBackgroundColor', mainBackgroundColor);
	root.style.setProperty('--stoperBackgroundColor', stoperBackgroundColor);
	root.style.setProperty('--fontColor', fontColor);
	root.style.setProperty('--fontColorHover', fontColorHover);
};

const darkMode = () => {
	brightModeBtn.classList.remove('active');
	darkModeBtn.classList.add('active');
	const darkMainBackgroundColor = 'rgb(29, 49, 55)';
	const darkStoperBackgroundColor = 'rgb(3, 11, 14)';
	const darkFontColor = '#FFF';
	const darkFontColorHover = '#000';
	root.style.setProperty('--mainBackgroundColor', darkMainBackgroundColor);
	root.style.setProperty('--stoperBackgroundColor', darkStoperBackgroundColor);
	root.style.setProperty('--fontColor', darkFontColor);
	root.style.setProperty('--fontColorHover', darkFontColorHover);
};

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
clearBtn.addEventListener('click', clearTimer);
brightModeBtn.addEventListener('click', brightMode);
darkModeBtn.addEventListener('click', darkMode);
