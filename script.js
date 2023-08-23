const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Which of the following materials is used to make dynamic random access memory (DRAM)?",
        a:"Silicon",
        b:"Indium gallium zinc oxide ",
        c:"Gallium arsenide",
        d:"All of the above",
        correct:"b",
    },

    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the following is not a type of computer memory?",
        a:"BIOS",
        b:"RAM",
        C:"ROM",
        d:"cache",
        correct: "a",
    },
    {
        question:"Lead oxide is an example of which type of battery",
        a:"primary battery",
        b:"resome battery",
        c:"secondary battery",
        d:"all of the above",
        correct: "c",
    },
    {
        question:"Which of the following is not a computer network?",
        a:"Lan",
        b:"Man",
        c:"Internet",
        d:"Interanet",
        correct: "d",

    },
    {
        question:"Which of the following is not a cloud computing service?",
        a:"Haas",
        b:"Saas",
        c:"Paas",
        d:"Daas",
        correct:"a",

    },
    {
        question:"Which of the following is not an Internet of Things (IoT) application?",
        a:"Smart homes",
        b:"Wearable devices",
        c:"Data centers",
        d:"Connected cars",
        correct:"c",
    },
    {
        question:"Which of the following is not an artificial intelligence application?",
        a:"Machine translation",
        b:"Self-driving cars",
        c:"Fraud detection",
        d:"Virtual assistants",
        correct:"a",
    },
    {
        question: "what is deficiency of vitamin A",
        a:"beri-beri",
        b:"Night blindness",
        c:"Anaemia",
        d:"Scurvy",
        correct:"b",
    },
    {
        question: "Which of the following materials is used to make organic light-emitting diode (OLED) displays?",
        a:" Polyethylene terephthalate",
        b:"Indium tin oxide",
        c:" Poly(methyl methacrylate) (PMMA)",
        d:"All of the above",
        correct:"d",
    },
    {
        question: "Which of the following materials is used to make liquid crystal displays",
        a:"Nematic liquid crystals",
        b:"Twisted nematic liquid crystals",
        c:"In-plane switching (IPS) liquid crystals",
        d:"All of the above",
        correct:"d",
    },
    {
        question: "What is the maximum voltage drop that is permitted for domestic wiring?",
        a:"2%",
        b:"4%",
        c:"6%",
        d:"8%",
        correct:"a",
    },





];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
