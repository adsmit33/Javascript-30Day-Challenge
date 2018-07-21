/**
Returns angle of clock hand.

Allows for three possible inputs.

hours - returns degree of hour hand
minutes - returns degree of minute hand
seconds - returns degree of second hand

**/
function getDegreeFromTime(type)
{
	var date = new Date();
	if(type =="hours")
	{
		var time = date.getHours();
		//convert to 12 hour clock
		if (time > 12) time -= 12;
		else if (time === 0) time = 12;
		return ((time*30)+90);
	}
	else if(type =="minutes")  return ((date.getMinutes()*6)+90);
	else if(type == "seconds") return ((date.getSeconds()*6)+90);
}

//sets hour, minute, and second hand positons 
function clock()
{

	var hourHand = document.querySelector(`div[class="hand hour-hand"]`);
	var minuteHand = document.querySelector(`div[class="hand hour-hand"]`);
	var secondHand = document.querySelector(`div[class="hand second-hand"]`);

	var seconds = getDegreeFromTime("seconds");
	var minutes = getDegreeFromTime("minutes");
	var hours = getDegreeFromTime("hours");

	console.log(seconds + " " + minutes+ " " + hours);

	hourHand.style.transform = "rotate("+hours+"deg)";
	minuteHand.style.transform = "rotate("+minutes+"deg)";
	secondHand.style.transform = "rotate("+seconds+"deg)";

}
clock();
setInterval(clock, 1000);