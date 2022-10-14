

const forms = () => {



const form = document.querySelectorAll('form');
const input = document.querySelectorAll('form');

const message = {
	loading: "Загружаем...",
	success: "Спасибо! Скоро мы свяжемся с вами!",
	failure: "Хмм, что-то не так..."
}

const = postData = async (url, data) => { // словом async говорим функции, что в ней есть асинхронные операции(фетч)
	document.querySelector('.status').textContent = message.loading;
	let result = await fetch(url, { // await нужен, чтобы функция дождалась запроса, а не пошла дальше, пропустив участок кода с фетч.
		method: "POST",
		body: data
	});

};

form.forEach( item => {
	item.addEventListener('submit', (event) => {
		event.preventDefault(); // отменяем стандартное событие браузера - перезагрузку
	
		let statusMessage = document.createElement('div');

		statusMessage.classList.add('status');
		item.appendChild(statusMessage);

		const = formData = new FormData(item);


	}); 

});

};
export default forms;