export default const classDisabler = (className) => {
	let elements = document.getElementsByClassName(className);
	for (e in elements){
		element[e].disabled = true;
	}

}