function playkey(e)
{
	var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio) return;
	if(key.classList.contains("playing"))
	{
		key.classList.remove("playing");
	}
	else
	{
		audio.currentTime =0;
		key.classList.add("playing");
		audio.play();
	}
}
window.addEventListener("keyup", playkey);
window.addEventListener("keydown", playkey);