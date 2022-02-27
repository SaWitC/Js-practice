function quest1(){
	var requirement="Операции с различными числовыми значениями<br> number1=5<br> number2 =6";
	var result;

	var number1 =5;
	var number2 =6;
	result =`${number1} + ${number2} = ${number1+number2} <br><hr/>`
	result+=`${number1} - ${number2} = ${number1-number2} <br><hr/>`
	result+=`${number1} / ${number2} = ${number1/number2} <br><hr/>`
	result+=`${number1} * ${number2} = ${number1*number2} <br><hr/>`
	result+=`${number1} == ${number2} -> ${number1==number2}<br><hr/>`

	alert("done");
	var x1 =document.getElementById("requirement").innerHTML=requirement;
	var x2 =document.getElementById("result").innerHTML=result;
}

function quest2(){
	var requirement="Работа с тернарным оператором";
	var result;

	var number1 =5;
	var number2 =6;
	var res =number1>number2? "yes":"no";
	var res2 =number1??"null";

	result =`${number1} > ${number2} ? "yes" : "no"><br>результат ${res}<br><hr/>`;
	result +=`${number1} ?? "null"<br>результат ${res2}<br>`;



	var x1 =document.getElementById("requirement").innerHTML=requirement;
	var x2 =document.getElementById("result").innerHTML=result;
	alert("done");
}
function quest3(){
	var requirement='Преобразования типов<br>value1 =5<br> value2="6"';
	var result;

	var number1 =5;
	var number2 ="6";

	result =` 5 +"6" = ${number1+number2}<br><hr/>`
	result +=` 5 +parseInt("6") = ${number1+parseInt(number2)}<br><hr/>`
	result +=` 5 +parseFloat("6") = ${number1+parseFloat(number2)}<br><hr/>`



	var x1 =document.getElementById("requirement").innerHTML=requirement;
	var x2 =document.getElementById("result").innerHTML=result;
	alert("done");	
}

function quest4(v1, v2){
	try{
	v1=parseFloat(document.getElementById("v1q4").value);
	v2=parseFloat(document.getElementById("v2q4").value);
	v3=document.getElementById("piq4").checked
	var result;
		if(v1!=null&&v2!=null){

		}
	else{
		}
		var rv=Math.random()*(v1-v2)+v2;
		if(v3==true){
			result=`${rv} % 2 == ${parseInt(rv)%2}`
			document.getElementById("result").innerHTML=result;
		}
		else{
			result=`${rv} % 2 == ${rv%2}`
			document.getElementById("result").innerHTML=result;
		}
		}

	catch
	{
		var requirement='Генерирует число в заданом диопазоне и выводит лелится ли число на 2 с остатком или нет';
		requirement+=`<br>от <input id="v1q4" type="number" value="5"/> <br>до <input id="v2q4" type="number" value="6"/><br>parseInt <input id=piq4 type="checkbox"><button class="btn border-darkblue" onclick="quest4()">submit</button>`
		document.getElementById("requirement").innerHTML=requirement;
	}

}
function quest5(string){
	if(string!=""){
		var arr =string.Split(" ");
		

	}
}