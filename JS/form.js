function validateTextbox() {
 
	let box = document.getElementById("name");
	let box1 =document.getElementById("age");
	let box2=document.getElementById("sex");
	let box3=document.getElementById("address");
	let box4=document.getElementById("phone");
	let box5=document.getElementById("email");

	if(box.value=="" || box1.value=="" || box2.value=="" || box3.value=="" ||box4.value==""|| box5.value=""){
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
 
		else if(box4.value==""){
		box4.focus();
		box4.style.border="solid 3px red";
		
		else 
			box5.focus();
			box5.style.border="solid 3px red";
		}
	}
 
	return false;
 }
 

	 
 
 







