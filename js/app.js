console.log('Hello');
/*
const $item1 = $('<li/>').text('This is item1');
$('ul').append($item1);
const $item0 = $('<li/>').text('This is item0');
$('ul').prepend($item0);
*/



// const add = () => {

// };

// $('#button').on('click', () => {
// 	const $value = $('#input').val();

//   $('ul').append('<li>' + $value + '</li>');
// })

// const addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', function(){
// 	console.log('btn is clicked');
// })

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
	// ul.appendChild('<li>' + val + '</li>');
})

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
	ul.removeChild(ul.childNodes[0]);
})

// $('#remove').on('click', () => {
// 	const $dying = $('li').eq(0);
// 	$('ul').remove($dying);
// })



/* <<<<QUESTIONS>>>> 

1.
$('h1').HTML = "<h1>aaaaa</h1>";
WHY THIS DOESN'T WORK!!!!

2.
document.getElementById('h1').innerHTML = "aaa"
THIS WORKS

3.
How can I delete the value in input box 
after adding each item

4.
How to add items by typing enter button on keyboard


*/








