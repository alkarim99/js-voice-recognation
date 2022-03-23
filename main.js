const mobil = document.querySelector('img#mobil')
const motor = document.querySelector('img#motor')
const action = document.querySelector('p#action')
const output = document.querySelector('p#output')
const jumlahMobil = document.querySelector('p#jumlahMobil')
const jumlahMotor = document.querySelector('p#jumlahMotor')
const button = document.querySelector('a#button')

button.addEventListener('click', runSpeechRecognition)


function startSpeak() {
	mobil.style.display = 'block'
	t = document.createTextNode('mobil')
	var li = document.createElement("li");
    li.appendChild(t);
	document.getElementById("myUL").appendChild(li);
}

/* JS comes here */
function runSpeechRecognition() {
	mobil.style.display = 'none';
	motor.style.display = 'none';

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.lang = 'id-ID';
    // recognition.continuous = true;

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
    	var li = document.createElement("li");
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        
        if (transcript == 'mobil') {
        	mobil.style.display = 'block';
            // var banyakMobil = []
            // banyakMobil.push('1')
        	var textMobil = 'Mobil'
        	t = document.createTextNode(textMobil)
		    li.appendChild(t);
        	document.getElementById("myULMobil").appendChild(li);
		    li.classList.add('mobil')
            banyakMobil = document.querySelectorAll('li.mobil').length;
			jumlahMobil.innerHTML = 'Jumlah mobil = '+banyakMobil
		    // banyakMobil = transcript.split(' ').length;
        } 
        else if (transcript == 'motor') {
        	motor.style.display = 'block'
            // var banyakMotor = []
            // banyakMotor.push('1')
        	var textMotor = 'Motor'
        	t = document.createTextNode(textMotor)
		    li.appendChild(t);
        	document.getElementById("myULMotor").appendChild(li);
		    li.classList.add('motor')
		    banyakMotor = document.querySelectorAll('li.motor').length;
			jumlahMotor.innerHTML = 'Jumlah motor = '+banyakMotor
            // banyakMotor = transcript.split(' ').length;
        }
    };
  
     // start recognition
     recognition.start();

}
