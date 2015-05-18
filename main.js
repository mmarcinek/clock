
var nowTime = window.setInterval(function() {
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

hours = hours <= 9 ? '0' + hours : hours;
minutes = minutes <= 9 ? '0' + minutes : minutes;
seconds = seconds <= 9 ? '0' + seconds : seconds;

var color ="#" + hours + minutes + seconds;

document.querySelector('body').style.background = color;

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style was my jumping off point to help me hack together the DOM node above, with hacking.

document.querySelector('#clock').innerText ="#" + hours + minutes + seconds;

});

