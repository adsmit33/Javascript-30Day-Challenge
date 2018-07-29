const checkboxes = document.querySelectorAll(`.inbox input[type=checkbox]`);
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
checkboxes.forEach((checkbox, index ) => checkbox.addEventListener("click", () => selectedCheckBox(event,index,checkbox)));