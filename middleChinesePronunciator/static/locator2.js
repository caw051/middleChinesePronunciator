const inputField = document.querySelector("#inputBox");
var rawChineseTextElement = document.querySelector("#rawChineseText");
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
		rawChineseTextElement.value=inputField.value;
		getSound();
	
	}, (1 * 1000)); //1 sec
}

//All the logic of setup

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
var arrayOfCharsFound = [];
var iterator;
for(iterator = 0; i < rawChineseTextElement.value; i++){
	arrayOfCharsFound.push(rawChineseTextElement.value[i]);
	alert(arrayOfCharsFound);
}
var i;

function getSound(){ 

	
	if (request != null)
		request.abort();

	//Disables sound
	//$('.clickButtonToPronounce').attr('disabled', 'disabled');
	alert(soundTable[rawChineseTextElement.value[i]]);

	let player = $('<div>').attr('id', 'player'); //Probably for a future located tag as needed
	player.jPlayer({ 
		ready: function () { 
			//If sound exists, load the sound accordingly
			if (soundTable.hasOwnProperty()) {

				alert(soundTable[rawChineseTextElement.value[i]]);
				$(this).jPlayer("setMedia", {
					//rawChineseTextElement.value - Has pronunciations
					title: rawChineseTextElement.value[i],
					mp3: soundTable[rawChineseTextElement.value[i]]
				});
			//If sound DOESN'T exist
			} else {
				$(this).jPlayer("setMedia", {
					title: "none",
					mp3: soundTable["none"]
				});
			}
		},
		//OHHH I see; this is what is triggered AFTER you play the ^ thing.
		ended: function () {
			//Okay; where the heck is the first one? Where is sound-read for the other one? ------------------------------> TO ANSWER
			//it is like I am dealing with classes that don't even exist
			i++;
			//I.e. if you are not done playing yet(should definitely keep playing)
			if (i < rawChineseTextElement.value.length) {
				//If sound exists; or not(just like in ready.
				if (soundTable.hasOwnProperty(rawChineseTextElement.value[i])) {
					$(this).jPlayer("setMedia", {
						title: rawChineseTextElement.value[i],
						mp3: soundTable[rawChineseTextElement.value[i]]
					});
				} else {
					$(this).jPlayer("setMedia", {
						title: "none",
						mp3: soundTable["none"]
					});
				}
	
				//For speed purposes; will set to 1; check it it
				//needs to be in quotes
				$(this).jPlayer("option", "playbackRate", "1");
				//$(this).jPlayer("options", {defaultPlaybackRate: "1")});
				$(this).jPlayer("play"); //My assumption is it goes back into the ended: function() state after.
			} else {
				//Resetting; assuming that all chars are played at this point.
				i = 0;
	
				//Okay, why does it ditto HERE; of all places? Is it assuming you are playing again?  ------------------> TO ANSWER
				if (soundTable.hasOwnProperty(rawChineseTextElement.value[i])) {
					$(this).jPlayer("setMedia", {
						title: rawChineseTextElement.value[i],
						mp3: soundTable[rawChineseTextElement.value[i]]
					});
				} else {
					$(this).jPlayer("setMedia", {
						title: "none",
						mp3: soundTable["none"]
					});
				}
				//Are those supposed to be abbreviated versions? ------------------> TO ANSWER
				return false; //What for? ------------------> TO ANSWER
			}
		},

		swfPath: "/js/jplayer",
		supplied: "mp3",
		wmode: "window",
		globalVolume: true,
		smoothPlayBar: true

	})
}








//Immediately load jPlayer w/ first clip(out of many), then get the 
//next URL with the key, and play again(and then loop again)
play.onclick = function(){
	//I.e. to be used if the sound-value tag is filled(just like what I am expecting, to be relied on it seems)
	if ($('#sound-value').val() != '') {
		$("#player").jPlayer("play");
	}
}

//Use the oninput function to be able to clearTimeout.
//In other words, if user is still typing it, you will not need 
//to time it. Place it
//
//Now that this is correctly implemented, we can now use the non-simplified version to do the same exact thing
//as needed.
//

