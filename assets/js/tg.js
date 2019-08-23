

// 1. Create objects for each question


var questionBank = {
    q0: {
        question: "Question 1",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 1,
    },
    q1: {
        question: "Question 2",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 2
    },
    q2: {
        question: "Question 3",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 3
    },
    q3: {
        question: "Question 4",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 3
    },
    q4: {
        question: "Question 5",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 1
    },
    q5: {
        question: "Question 6",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 2
    },
    q6: {
        question: "Question 7",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 3
    },
    q7: {
        question: "Question 8",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 3
    },
    q8: {
        question: "Question 9",
        ca: 73,
        ic1: 72,
        ic2: 71,
        ic3: 70,
        qid: 1,
    }
}

const keys = Object.keys(questionBank);

// 2. Create first timed div.

let incr = 0;
let buttonClicks = 0;
let incorrect = 0;
let correct = 0;

var questionArray = [
    questionBank.q0.question,
    questionBank.q1.question,
    questionBank.q2.question,
    questionBank.q3.question,
    questionBank.q4.question,
    questionBank.q5.question,
    questionBank.q6.question,
    questionBank.q7.question,
    questionBank.q8.question
];
var correctAnswers = [
    questionBank.q0.ca,
    questionBank.q1.ca,
    questionBank.q2.ca,
    questionBank.q3.ca,
    questionBank.q4.ca,
    questionBank.q5.ca,
    questionBank.q6.ca,
    questionBank.q7.ca,
    questionBank.q8.ca
];
var ic1s = [
    questionBank.q0.ic1,
    questionBank.q1.ic1,
    questionBank.q2.ic1,
    questionBank.q3.ic1,
    questionBank.q4.ic1,
    questionBank.q5.ic1,
    questionBank.q6.ic1,
    questionBank.q7.ic1,
    questionBank.q8.ic1
]
var ic2s = [
    questionBank.q0.ic2,
    questionBank.q1.ic2,
    questionBank.q2.ic2,
    questionBank.q3.ic2,
    questionBank.q4.ic2,
    questionBank.q5.ic2,
    questionBank.q6.ic2,
    questionBank.q7.ic2,
    questionBank.q8.ic2
]
var ic3s = [
    questionBank.q0.ic3,
    questionBank.q1.ic3,
    questionBank.q2.ic3,
    questionBank.q3.ic3,
    questionBank.q4.ic3,
    questionBank.q5.ic3,
    questionBank.q6.ic3,
    questionBank.q7.ic3,
    questionBank.q8.ic3
]

$('.nextBtn').click (function() {
    if (incr <= 7) {       
        questionRun(incr);
        $('.answer').click (function() {
            incr++
            questionRun(incr);
        });
    }
    else {
        document.write('STOP');
    }
});

function questionRun(x) {
    $('.question').text(questionArray[x]);
    $('.question').append('<button class=\"ca' + x + ' btn answer btn-primary\">');
    $('.question').append('<button class=\"ic1' + x + ' btn answer btn-primary\">');
    $('.question').append('<button class=\"ic2' + x + ' btn answer btn-primary\">');
    $('.question').append('<button class=\"ic3' + x + ' btn answer btn-primary\">');
    $('.ca'+ x).text(correctAnswers[x]);
    $('.ic1'+ x).text(ic1s[x]);
    $('.ic2'+ x).text(ic2s[x]);
    $('.ic3'+ x).text(ic3s[x]);
    x++;
    $('.answer').click (function() {
        questionRun(x);
    });
    
}
    









