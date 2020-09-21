let myHeading = document.querySelector('h2');
myHeading.textContent = multiply(20, 20);

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
}

console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/china-rabbit.jpg'){
		myImage.setAttribute('src','images/ml.jpg');
	}else{
		myImage.setAttribute('src','images/china-rabbit.jpg');
	}
}

function setUserName(){
	let myName = prompt('Please enter your name:');
	if(!myName) {
		setUserName();
	} 
	else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Welcome to my page, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName  = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to my page,' + storedName ;
}

var myButton = document.querySelector('button');
myButton.onclick = function(){
	setUserName();
}