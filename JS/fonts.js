

function createElement(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}

const fontChange = document.getElementById('fontChange');
const fontSize = document.getElementById('fontSize');
const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCBf44GCp7LsgMbqZiHHEn-mGfG8ooAjUw`;

fontChange.addEventListener('click', loadFont);
fontSize.addEventListener('click', loadFontSize);



function loadFont(){
	let datalist = createElement('DATALIST');
	datalist.setAttribute("id", "fontStyle");
	append(fontChange,datalist);
	console.log('run')
	fetch(url) 
	.then((resp) => resp.json()) 
	.then(function(data){
		let font = data.items;
		return font.map(function(fonts){ 
		let option = createElement('OPTION');
		option.id="fontStyleOption";
		option.className="StyleOption"
		option.setAttribute("value", `${fonts.family}`);
		append(datalist,option);

	});
});

}

function loadFontSize(){
	let datalist1 = createElement('DATALIST');
	datalist1.setAttribute("id", "fontSize1");
	append(fontSize,datalist1);
	const fontArray=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100,125]
	for(var i in fontArray){
		let option1 = createElement('OPTION');
		option1.id="Size"
		option1.setAttribute("value", fontArray[i]);
		append(datalist1,option1);
	
	}
}


