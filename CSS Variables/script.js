const inputs = document.querySelectorAll(".controls input");

function changeVariable()
{
	//obtaining sizing data attribute
	var sizing = this.dataset.sizing || '';
	//update css properties
	document.documentElement.style.setProperty('--'+this.name, this.value+sizing);
}

//add mouseover listener to each input
inputs.forEach(input => input.addEventListener("mousemove", changeVariable));
//add change listener to each input
inputs.forEach(input => input.addEventListener("change", changeVariable));