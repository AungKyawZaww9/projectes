const quizdata = [
    {
       question:"What does CSS stand for?",
       a:"Central Style Sheet",
       b:"Cascading Style Sheet",
       c:"Csscading Simple Sheets",
       d:"Century System Software",
       e:"Control Style Sheet",
       correct:"b",
    },

    {
        question:"What does HTML stand for?",
        a:"Hypertext Marketup Language",
        b:"Hypertext Marketdown Language",
        c:"Hypertext Machine Language",
        d:"Hypertext Technology Modern Language",
        e:"Hypertext Market Language",
        correct:"a",
     },

     {
        question:"What year was Javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the effect",
        correct:"b",
     },

     {
        question:"What language runs in a browser?",
        a:"java",
        b:"C",
        c:"Python",
        d:"Javascript",
        e:"Php",
        correct:"d",
     }
];


// console.log(quizdata[0].question);
// console.log(quizdata);

// UI

const quiz = document.getElementById('quiz');
// console.log(quiz);
const question = document.getElementById('question');
// console.log(question);

const answerels = document.querySelectorAll('.answer');
// console.log(answers);

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
// console.log(a_text);

const submitbtn = document.getElementById('submit');


let currentquiz = 1;
let score = 0;


function loadquiz(){

    answerreject();
    const currentquizdata = quizdata[currentquiz];
    // console.log(currentquizdata);

    question.innerHTML = currentquizdata.question;
    a_text.innerHTML = currentquizdata.a;
    b_text.innerHTML = currentquizdata.b;
    c_text.innerHTML = currentquizdata.c;
    d_text.innerHTML = currentquizdata.d;
    e_text.innerHTML = currentquizdata.e;
}

loadquiz();

function answerreject(){
    answerels.forEach((answerel)=>answerel.checked = false);
}

function getselected(){
    let answer;
    answerels.forEach((answerel)=>{
        // console.log(answerel);

        if(answerel.checked){
            answer = answerel.id;
        }
    });
    return answer;

}




submitbtn.addEventListener('click',()=>{
    // console.log("hey");
    // console.log(getselected());

    let answer = getselected();

    if(answer){
        
        if(answer === quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;

        if(currentquiz < quizdata.length){
            loadquiz();
        }else{
            quiz.innerHTML = `
            <h2>You answer correct at ( ${score} / ${quizdata.length} ) question</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }

    }

});