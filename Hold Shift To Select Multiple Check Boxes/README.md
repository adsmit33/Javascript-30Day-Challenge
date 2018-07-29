
# Hold Shift To Select Multiple Check Boxes
Day 10 of the 30-Day Vanilla-JS Challenge! 

## Solution Explained
#### 1. Select all check boxes
```javascript
const checkboxes = document.querySelectorAll(`.inbox input[type=checkbox]`);
```
#### 2. Add clcik event to each checkbox, pass event, index, and checkbox to selectedCheckBox() to determine if multiple check boxes need to be selected.
```javascript
checkboxes.forEach((checkbox, index) => 
  checkbox.addEventListener("click", () => 
    selectedCheckBox(event,index,checkbox)
  )
);
```
#### 3. selectedCheckBox(event, index, checkbox)
If a checkbox is being unchecked, exit function.
```javascript
if(!checkbox.checked) return;
```
If a checkbox is checked without the shiftkey being pressed, or if the first checkbox is checked, 
then save the checkbox's index and exit function.
```
else if(!e.shiftKey || firstBox == -1){
  initialBox = index;
  return;
 }
```
If the initial checked box index is smaller then the current checked box, loop through each checkbox inbetween and check them.
This allows for multiple check boxes to be selcted from the top to bottom.
```javascript
if(initialBox < index)
  {
    for(let i = initialBox; i < index; i ++)
    {
      checkboxes[i].checked = true;
    }
  }
```
If the initial checked box index is larger then the current checked box, loop through each checkbox inbetween and check them. 
This allows for multiple check boxes to be selcted from the bottom up.
```javascript
if(initialBox < index)
  {
    for(let i = initialBox; i < index; i ++)
    {
      checkboxes[i].checked = true;
    }
  }
```
### Full selectedCheckBox(event, index, checkbox) function below.
```javascript
let initialBox = -1;
function selectedCheckBox(e,index,checkbox){
  //exit if unselecting a checkbox
  if(!checkbox.checked) return;
  //if shift key is not pressed, or first check box has not been checked, then set first box of selection
  else if(!e.shiftKey || initialBox == -1)
  {
    initialBox = index;
    return;
  }
  if(initialBox < index)
  {
    for(let i = initialBox; i < index; i ++)
    {
      checkboxes[i].checked = true;
    }
  }
  if(initialBox > index)
  {
    for(let i = index; i < initialBox; i ++)
    {
      checkboxes[i].checked = true;
    }
  }
}
```
