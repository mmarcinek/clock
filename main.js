
var nowTime = window.setInterval(function() {
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

hours = hours <= 9 ? '0' + hours : hours;
minutes = minutes <= 9 ? '0' + minutes : minutes;
seconds = seconds <= 9 ? '0' + seconds : seconds;

document.querySelector('#clock').innerText = hours + ':' + minutes + ':' + seconds;

});

