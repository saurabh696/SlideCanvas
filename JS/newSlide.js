// add new slide

document.getElementById("newSlide").addEventListener('click', newSlide);

const a = document.getElementById('new')

$('.carousel').carousel({
  interval: false
})


function newSlide(){
	let div =createElement('div');
	let h1 =createElement('h1');
	div.id="slideNew";
	append(a, div);
}
