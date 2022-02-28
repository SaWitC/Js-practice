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

function quest4()
{
	try
	{
		v1=parseFloat(document.getElementById("v1q4").value);
		v2=parseFloat(document.getElementById("v2q4").value);
		v3=document.getElementById("piq4").checked
		var result;
		if(v1!=null&&v2!=null)
		{	
			var rv=Math.random()*(v1-v2)+v2;
			if(v3==true)
			{
				result=`${rv} % 2 == ${parseInt(rv)%2}`
				document.getElementById("result").innerHTML=result;
			}
			else
			{
				result=`${rv} % 2 == ${rv%2}`
				document.getElementById("result").innerHTML=result;
			}
		}
		else
		{
			alert("value null")
		}
	}
	catch
	{
		document.getElementById("result").innerHTML="введите и отправьте данные";
		var requirement='Генерирует число в заданом диопазоне и выводит лелится ли число на 2 с остатком или нет';
		requirement+=`<br>от <input id="v1q4" type="number" value="5"/> <br>до <input id="v2q4" type="number" value="6"/><br>parseInt <input id=piq4 type="checkbox"><button class="btn border-darkblue" onclick="quest4()">submit</button>`
		document.getElementById("requirement").innerHTML=requirement;
	}
}

function quest5()
{
	try
	{
		string =document.getElementById("strq5").value
		var res;
		if(string!="")
		{
			while(string.includes("  "))
			{
				string=string.replace(/  /g," ");
			}
			string =string.trim()
			res =string.replace(/ /g,',');
		}
		document.getElementById("result").innerHTML=res;
		alert("cool")
	}
	catch
	{
		document.getElementById("result").innerHTML="введите и отправьте данные";
		alert("bad");
		document.getElementById("requirement").innerHTML='между всеми словами в строке поставить символ , <br><input id="strq5" value="your     test text" /><br> <button onclick="quest5()">submit</button>';
	}
	
}

//lvl2===============================================================================document

function quest2_1(){
	var result;
	try
	{
		var arr =[];
		b =document.getElementById("arr1q1").value
		b+=',';
		var splits = b.split(',');
		for(var i=0;i!=splits.length-1;i++)
		{
			arr.push(parseInt(splits[i]));
		}

		var x1 =arr.length;
		alert("done");
		var coolArr =arr.filter(elem => elem% 2 == 0);
		if(coolArr.length==arr.length)result =`true ${coolArr.length} = ${arr.length}`
		else result =`false ${coolArr.length} != ${arr.length}`
		document.getElementById("result").innerHTML=result;
	outputData(``,`${result}`,"requirement","result");
		
	}
	catch{
		outputData(`'<p>функция принимает массив целых чисел выводит true если все числа четные Ввдите числа в формате число,число,число</p><br> Числа в массиве <input id="arr1q1" type="text" value="1,2,3,4"/> <button class="btn border-darkblue " onclick="quest1_1()">submit</button>'`,``,"requirement","result");
	}

	//alert(arr.forEach());
}

function quest2_2()
{
	var arr1=[1,2,3,4]
	var arr2=['abc','def','yfyy']
	var arr3 =[];
	//document.getElementById("requirement").innerHTML=
	arr3=[...arr1,...arr2];
	//document.getElementById("result").innerHTML=
	outputData(`<p class="left-T"><h3>оператор spread</h3><br>Операции с масивами<br>arr1=[1,2,3,4]<br>arr2=['abc','def','yfyy']<br>arr3 =[]<br><p>`,`arr3[...arr1,...arr2]  итог ${arr3}`,"requirement","result");
}

function outputData(requirementstr,resultstr,requirementHTML_Id,resultHTML_Id){
	document.getElementById(requirementHTML_Id).innerHTML=requirementstr;
	document.getElementById(resultHTML_Id).innerHTML=resultstr;

}
function quest2_3(arr=[1,2,3,4,5,21.4]){
	var sum=0;
	arr.forEach(e=>sum+=e)
	var res = sum/arr.length;
	res=Math.floor(res*100)/100;
	outputData(`функция высчитывает среднее арифметическое массива и округляет вплоть до 2 знаков после запятой<br> массив по умолчанию[${arr}]`,`sum= ${sum}<br>average of numbers ${sum/arr.length}<br>result ${res}`,"requirement","result");
}

//lvl3====================================================================================

function quest3_1()
{
	let el=
	{
		nick:12000,
		rick:34500,
		nika:23423,
		vika:23432
	};
	var str=""
	alert(el);
	var sum=0;
	for(var x in el){
		sum+=el[x];
		str+=`name: ${x} value: ${el[x]}<br>`
	}
	outputData(`функция перебирающая и слаживающая знчения всех свойств объекта (свойства представляют собой имена сотрудников значение свойств его зп) <br>объект<br>${str}`,`sum =${sum}`,"requirement","result");
}