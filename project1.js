function validateTextbox() {
 
var box = document.getElementById("name");
var box1 =document.getElementById("address");
var box2=document.getElementById("phone");
var box3=document.getElementById("email");
var box4=document.getElementById("password");


 if(box.value=="" || box1.value=="" || box2.value=="" || box3.value=="" ||box4.value==""){
alert("The field marked '*' should be filled");
if (box.value==""){
	box.focus();
	box.style.border="solid 3px red";
 }
 
 else if (box1.value==""){
	box1.focus();
	box1.style.border="solid 3px red";
 }
 
else if (box2.value==""){
	box2.focus();
	box2.style.border="solid 3px red";
 }
 
else if (box3.value==""){
	box3.focus();
	box3.style.border="solid 3px red";
 }
 
 else{
	box4.focus();
	box4.style.border="solid 3px red";
 }
 }
 
 return false;
 }







