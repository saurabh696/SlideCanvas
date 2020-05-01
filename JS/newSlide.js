document.getElementById("newSlide").addEventListener('click', newSlide);


const a = document.getElementById('inner');
const prevArrow = document.querySelector('.carousel-control-prev');
$('.carousel').carousel({
  interval: false
})

$('.carousel').carousel({
  keyboard: true
})


function newSlide(){
	prevArrow.style.display="flex"
	let div =createElement('div');
	let div1 =createElement('div');
	div1.id="slideNew";
	div.className="carousel-item";
	div.dataInterval=false;
	append(a, div);
	append(div, div1);
}

