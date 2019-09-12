const inputField = document.querySelector("#inputBox");
inputBox.addEventListener("input", alertTextInput);
var typingInput;
function alertTextInput() {
	typingInput = setTimeout(function(){ alert(inputField.value); }, (3 * 1000));

  	inputBox.removeEventListener("input", alertTextInput);

}

inputBox.oninput = function(){
	clearTimeout(typingInput);
	typingInput = setTimeout(function(){ alert(inputField.value); }, (3 * 1000));
}

//Use the oninput function to be able to clearTimeout.
//In other words, if user is still typing it, you will not need 
//to time it. Place it
//
//Now that this is correctly implemented, we can now use the non-simplified version to do the same exact thing
//as needed.
//

