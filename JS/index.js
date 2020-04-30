// JavaScript source codes
document.getElementById("upload").addEventListener('click', loadFile);
document.getElementById("addText").addEventListener('click', addText);
document.getElementById("changeColor").addEventListener('click', colorPick);
document.getElementById("background").addEventListener('click', backgroundColorPick);
document.getElementById("saveVideo").addEventListener('click', uploadVideo);



const uploadFile = document.getElementById("file");
const fileUpdate = document.getElementById("fileDesc");
const videoUpdate = document.getElementById("videoUpdate");
const preview =  document.getElementById("canvas");
const colorInput =  document.getElementById("colorInput");
const colorInput1 =  document.getElementById("colorInput1");
const imgTools=document.getElementById("run");
const checkFileVideo=document.getElementById('fileVideo');

uploadFile.addEventListener("change", checkFile);
checkFileVideo.addEventListener("change", checkfilevideo);

//Generic functions

//create element
function createElement(element){
	return document.createElement(element);
}

//append element
function append(parent, el){
	return parent.appendChild(el);
}

//remove element
function remove(parent, el){
	return parent.removeChild(el);
}

//drag element
function dragEl(el){
	const el1= document.querySelector(el);
	el1.addEventListener('mousedown', mousedown);
	function mousedown(e){
		window.addEventListener('mousemove', mousemove)
		window.addEventListener('mouseup', mouseup)
		let prevX = e.clientX;
		let prevY = e.clientY;

		function mousemove(e){
			let newX = prevX - e.clientX;
			let newY=  prevY - e.clientY;

			const rect = el1.getBoundingClientRect();

			el1.style.left=rect.left - newX +"px"
			el1.style.top=rect.top - newY +"px";

			prevX = e.clientX;
			prevY = e.clientY;


		}
		function mouseup(){
			window.removeEventListener("mousemove", mousemove);
			window.removeEventListener("mouseup", mouseup);

		
		}
	}
}


//upload image files

function loadFile(){
	uploadFile.click();
}

function checkFile(){
	const file = this.files[0]
	const reader = new FileReader();
	console.log(file);
	let img = createElement('img');
	if(uploadFile.value){
		fileUpdate.innerHTML = uploadFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] + " uploaded";
		if(file){
			preview.style.display="block";
			const reader = new FileReader();
			reader.addEventListener("load", function(){
				img.src=this.result;
				img.className="preview-img";
				img.id='uploadImg';
				img.alt="upload";
				append(preview,img);
				dragEl('.preview-img');
				img.addEventListener('click', imgSelect);
			
			})
			reader.readAsDataURL(file);
		}
		;
	}else{
		fileUpdate.innerHTML = "No file choosen ";
	}

}


//addText

function addText(){
		let text = createElement('textarea');
		text.id="addtext"
		text.className="addText"
		text.cols=30;
		text.placeholder="start typing...";
		append(preview,text);
		document.getElementById('addtext').addEventListener('keypress', function (e){
			if (e.key === 'Enter') {	
				text.style.border="none";
				text.style.resize="none";
				text.style.background="transparent";
			 }
		});

		const FontSize1  = document.querySelector('#fontSize');
		const FontStyle1  = document.querySelector('#fontChange');

		FontSize1.addEventListener('input', ()=>{
			let Font1 = FontSize1.value;
			console.log(Font1);
			text.style.fontSize=Font1 + 'px';
		});

		FontStyle1.addEventListener('input', ()=>{
			let Font1 = FontStyle1.value;
			console.log(Font1);
			text.style.fontFamily=Font1;
		});
		
		dragEl('.addText')

}


//change text color
function colorPick(){
		colorInput.click();
		let colorPicker = document.querySelector('#colorInput');
		let text=document.querySelector('#addtext');
		colorPicker.addEventListener('input', ()=>{
			let color = colorPicker.value;
			console.log(color);
			text.style.color=color;
		});
		
}

//change background color
function backgroundColorPick(){
		colorInput1.click();
		let colorPicker = document.querySelector('#colorInput1');
		let canvas=document.querySelector('#canvas');
		let slideNew=document.querySelector('#slideNew');
		colorPicker.addEventListener('input', ()=>{
			let color = colorPicker.value;
			console.log(color);
			canvas.style.background=color;
			slideNew.style.background=color;
		});
		
}
		

//select,delete and edit

function imgSelect(){
	imgTools.style.display='flex';
}



let btn = createElement('input');
let btn1 = createElement('input');
btn.setAttribute('type', 'button');
btn1.setAttribute('type', 'button');
btn.value="Delete";
btn1.value="Close";
btn.className="btn btn-outline-primary mr-2"
btn1.className="btn btn-outline-primary"
btn.id='imgBtn'
append(imgTools,btn);
append(imgTools,btn1);
btn.addEventListener('click', function(){
	remove(preview,uploadImg);
});
btn1.addEventListener('click', function(){
	imgTools.style.display='none';
});

function uploadVideo(){
	
	let a = document.getElementById('embedVideo');
	let b = a.value;
	console.log(b);
	let iframe = createElement('iframe');
	iframe.src=b;
	iframe.className="link-video"
	iframe.width="420px"
	iframe.height="345";
	append(preview,iframe);
	dragEl('.link-video')
	
}

function checkfilevideo(){
	const file = this.files[0]
	const reader = new FileReader();
	console.log(file);
	let video = createElement('video');
	if(file){
		preview.style.display="block";
		const reader = new FileReader();
		reader.addEventListener("load", function(){
			video.src=this.result;
			video.className="preview-video";
			video.id='uploadVideo';
			video.width="320" 
			video.height="240"
			video.autoplay=true;
			append(preview,video);
			dragEl('.preview-video')
		})
		reader.readAsDataURL(file);
		
	}
}