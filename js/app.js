console.log('Hello');
/*
const $item1 = $('<li/>').text('This is item1');
$('ul').append($item1);
const $item0 = $('<li/>').text('This is item0');
$('ul').prepend($item0);
*/



// const add = () => {

// };

$('#button').on('click', () => {
	const $value = $('#input').val();

  $('ul').append('<li>' + $value + '</li>');
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








