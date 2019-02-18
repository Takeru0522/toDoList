const ul = document.querySelector('ul')
const input = document.getElementById('input')
const btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', () => {
	console.log('btn is clicked')
	const val = input.value;
	const li = document.createElement('li');
	li.innerHTML = val;
	li.setAttribute('class', 'list-group-item')
	ul.appendChild(li);
})

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
	ul.removeChild(ul.childNodes[0]);
})








