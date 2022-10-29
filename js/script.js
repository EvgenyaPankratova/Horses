
let mainForm = document.querySelector('.question__form');
let inputName = document.querySelector('#nameform');
let inputTel = document.querySelector('#telform');
let check = document.querySelector('.form-check-input');

mainForm.addEventListener('submit', handler); 

function handler (event) {
	event.preventDefault();
	if (check.checked){
		if(inputTel.value.length >= 10 && inputName.value.length >= 3){
			alert("Данные приняты, скоро мы свяжемся с вами!");
			inputName.value = "";
			inputTel.value = "";
		}else{
			alert('Номер телефона должен содержать 10 цифр, а имя - минимум 3 символа');
		}
		
	}else{
		alert("Пожалуйста, дайте согласие на обработку данных");
	}
	
}

