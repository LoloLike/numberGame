let secretNumber =	Math.floor(Math.random()*(10 - 1 + 1))+1;
let attempts = 3;
let finish = false;

document.querySelector('.content').onclick = function() {
	let target = event.target;
	if (target.classList.contains('number')) {
		let userNumber = target.innerHTML;
		if (attempts > 0 && !finish) {
			if (userNumber == secretNumber) {
				document.querySelector('.hint').innerHTML = 'Вы угадали!';
				finish = true;
			} else if (userNumber > secretNumber) {
				document.querySelector('.hint').innerHTML = 'Загаданное число меньше';
				attempts-= 1;
			} else if (userNumber < secretNumber) {
				document.querySelector('.hint').innerHTML = 'Загаданное число больше';
				attempts-= 1;
			} 
		}
		document.querySelector('.attempts').innerHTML = 'Попытки: ' + attempts;

		if (attempts == 0) {
			document.querySelector('.hint').innerHTML = 'Вы проиграли';
			document.querySelector('.attempts').innerHTML = 'Конец игры';			
			// let button = document.querySelectorAll('.number');
			// button.forEach((el)=>{
			// 	el.classList.toggle('disabled');
			// });
		}
	}

	document.querySelector('.new').onclick = function() {
		attempts = 3;
		document.querySelector('.hint').innerHTML = 'Нажми на кнопку';
		document.querySelector('.attempts').innerHTML = 'Попытки: 3';
		secretNumber =	Math.floor(Math.random()*(10 - 1 + 1))+1;
		finish = false;
	}
}