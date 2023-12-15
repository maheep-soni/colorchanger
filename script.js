var index = 0
 
function changecolor(){
    var colors = [ 'red', 'green', 'pink','skyblue','yellow',
    'grey','violet','golden','purple','deepblue','brown','black']
  document.getElementsByTagName("body")[0].style.background = colors[index++]  
  if (index > colors.length -1 )
  index = 0
}
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
