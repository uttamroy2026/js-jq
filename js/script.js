/*js ex*/
//ex1
function contentChange(){
document.getElementById('cc') . innerHTML = "hellow";
}
//ex2
function showDate(){
document.getElementById('sd') . innerHTML = Date();
}

//ex3
function showDateTime(){
document.getElementById('sdt') . innerHTML = Date();
}
//ex4
function bulbOn(){
document.getElementById ('img') . src="images/on.gif";
}
function bulbOff(){
document.getElementById ('img') . src="images/off.gif";
}
//ex5
function changeCss(){
document.getElementById('css').style.fontSize="50px";
}
//ex6
function textShow(){
document.getElementById('sh').style.display="block";
}
function textHide(){
document.getElementById('sh').style.display="none";
}

//ex7
var number1=5;
var number2=2;
var result=number1+number2;
function showResult(){
document.getElementById('sr') . innerHTML = result;
}
//ex8
var x=5;
var y=2;
var z=x+y;
function showResults(){
document.getElementById('sa') . innerHTML = z;
}

//toggle content
function toggleV(text){
const element=document.getElementById('text');
if(element.style.display=="block"){
element.style.display="none";

}else{element.style.display="block"

}


}