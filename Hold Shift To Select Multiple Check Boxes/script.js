const checkboxes = document.querySelectorAll(`.inbox input[type=checkbox]`);
let firstBox = -1;
function selectedCheckBox(e,index,checkbox){
  //exit if unselecting a checkbox
  if(!checkbox.checked) return;
  //if shift key is not pressed, or first check box has not been checked, then set first box of selection
  else if(!e.shiftKey || firstBox == -1)
  {
    firstBox = index;
    return;
  }
  if(firstBox < index)
  {
    for(let i = firstBox; i < index; i ++)
    {
      checkboxes[i].checked = true;
    }
  }
  if(firstBox > index)
  {
    for(let i = index; i < firstBox; i ++)
    {
      checkboxes[i].checked = true;
    }
  }

}
checkboxes.forEach((checkbox, index ) => checkbox.addEventListener("click", () => selectedCheckBox(event,index,checkbox)));