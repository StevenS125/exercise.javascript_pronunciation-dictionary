// returns a list of strings representative of the Phonemes of 
// this word. Indices of the respective list should be indicative of their order of annunciation.
let result = [];

class Word{
    constructor(word){
        word = word.toUpperCase();
        this.word = word;
		// this.index = words.indexOf(this.word);
		console.log(word)
	}


getPronunciation = (line) => {
	allLines.forEach((line) => {
		let searchedWord = "donut"

		if (line.toLowerCase().search(searchedWord) >= 0) {
		console.log(line.toLowerCase().split('program')[1].trim().toUpperCase())
		console.log(line)
		
		}
	});
}

// Prompt to set our word thru constructor
setWord(){
    let word;
    while (word==null)
    word = prompt("Please enter a new word");
	this.word = word.toUpperCase();
	console.log(word)
}

}


getWords =(evt) => {
		//Retrieve the first (and only!) File from the FileList object
		let file = evt.target.files[0];
		const reader = new FileReader();
		if (file) {
		reader.onload = (event) => {
			const file = event.target.result;
			const allLines = file.split(/\r\n|\n/);

			allLines.forEach((line) => {
				result.push(line)
			})
		};

	
		reader.onerror = (event) => {
			alert(event.target.error.name);
		};
	
		reader.readAsText(file);
		}
	}

	word = new Word("");




	let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', getWords, false);


