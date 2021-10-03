export default const requiredVal = (messageId, value, buttonId, errorClass, checkboxClass = 'checkbox') => {
	let messageElement = document.getElementById(messageId);
	let submitButton = document.getElementById(buttonId);
	let errElements = document.getElementsByClassName(errorClass);
	if (value.length <= 0 || value == false && multichecks(checkboxClass) != true) {
		submitButton.disabled = true;
		messageElement.style.color = 'red';
		messageElement.innerHTML = 'This field is reuired';
	}else{
		messageElement.style.color = 'green';
		messageElement.innerHTML = `<i class="success"></i>`;
	}
	let errorLength = errElements.length;
	for (e in errorLength){
		if(errElements[e].innerHTML == `<i class="success"></i>`){
			errorLength--;
		}else{
			break;
		}
		if(errorLength == 0){
			submitButton.disabled = false;
		}
	}

}