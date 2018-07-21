# CSS Clock
Day 2 of the 30-Day Vanilla-JS Challenge!

## Important takeaways
### Functions can be set on intervals
```javascript
function clock(){}setInterval(clock, 1000);
```
### Obtaining the current hour, minute or second
```javascript
var hour = new Date().getHours();
```
```javascript
var minute = new Date().getMinutes();
```
```javascript
var second = new Date().getSeconds();
```
## Reusable Functions
```javascript
/**
Returns angle of clock hand.

Allows for three possible inputs.

hours - returns degree of hour hand
minutes - returns degree of minute hand
seconds - returns degree of second hand

**/
function clockDegree(type)
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
```
