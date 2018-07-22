//update --color-pick variable with color picker value
var colorPicker = document.getElementById('base');

colorPicker.addEventListener("input", function()
{
	document.documentElement.style.setProperty("--color-pick", colorPicker.value);
});

//update --spacing with spacing slider
var spacing = document.getElementById("spacing");
spacing.addEventListener("input", function()
{
	document.documentElement.style.setProperty("--spacing", spacing.value+"px");
});

//update --blur with blur slider
var blur = document.getElementById("blur");
blur.addEventListener("input",function()
{
	console.log(blur.value);
	document.documentElement.style.setProperty("--blur", blur.value+"px");
});