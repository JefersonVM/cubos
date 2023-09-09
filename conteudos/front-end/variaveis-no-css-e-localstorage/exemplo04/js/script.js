const input = document.querySelector('input');
const btnSave = document.querySelector('#save');
const btnClear = document.querySelector('#clear');
const btnRemoveItem = document.querySelector('#remove-item');
const btnGetItem = document.querySelector('#get-item');
const h1 = document.querySelector('h1');

btnSave.addEventListener('click', () => {
  if (!input.value) return;

  localStorage.setItem('name', input.value);
});

btnClear.addEventListener('click', () => {
  localStorage.clear();
});

btnRemoveItem.addEventListener('click', () => {
  localStorage.removeItem('name');
})

btnGetItem.addEventListener('click', () => {
  h1.textContent = localStorage.getItem('name');
});