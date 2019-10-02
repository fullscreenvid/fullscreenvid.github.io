function myFunction() {
var urlinput = document.getElementById('urlfield').value;
urlinput = urlinput.slice(32, 43);



var urlnew = 'https://www.youtube.com/embed/' + urlinput + '?rel=0&autoplay=1' ;

document.getElementById("demo").innerHTML = urlnew;
}
