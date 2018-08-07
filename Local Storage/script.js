const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('item')) || [];
const selectall = document.querySelector(`.all-items[name='selectall']`);
const unselectall = document.querySelector(`.all-items[name='unselectall']`);
const clear = document.querySelector(`.all-items[name='clear']`);

function addItem(e)
{
  e.preventDefault();
  const text = this.querySelector('[name="item"]').value;
  const item =
  {
    text,
    done: false
  };
  items.push(item);
  addItemToList(items, itemsList);
  localStorage.setItem('item', JSON.stringify(items));
  this.reset();
}

function addItemToList(plates =[], platesList)
{
  platesList.innerHTML = plates.map((plate, i) =>
  `<li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
    <label for="item${i}">${plate.text}</label>
  </li>
  </ul>
  `
  ).join('');
}

function toggleDone(e)
{
  if(!e.target.matches('input')) return;
  const el = e.target;
  const dataIndex = el.dataset.index;
  items[dataIndex].done = el.checked;
  localStorage.setItem('item', JSON.stringify(items));
}

function clearItems()
{
  localStorage.clear();
  items = [];
  addItemToList(items, itemsList);
}
function allItems(isDone)
{
  items.forEach(item =>
  {
    item.done = isDone;
  });
  localStorage.setItem('item', JSON.stringify(items));
  addItemToList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clear.addEventListener('click', clearItems);
selectall.addEventListener('click', () =>  allItems(true));
unselectall.addEventListener('click', () =>  allItems(false));

addItemToList(items, itemsList);
