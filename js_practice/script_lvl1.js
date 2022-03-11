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

function quest3_2(){
	let obj={
		valueInt:45,
		valueInt2:4250,
		valuestr:"fsdfsdf",
		valuestr2:'s'
	};
	var st="";
	var st2="";

	for(var x in obj){
		st+=`${x} = ${obj[x]} <br>`
		if((typeof(obj[x])==typeof(1))||typeof(obj[x])==typeof(1.0)){
			obj[x] =parseInt(obj[x])*2;	
		}
		else{
		}
		st2+=`${x} = ${obj[x]} <br>`
	}
	outputData(`функция которая умнажает на 2 все числовые свойства объекта<br>начальный объект<br>${st}`,`Результат <br> ${st2}`,"requirement","result");
}

// function quest3_3(pos){
// 	if(pos==undefined){
// 		pos=0;
// 	}
// 	try{
// 		document.getElementById("pos").value=pos;
// 		let obj={
// 			valueInt:45,
// 			valueInt2:4250,
// 			valuestr:"fsdfsdf",
// 			valuestr2:'s'
// 		};
// 		//var mi=1;
// 		//var ma =1;
// 		if(pos=0){
// 			alert("выбран самый верхний элемент")
// 			ma=0
// 		}
// 		if(pos>=obj.length){
// 			mi=0
// 			alert("выбран самый нижний элемент")
// 		}
// 	}
// 	catch{	
// 		outputData(`<input id="pos" value="${pos}"/> <button onclick="quest3_3(${pos+1})">up</button><br><button onclick="quest3_3(${pos-1})">down</button>`,`"обновите"`,"requirement","result");
// 	}
// }



function quest3_3(pos){
	if(pos==undefined){
		pos=0;
	}
	var res;
	var l=0;
	let obj={
		valueInt:45,
		valueInt2:4250,
		valuestr:"fsdfsdf",
		valuestr2:'s'
		};
	try{
		for(var x in obj)
		{
			l++;
			if(l==pos){
				res=`${x} ${obj[x]}`;
			}
		}
		for(var x in obj){

		}
		if(pos<=0){
			alert("выбран самый нижний элемент");
			pos=0;
		}
		if(pos>=l){
			alert("выбран самый верхний элемент");
			pos=l;	
		}
	document.getElementById("pos").value=pos;
	}
	catch{}	
	outputData(`функция позволяющая просматривать свойства объекта перемещатся вверх или вниз<br><input id="pos" value="${pos}"/> <input type="submit" onclick="quest3_3(${pos+1})" value="up"/><br><button onclick="quest3_3(${pos-1})">down</button>`,`${res}`,"requirement","result");
}
//lvl4//////////////////////////////////////////////////////////////

function quest4_1(symbol){
	document.getElementById("requirement").innerHTML="Сделать калькулятор";

	document.getElementById("result").innerHTML=
	`<div ><input id="display" style="display:" type="text"/></div>`+
	`<div style="display:"><button class="btn btn-calcul" onclick="number(1)">1</button><button class="btn btn-calcul" onclick="number(2)">2</button><button class="btn btn-calcul" onclick="number(3)">3</button><button class="btn btn-calcul" onclick="sumbol('+')">+</button></div>`+
	`<div style="display:"><button class="btn btn-calcul" onclick="number(4)">4</button><button class="btn btn-calcul" onclick="number(5)">5</button><button class="btn btn-calcul" onclick="number(6)">6</button><button class="btn btn-calcul" onclick="sumbol('-')">-</button></div>`+
	`<div style="display:"><button class="btn btn-calcul" onclick="number(7)">7</button><button class="btn btn-calcul" onclick="number(8)">8</button><button class="btn btn-calcul" onclick="number(9)">9</button><button class="btn btn-calcul" onclick="sumbol('/')">/</button></div>`+
	`<div style="display:"><button class="btn btn-calcul" onclick="number(0)">0</button><button class="btn btn-calcul" onclick="symbol(.)">,</button><button class="btn btn-calcul" onclick="enter()">=</button><button class="btn btn-calcul" onclick="sumbol('*')">*</button></div>`+
	`<div><button class="btn btn-calcul" onclick="clearf(1)"><-</button><button class="btn btn-calcul" onclick="clearf(2)"><-</button></div>`
}

function number(num){
	document.getElementById("display").value+=num
}
function sumbol(s){
	var text=document.getElementById("display").value;
	if(text[text.length-1]!=s && text[text.length-1].match(/\d/)){
		document.getElementById("display").value+=s
	}
}
function enter() {
	var t =document.getElementById("display").value
	var res=eval(t);
	var t =document.getElementById("display").value=res;
}

function clearf(elem) {
	var t =document.getElementById("display").value
	
	if(elem==1&& t.length!=0){
	var x =t.length-1;
	t.length=x;
		document.getElementById("display").value=t.slice(0, -1)
	}
	else{
		document.getElementById("display").value="";	
	}
}

//midle ============================================================================
function quest1_2_1() {
	try{
		document.getElementById("result").innerHTML="";
		var btn =document.getElementById("clickbtn");
		btn.addEventListener("click",()=>alert("Function1"));
		btn.addEventListener("click",()=>alert("function2"));
		alert("Done");
	}
	catch{
		document.getElementById("requirement").innerHTML=`Использование слушателей событий js <br>подключить функции<button onclick="quest1_2_1()">click</button><br><button id="clickbtn">click me</button>`;
	}
}

