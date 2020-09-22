var rulesya = document.getElementById('rulesmodalya');
var contentya = document.getElementById('contentmodalya');
// var stuff = document.getElementById('stuffmodal');
var helpya = document.getElementById('helpmodalya');

var rulesbtnya = document.getElementById('rulesbuttonya');
var contentbtnya = document.getElementById('contentbuttonya');
// var stuffbtn = document.getElementById('tostuffbutton');
var helpbtnya = document.getElementById('helpbuttonya');

var span1ya = document.getElementsByClassName('close')[0];
var span2ya = document.getElementsByClassName('close')[1];
// var span3 = document.getElementsByClassName('close')[2];
var span4ya = document.getElementsByClassName('close')[2];


span1ya.onclick = function(){
  rulesya.style.display = "none";
}
span2ya.onclick = function(){
  contentya.style.display = "none";
}/*
span3.onclick = function(){
  stuff.style.display = "none";
}*/
span4ya.onclick = function(){
  helpya.style.display = "none";
}

rulesbtnya.onclick = function(){
  rulesya.style.display = "block";
}
contentbtnya.onclick = function(){
  contentya.style.display = "block";
}/*
stuffbtn.onclick = function(){
  stuff.style.display = "block";
}*/
helpbtnya.onclick = function(){
  helpya.style.display = "block";
}


var ruleshl = document.getElementById('rulesmodalhl');
var contenthl = document.getElementById('contentmodalhl');
// var stuff = document.getElementById('stuffmodal');
var helphl = document.getElementById('helpmodalhl');

var rulesbtnhl = document.getElementById('rulesbuttonhl');
var contentbtnhl = document.getElementById('contentbuttonhl');
// var stuffbtn = document.getElementById('tostuffbutton');
var helpbtnhl = document.getElementById('helpbuttonhl');

var span1hl = document.getElementsByClassName('close')[3];
var span2hl = document.getElementsByClassName('close')[4];
// var span3 = document.getElementsByClassName('close')[2];
var span4hl = document.getElementsByClassName('close')[5];


span1hl.onclick = function(){
  ruleshl.style.display = "none";
}
span2hl.onclick = function(){
  contenthl.style.display = "none";
}/*
span3.onclick = function(){
  stuff.style.display = "none";
}*/
span4hl.onclick = function(){
  helphl.style.display = "none";
}

rulesbtnhl.onclick = function(){
  ruleshl.style.display = "block";
}
contentbtnhl.onclick = function(){
  contenthl.style.display = "block";
}/*
stuffbtn.onclick = function(){
  stuff.style.display = "block";
}*/
helpbtnhl.onclick = function(){
  helphl.style.display = "block";
}