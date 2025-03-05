var health = 5;
var selectedWord = ""; 
var words = [ 
    "BLAST", "CRIMP", "DROWN", "FLUTE", "GRAPH", "HASTY", "JUMPS", "KNIFE", "CHUMP", "MOUND",
    "NORTH", "PLANK", "QUIRK", "ROAST", "SWAMP", "TREND", "BIRTH", "WHISK", "ZESTY", "BRICK",
    "CHORD", "DEPTH", "FROST", "BRUTE", "HOUND", "JOINT", "KNEEL", "LODGE", "LOVER", "NYMPH",
    "ORBIT", "PRIZE", "QUASH", "RIFLE", "SCORN", "THUMP", "UNDER", "VAULT", "WRECK", "MERIT",
    "YODEL", "ZEBRA", "AGILE", "BOUND", "CRISP", "DOUSE", "EAGLE", "FAINT", "GIANT", "HUMOR"
];

function setupGame() {
    selectedWord = words[Math.floor(Math.random() * 50)]; 
    console.log("Chosen Word: " + selectedWord); // Shows in console
}

function checkWord() {
    if (health <= 0) return;

    let rowIndex = 5 - health;  

    let userAnswer = prompt("Enter a word: ");
	
	if (userAnswer === null){
		alert("You pressed cancel :( . Input again");
		return;
	}
	
	userAnswer = userAnswer.trim();
	
	if (userAnswer === " "){
		alert("Invalid input. Please enter a 5-letter word.");
		return;
	}
	
	userAnswer = userAnswer.toUpperCase();

    if (userAnswer.length < 5 || userAnswer > 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let box0 = document.getElementById(`r-${rowIndex}-0`);
    let box1 = document.getElementById(`r-${rowIndex}-1`);
    let box2 = document.getElementById(`r-${rowIndex}-2`);
    let box3 = document.getElementById(`r-${rowIndex}-3`);
    let box4 = document.getElementById(`r-${rowIndex}-4`);

    box0.innerText = userAnswer[0];
    box1.innerText = userAnswer[1];
    box2.innerText = userAnswer[2];
    box3.innerText = userAnswer[3];
    box4.innerText = userAnswer[4];

    const animation_duration = 500;

    // Row 1
    if (userAnswer[0] == selectedWord[0]) {
        box0.style.backgroundColor = "#6AAA64";
    } 
    else if (selectedWord.includes(userAnswer[0])) {
        box0.style.backgroundColor = "#C9B458"; 
    } 
    else {
        box0.style.backgroundColor = "#787C7E";
    }
    box0.classList.add('animated');
    box0.style.animationDelay = `${0 * animation_duration / 2}ms`;

    // Row 2
    if (userAnswer[1] == selectedWord[1]) {
        box1.style.backgroundColor = "#6AAA64";
    } 
    else if (selectedWord.includes(userAnswer[1])) {
        box1.style.backgroundColor = "#C9B458";
    } 
    else {
        box1.style.backgroundColor = "#787C7E";
    }
    box1.classList.add('animated');
    box1.style.animationDelay = `${1 * animation_duration / 2}ms`;

    // Row 3
    if (userAnswer[2] == selectedWord[2]) {
        box2.style.backgroundColor = "#6AAA64";
    } 
    else if (selectedWord.includes(userAnswer[2])) {
        box2.style.backgroundColor = "#C9B458";
    } 
    else {
        box2.style.backgroundColor = "#787C7E";
    }
    box2.classList.add('animated');
    box2.style.animationDelay = `${2 * animation_duration / 2}ms`;

    // Row 4
    if (userAnswer[3] == selectedWord[3]) {
        box3.style.backgroundColor = "#6AAA64";
    } 
    else if (selectedWord.includes(userAnswer[3])) {
        box3.style.backgroundColor = "#C9B458";
    } 
    else {
        box3.style.backgroundColor = "#787C7E";
    }
    box3.classList.add('animated');
    box3.style.animationDelay = `${3 * animation_duration / 2}ms`;

    // Row 5
    if (userAnswer[4] == selectedWord[4]) {
        box4.style.backgroundColor = "#6AAA64";
    } 
    else if (selectedWord.includes(userAnswer[4])) {
        box4.style.backgroundColor = "#C9B458";
    } 
    else {
        box4.style.backgroundColor = "#787C7E";
    }
    box4.classList.add('animated');
    box4.style.animationDelay = `${4 * animation_duration / 2}ms`;
    
    health--; 
	
	

    if (userAnswer == selectedWord) {
        alert("Congrats! You guessed it correctly.\n\nReload the page to play again!");
        health = -1;
        return;
		
    }
    if (health == 0) {
        alert(`Nice try! The word was ${selectedWord}.\n\nReload the page to try again!`);
    }
}