function lock_link(e){
	var x =document.getElementById("rb1").checked;
	var x2 =document.getElementById("rb2").checked;
	if(x==true)
	{
		alert("Запрещено");
	}
	if((x==false&& x2==false)||x2==false){
		 e.preventDefault();
	}
}

function quest1_2_2(e) {
	try{
		var el=document.getElementById("link1");
		el.addEventListener("click",lock_link);
	}
	catch{
		document.getElementById("requirement").innerHTML=`<a id="link1" href="https://metanit.com/web/javascript/9.3.php">click me</a><input type="radio" id="rb1" name="Cstatus"/>Запретить переход<br><input type="radio" id="rb2" name="Cstatus"/>Разрешить переход`;
		quest1_2_2();
	}
}

function editdata(e){
	var name=document.sf.ninp.value;
	var age =document.sf.ainp;
	if(age.value<=0||name==""){
		alert("введите данные корректно.");
		e.preventDefault();
	}
	else{
		alert("данные отправлены");
	}

}

function quest1_2_3() {
	try{
		var x=document.sf.nsubm1;
		x.addEventListener("click",editdata);
	}
	catch{
		
		outputData(`Словить данные отправленне и формой и как ли их изменить<br><form name="sf">Name<input type="text" name="ninp" placeholder="name"/>Age<input name="ainp" type="number" placeholder="20"/>  <input type="submit" name="nsubm1" value="submit"/></form>`,``,"requirement","result");
		quest1_2_3();
	}
}

function quest1_2_4() {
	var user={
		age:18,
		name:"nick",
		sex:"male"
	};
	var jsonobj =JSON.stringify(user);

	outputData(`Сериализовать объект и затем десиреализовать обратно`,`Сериализванный объект<br> ${jsonobj}<br>Десириализованный объект<br>${JSON.parse(jsonobj)}`,"requirement","result");
}

function quest1_2_5(){
	try{
		var x =document.getElementByClassName("btnev")
		// for(i in x){
		// 	i.addEventListener("click"click);
		// }
		outputData(`обраьотать нажатие одним и тем же образом для нескольких кнопок<br><a class="btnev"href="#" >button1</a><br><a class="btnev" href="#">button2</a>`,"","requirement","result");
	}
	catch{

	}
}

function click(){
	alert("done");
}

//2_2_1//
function sumP(v1,v2)
{
	return mPromise =new Promise(function(resolve,reject)
	{
		resolve(v1+v2);
	})
}

function quest2_2_1()
{
	try
	{
		var v1 =document.getElementById("v1").value;
		var v2=document.getElementById("v2").value
		sumP(v1,v2).then(function(val){alert(`sum =${val}`);document.getElementById("result").value=val});
	}
	catch
	{
		outputData(`строки которые будут сканкатенированы<br><input type="text" id="v1" ><br><input type="text" id="v2" > <button class="btn border-darkblue" onclick="quest2_2_1()">get result</button>`," ","requirement","result");
	}
}

function quest2_2_2(){
	outputData("демонстрация работы Promise получение данных с сервера","все данные в консоли","requirement","result");
	const promise =new Promise(function(resolve,reject){
		var data= "crete data"
		resolve(data);
	})
	.then(data=>{console.log(data); data="data2😶😶"; return data })
	.then(data=>{console.log(data);data="only text"})
	.then(data=>{return data/0})
	.catch()
	.then(data=>{console.log(data)})
	.finally(data=>{console.log(`finaly ${data}`)});
	console.log("click1");
	console.log("click2");
	console.log("click3");
	alert("all data in console");
}
///////////////////////////
function quest3_2_1(){
	var json
	sendJsonRequest("Get","https://jsonplaceholder.typicode.com/users").then(data=>{json =data});
	outputData("получение данных json с сервера https://jsonplaceholder.typicode.com/users",`<h3>полученый json в консоли</h3>`,"requirement","result");
}


function sendJsonRequest(method,url){
	return new Promise(function(resolve,reject){
		const xhr =new XMLHttpRequest();
		xhr.open(method,url);

		xhr.onload=()=>{
			if(xhr.status==200){
				console.log(xhr.responseText);
				resolve(xhr.responseText);
			}
			else{
				aler("No data Recived");
			}
		}
		xhr.send();
	})
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function sendJsonRequest(url,jsonData){
	if(IsJsonString(jsonData)){
		return new Promise(function(resolve,reject){
			const xhr =new XMLHttpRequest();
			xhr.open("POST",url);
			xhr.onload=()=>{
				if(xhr.status>=200&&xhr.status<300){
					alert("data sended");
				}
			}
			resolve(jsonData);
			xhr.send(jsonData);
		});
	}
	else{
		console.log(`Format exception ${typeof(jsonData)}`);
	}
}
///////////////////////////

function quest3_2_2(){
	var jsonObj={
		name:"nick",
		age:14,
	}
	sendJsonRequest("https://jsonplaceholder.typicode.com/users",JSON.stringify(jsonObj)).then(data=>console.log(data));
	outputData("отправка данных json",`<h3></h3>`,"requirement","result");
}
