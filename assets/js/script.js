// function calc() {

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var calculate = document.getElementById("calculate");
var result = document.getElementById("result");


calculate.onclick = function(){
	var first = input1.value.toUpperCase();
	var firstLength = input1.value.length;
	var last = input2.value.toUpperCase();
	var lastLength = input2.value.length;
	var count=0;
for (count = 0; count < firstLength; count++) {
	letter1 = first.substring(count, count + 1);
	if (letter1=='I') count+=3;
	if (letter1=='A') count+=10;
	if (letter1=='M') count+=5;
	if (letter1=='W') count+=2;
	if (letter1=='E') count+=5;
	if (letter1=='B') count+=5;
	if (letter1=='D') count+=5;
	if (letter1=='V') count+=10;
	if (letter1=='L') count+=5;
	if (letter1=='O') count+=5;
	if (letter1=='P') count+=5;
	if (letter1=='R') count+=10;
	}

for (count = 0; count < lastLength; count++) {
	letter2 = last.substring(count, count + 1);
	if (letter2=='I') count+=3;
	if (letter2=='A') count+=10;
	if (letter2=='M') count+=5;
	if (letter2=='W') count+=2;
	if (letter2=='E') count+=5;
	if (letter2=='B') count+=5;
	if (letter2=='D') count+=5;
	if (letter2=='V') count+=10;
	if (letter2=='L') count+=5;
	if (letter2=='O') count+=5;
	if (letter2=='P') count+=5;
	if (letter2=='R') count+=10;
	}

var amount=0;
if (count> 0) amount=  5-((firstLength+lastLength)/2)
if (count> 2) amount= 10-((firstLength+lastLength)/2)
if (count> 4) amount= 20-((firstLength+lastLength)/2)
if (count> 6) amount= 30-((firstLength+lastLength)/2)
if (count> 8) amount= 40-((firstLength+lastLength)/2)
if (count>10) amount= 50-((firstLength+lastLength)/2)
if (count>12) amount= 60-((firstLength+lastLength)/2)
if (count>14) amount= 70-((firstLength+lastLength)/2)
if (count>16) amount= 80-((firstLength+lastLength)/2)
if (count>18) amount= 90-((firstLength+lastLength)/2)
if (count>20) amount=100-((firstLength+lastLength)/2)

if (firstLength==0 || lastLength==0){
amount= "Error"
alert("Enter a valid Name!")
} ;
if (amount < 0) amount= 0;
if (amount >99) amount=99;

	result.value = amount+"%";
	result1 = amount;

if (result1 >= 70){
	document.getElementById("sad").style.display = "none";
	document.getElementById("display").innerHTML = "Naks! Magiging Web Developer siya!"
	document.getElementById("congrats").style.display = "block";
	document.getElementById("display").style.color = "green";
	// document.getElementById("result").style.backgroundColor = "lightgreen";
	document.getElementById("result").style.color = "green";
}else if(firstLength==0 || lastLength==0){
	document.getElementById("display").innerHTML = ""
}else{
	document.getElementById("congrats").style.display = "none";
	document.getElementById("display").innerHTML = "Awtss! Mag Tuitt Coding Bootcamp ka nalang!"
	document.getElementById("sad").style.display = "block";
	document.getElementById("display").style.color = "red";
	// document.getElementById("result").style.backgroundColor = "lightyellow";
	document.getElementById("result").style.color = "red";
}



}
