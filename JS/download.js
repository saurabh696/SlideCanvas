document.getElementById('download').addEventListener('click', clickDownload)

var b= document.getElementById('downloadfile');


function clickDownload(){
    b.click();
}


function downloadFile(filename, file) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
function clickDownload(){
    b.click();
    var file = preview.innerText;
    downloadFile("hello.pdf", file);
}