export default const idDisabler = (idName) => {
	let element = document.getElementById(idName);
	element.disabled = true;
}