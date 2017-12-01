console.log('Hello, front end');

var inputBox = document.getElementById("tempBox");
var submit = document.getElementById("submitTemp");
var clear = document.getElementById("clearTemp");
var output = document.getElementById("output");
var celsius;
var temp;

//Convert temp when clicked on submit
var convertTemp = submit.addEventListener("click", function(){
	temp = document.getElementById("tempBox").value;
	celsius = (temp-32)*5/9;
	output.innerText = celsius.toFixed(2) + " C";
});


// Clear input box when clicked on clear
var clearBox = clear.addEventListener("click",function(){
	inputBox.value = "";
});