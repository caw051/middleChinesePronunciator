const inputField = document.querySelector("#inputBox");
const rawChineseTextElement = document.querySelector("#rawChineseText");
const play = document.querySelector(".clickButtonToPronounce");
inputBox.addEventListener("input", alertTextInput);
var typingInput;
function alertTextInput() {
	typingInput = setTimeout(function(){ alert(inputField.value); }, (1 * 1000)); //1 sec

  	inputBox.removeEventListener("input", alertTextInput);

}

inputBox.oninput = function(){
	clearTimeout(typingInput);
	typingInput = setTimeout(function(){ 
		alert(inputField.value); //To check for functionality	
		rawChineseTextElement.value=inputField.value;
		alert("Element should have the exact text now");
	
	}, (1 * 1000)); //1 sec
}

//Immediately load jPlayer w/ first clip(out of many), then get the 
//next URL with the key, and play again(and then loop again)
play.onclick = function(){
	alert(rawChineseTextElement.value);
	let request;
	let conversionTable = {
		"东" : "tung",
		"通" : "tungx",
		"龙" : "tungh",
	}

	let soundTable = {
		"tung" : "./../media/documents/2019/09/12/01_011.mp3",
		"tungx" : "./../media/documents/2019/09/12/01_012.mp3",
		"tungh" : "./../media/documents/2019/09/12/01_013.mp3",
	}



}
//Use the oninput function to be able to clearTimeout.
//In other words, if user is still typing it, you will not need 
//to time it. Place it
//
//Now that this is correctly implemented, we can now use the non-simplified version to do the same exact thing
//as needed.
//

