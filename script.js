function calculate(){
	// let num1 = prompt("Enter the first number:");
	let num1 = document.getElementById("num1").value;
	num1 = checkNum(num1, "first");
	// let num2 = prompt("Enter the second number:");
	let num2 = document.getElementById("num2").value;
	num2 = checkNum(num2, "second");
	
	
	var factors1 = [];
	var factors2 = [];
	
	
	getFactors(num1, factors1);
	getFactors(num2, factors2);
	
	total1 = calcTotal(factors1);
	total2 = calcTotal(factors2);
	
	
	printContent(num1, num2, factors1, factors2);
}


function calcTotal(factors){
	total = 0;
	for(i = 0; i < factors.length; i++){
		total = total + factors[i];
	}
	return total;
}

function getFactors(num, factors){
	let neg = false;
	if(num < 0){
		neg = true;
	}
	if(neg){
		for(i = -1; i > num; i--){   // does not include the number
			if(Number.isInteger(num/i)){
				factors.push(i*(-1));
				factors.push(i);
			}
		}
		factors.push(num*(-1));
	}
	else{
		for(i = 1; i < num; i++){   // does not include the number
			if(Number.isInteger(num/i)){
				factors.push(i);
			}
		}
	}
}

function checkNum(userInput, word){
	let userInt = userInput * 1; //convert string userInput to int
	while(!(Number.isInteger(userInt))){
		alert("Sorry, please enter an integer!");
		userInt = prompt("Enter the " + word + " number here:");
		userInt = userInt * 1;
	}
	return userInt;
}


function printContent(num1, num2, factors1, factors2){
	if(total1 == num2 && total2 == num1){
		document.getElementById('content').innerHTML = "The numbers: " + num1 + " and " + num2 + " are amicable";
	}
	else {
		document.getElementById('content').innerHTML = "The numbers: " + num1 + " and " + num2 + " are not amicable";
	}

	printFactors(factors1, num1, 'factors1');
	printFactors(factors2, num2, 'factors2');
	
}

function printFactors(factors, num, factorsID){
	if(factors.length == 0){
		document.getElementById(factorsID).innerHTML = "Factors of " + num + ": " + num;
	}
	else {
		document.getElementById(factorsID).innerHTML = "Factors of " + num + ": " + factors.toString()+ ", " + num; //add itself back to list
	}
}
