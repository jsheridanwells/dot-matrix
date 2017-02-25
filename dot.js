//adapted from mini-project on TeamTreehouse.com
var el = document.getElementById('output');
var out = '';
//make random number between 0 and 256
function random256() {
	return Math.floor(Math.random() * 256);
}

//set random RGB values
function randomColor() {
	var red = random256();
	var green = random256();
	var blue = random256();
	var color = ' rgb(' + red + ',' + green + ',' + blue + ')';
	return color;
}

//make div with num argument
function randomDiv(num) {
	for (i = 0; i <= num; i++) {
      out += '<div class="round" style="background-color:' + randomColor() + '"> </div>';
	}
	return out;
}
//reload the page every sec seconds
function delayReload(sec) {
	timeoutID = window.setTimeout(function() {location.reload()}, sec);
}


//execute functions
el.innerHTML = randomDiv(400);

//un-comment for reload every five seconds
//delayReload(5000);


