// for (i=1; i<=100	; i++){
// 	if(i % 3 == 0 && i % 5 == 0){
// 		console.log("Fizz Buzz");
// 	}else if (i % 3 == 0){
// 		console.log("Fizz");
// 	}else if (i % 5 == 0){
// 		console.log("Buzz");
// 	}	
// 	else
// 		console.log(i);	
// 	}

// validation for min and max values
// check to see if either value is null
// check whether min greater than max
function checkValues(low,high){
	if (low == null || high == null){
		return "null"
		console.log("null");
	}
	else if (low < 0 || high < 0){
		return "negative"
		console.log("This is a negative number");
	}
	else{
		return "true"
	}
}

function minMaxBuzz(){
var low = parseInt(document.getElementById("minInput").value);
var high = parseInt(document.getElementById("maxInput").value);
console.log(low + 1);
console.log(high+ 1);
	for (q = low; q <= high; q++){
		fizzBuzz(q)
	}
}
	function fizzBuzz(j){
		if (j % 3 === 0 && j % 5 === 0){
		document.write("<div>Fizz Buzz</div>");
	}
	else if (j % 3 === 0){
		document.write("<div>Fizz</div>");
	}
	else if (j % 5 === 0){
		document.write("<div>Buzz</div>");
	}
	else{
		document.write("<div>"+j+"</div>")
	}
}
function get_color(color){
	var approvedColor = ["red", "blue", "green"]
			console.log(approvedColor.indexOf(color))
	if (approvedColor.indexOf(color)>=0){
			alert("Color is in array")
	}else{
		approvedColor.push(color);
		console.log(approvedColor)
	}
}
get_color("purple")
