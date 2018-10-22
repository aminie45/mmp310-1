const quiz = [
    {
        question: "What language are you most comfortable with?",
        answers: [
            {src:"images/htmlLogo.png", score: 1},
            {src:"images/pythonLogo.png", score: 2},
            {src:"images/javaLogo.png", score: 3},
            {src:"images/swiftLogo.png", score: 4},
        ]
    },
    {
        question: "What type of device do you use to code?",
        answers: [
            {src:"images/appleLogo.png", score: 4},
            {src:"images/LenovoLogo.png", score: 1},
            {src:"images/windowsLogo.png", score: 3},
            {src:"images/HPLogo.png", score: 2},
        ]
    },
    {
        question: "What is your prefered browser?",
        answers: [
            {src:"images/chromeLogo.png", score: 4},
            {src:"images/safariLogo.png", score: 2},
            {src:"images/firefoxLogo.png", score: 3},
            {src:"images/ieLogo.png", score: 1},
        ]
    }
];

const container = document.getElementById('quiz');

for (let i = 0; i < quiz.length; i++) {
	const q = quiz[i];
    
	const questionDiv = document.createElement('div');
	questionDiv.classList.add('question');
	
	const h3 = document.createElement('h3');
	h3.textContent = q.question;
	questionDiv.appendChild(h3);
	
	const answer = document.createElement('div');
	answer.classList.add('answer');
	questionDiv.appendChild(answer);
	
	for (let j = 0; j < q.answers.length; j++) {
		const a = q.answers[j];
		const img = new Image();
		img.src = a.src;
		answer.appendChild(img);
		
		img.onclick = function() {
			q.score = a.score;
		};
	}
	// add to container
	container.appendChild(questionDiv);
}
    
    


const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += quiz[i].score;
	}
	const response = document.getElementById('result');
	if (score >= 3) {
		response.textContent = "You should become a teacher.";
	} else if (score <= 6) {
		response.textContent = "You should work at an established company.";
	}else if (score <= 9) {
		response.textContent = "You should work at a startup.";
	} else if (score <= 12) {
		response.textContent = "You should become a hacker.";
	}
};



















