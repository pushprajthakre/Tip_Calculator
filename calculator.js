function calculate(){
	var bill=document.getElementById("input").value;
	var service=document.getElementById("select").value;
	var people=document.getElementById("input1").value;
	if(bill=="" || service==0)
	{
	alert("please enter values");
	return;
	}
	if(people=="" || people<=1)
	{
	people=1;
	document.getElementById("each").style.display="none";
	}
	else{
	document.getElementById("each").style.display="block";
		}
		var total=(bill * service)/people;
		total=Math.round(total);
		document.getElementById("totalTip").style.display="block";
		document.getElementById("tip").innerHTML=total;
   }
		document.getElementById("totalTip").style.display="none";
		document.getElementById("each").style.display="none";
		document.getElementById("butt").onclick=function(){
			calculate();
		}