/**
 * 
 */

document.write("<p>" + "mmmmmmmmmmkkkkkkkkkkkkk" + "</p>");

document.form3.but2.style.color="green"

function func1(){
//alert("Good Man")
//a = prompt("enter something")

document.write("<p>" + "gggggggggg" + "</p>");
return "xxxxxxxxxx";
}

function func2(){
	alert("bingoOOOOOOOOOOOOOO");
	
}
function mousestatus(e){
    if(!e) e = window.event;
    btn = e.button;
    whichone=(btn<2) ? "left":"right";
    message=e.type + ":" + whichone + "\n";
    document.forms["form2"].elements["info"].value += message;
    //var aaa = document.form2.info.value;
    //alert(window.document.form2.info.value);
    
    //xmlhttp.open("GET", "www.sina.com.cn",true);
    //xmlhttp.send();
}

//window.onload = function() {

//document.onmousedown = func2;
var obj = document.getElementById("testlink");
var obj2 = document.getElementById("but1");

/*obj.onclick = function(){
	alert("mp3!");
};*/

var obj3 = document.getElementById("navigator");
var obj4 = document.getElementById("but4");

obj.onclick = aaaa
obj2.onclick = bbbb
obj3.innerHTML = navigator.appName;
	//function(){
	//document.form2.info.value="ni hao";
//}
//}
if (obj4.addEventListener){
	obj4.addEventListener('click',function(){alert("1");}, false);
	obj4.addEventListener('click',function(){alert("2");}, false);
	obj4.addEventListener('click',function(){alert("3");}, false);
}

var sel1 = document.getElementById("sel1");
sel1.innerHTML += "<option value='choice4'>4st</option>";

var sel2 = document.getElementById("selText");

sel1.onmouseup = function(){
	sel2.innerHTML = "<b>" + sel1.options[sel1.selectedIndex].value + "</b>";
}

var sel3 = document.getElementById("tagp");
sel1.onmouseup = function(){
	//sel3.firstChild.nodeValue = sel1.options[sel1.selectedIndex].value;
	console.log(sel3.firstChild.id + "KKKKKKKKKK");
	sel3.style.color= "YELLOW";
}

var qn=0;
obj5 = document.getElementById("st");
obj5.onclick=getQuestions;
obj6 = document.getElementById("sm")
obj6.onclick=checkAnswer;


function getQuestions(){
	obj=document.getElementById("sp1");
	obj.firstChild.nodeValue="pls wait....";
	ajaxCallback = nextQuestion;
	ajaxRequest("XML/myXml1.xml");
}
function nextQuestion(){
	questions= ajaxreq.responseXML.getElementsByTagName("q");
	obj=document.getElementById("sp1");
	if (qn<questions.length){
		q = questions[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue=q;
	}else{
		obj.firstChild.nodeValue="no more question....";
	}
}
function checkAnswer(){
	answers = ajaxreq.responseXML.getElementsByTagName("a");
	a = answers[qn].firstChild.nodeValue;
	obj7=document.getElementById("aw");
	if (a==obj7.value){alert("bingo!");}
	else{alert("wrong, should  be" + a)};
	qn = qn + 1;
	obj7.value="";
	nextQuestion();
}

function aaaa(){
    document.getElementById("aud1").loop = "loop"
	
/*if (window.XMLHttpRequest) {
	//alert("bonjour");
    //var xmlhttp = new XMLHttpRequest();	
    //xmlhttp.open("POST", "display.html",true);
    //xmlhttp.send();
    var win2 = window.open("display.html","My Win Sina","width=500,height=500,toolbar=yes");
}*/
}


function bbbb(){
    if (!win2){
    	
    }	
    else{
    win2.close();
    }
}
