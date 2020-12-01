
function myfun(){

	localStorage.setItem('animal', document.getElementById('sAnimal').value);
	localStorage.setItem('Another', document.getElementById('Another').value);
	localStorage.setItem('OneMore', document.getElementById('OneMore').value);
	localStorage.setItem('Adjective', document.getElementById('Adjective').value);
	localStorage.setItem('Verb', document.getElementById('Verb').value);
	localStorage.setItem('num', document.getElementById('num').value); 
	localStorage.setItem('view', document.getElementById('view').value);
	localStorage.setItem('radio',document.querySelector('input[name="radio"]:checked').value);
	localStorage.setItem('drop1', document.querySelector('select[name="speed"]').value);

	

}
function disp(){
  	var x,y,z,i,a,b;
 	 x = document.querySelectorAll(".single");
  		for (i = 0; i < x.length; i++) {
    		x[i].innerHTML=localStorage.getItem('animal');
  }

  y = document.querySelectorAll(".mingle");
  		for (a = 0; a < y.length; a++) {
    		y[a].innerHTML=localStorage.getItem('Another');
  }
  document.getElementById("dog").innerHTML=localStorage.getItem('OneMore');
  document.getElementById("alarm").innerHTML=localStorage.getItem('Adjective');

  z = document.querySelectorAll(".run");
  		for (b = 0; b < z.length; b++) {
    		z[b].innerHTML=localStorage.getItem('Verb');
  }
  document.getElementById("two").innerHTML=localStorage.getItem('num');
 document.getElementById("yes").innerHTML=localStorage.getItem('radio');
 document.getElementById("quick").innerHTML=localStorage.getItem('drop1');
 document.getElementById("eg").innerHTML=localStorage.getItem('view');
  }