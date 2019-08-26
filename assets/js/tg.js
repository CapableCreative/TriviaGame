

// 1. Create objects for each question


var questionBank = {
    q0: {
        question: "Q1: What country did 'M.U.S.C.L.E. come from originally?",
        ca: "Japan",
        ic1: "China",
        ic2: "Mexico",
        ic3: "United States of America",
        qid: 1,
    },
    q1: {
        question: "Q2: What was the name of the the villainous leader?",
        ca: "Buffalo Bill",
        ic1: "Donnie Darko",
        ic2: "Bloodsport",
        ic3: "Wild Bison",
        qid: 2
    },
    q2: {
        question: "Q3: What is the Japanese name for M.U.S.C.L.E.?",
        ca: "Kinnokuman",
        ic1: "Smack-Smack-BLAMMO!",
        ic2: "One Punch Man",
        ic3: "Arny Armstrong",
        qid: 3
    },
    q3: {
        question: "Q4: What is Buffalo Bill's gang called?",
        ca: "The Cosmic Crushers",
        ic1: "Legion of Doom",
        ic2: "Cloaks of Midnight",
        ic3: "Slendermen",
        qid: 3
    },
    q4: {
        question: "Q5: Which licensed products DID NOT spin out of the M.U.S.C.L.E. line of toys?",
        ca: "Live Action Movie",
        ic1: "Cartoon",
        ic2: "Nintendo Entertainment System Game",
        ic3: "A generation of nerds",
        qid: 1
    },
    q5: {
        question: "Q6: Which American toy company produced the M.U.S.C.L.E. toys?",
        ca: "Mattel",
        ic1: "Hasbro",
        ic2: "Kenner",
        ic3: "Blackwater",
        qid: 2
    },
    q6: {
        question: "Q7: What does M.U.S.C.L.E. stand for?",
        ca: "Millions of Unusual Small Creatures Lurking Everywhere",
        ic1: "Miles Usually Slaps Carl Lightly into Euphoria",
        ic2: "Millions of Ultimately Stupid Cows Licking Everyone",
        ic3: "My Ugly Sister Collects Little Elephants",
        qid: 3
    },
    q7: {
        question: "Q8: What color did M.U.S.C.L.E. figures NOT come in?",
        ca: "Brown",
        ic1: "Green",
        ic2: "Purple",
        ic3: "Flesh/Pink",
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
    $('.ca').css('background-color','green');  
    questionRun(incr++); 

   // $('.answer').click (function() {
   //     incr++
   //     questionRun(incr);
   // });
    setInterval(function(){ questionRun(incr++); }, 5000);
});

function questionRun(x) {
    if (x <= 8) {
        $('.question').text(questionArray[x]);
        $('.question').append('<button class=\"ca' + x + ' btn ca answer btn-primary\">');
        $('.question').append('<button class=\"ic1' + x + ' btn ic1 answer btn-primary\">');
        $('.question').append('<button class=\"ic2' + x + ' btn ic2 answer btn-primary\">');
        $('.question').append('<button class=\"ic3' + x + ' btn ic3 answer btn-primary\">');

        shuffle();

        $('.instructText').css('display','none');
        $('.nextBtn').css('display','none');
        $('.ca'+ x).text(correctAnswers[x]);
        $('.ic1'+ x).text(ic1s[x]);
        $('.ic2'+ x).text(ic2s[x]);
        $('.ic3'+ x).text(ic3s[x]);
        $('.ca').click (function() {
            correct++;
        $('.btn.ca').css('background','green');    
        $('.btn.ca').addClass('correctX');      
        $('.btn.ic1,.btn.ic2,.btn.ic3').css('background','#000');
        $('.btn.ic1,.btn.ic2,.btn.ic3').addClass('wrongX');      
        });
        $('.ic1,.ic2,.ic3').click (function() {
            incorrect++;
            $('.btn.ca').css('background','green');
            $('.btn.ca').addClass('correctY'); 
            $('.btn.ic1,.btn.ic2,.btn.ic3').css('background','#000');
            $('.btn.ic1,.btn.ic2,.btn.ic3').addClass('wrongX');
        });
        x++;
    }

    if (x > 8) {
        if(incorrect >= 4) {
            $('.loser').css('display','block');
            $('.correctQuestion').text('Total Correct Answers: ' + correct);
            $('.incorrectQuestion').text('Total Incorrect Answers: ' + incorrect);
            
        }
        else {
            $('.winner').css('display','block');
            $('.correctQuestion').text('Total Correct Answers: ' + correct);
            $('.incorrectQuestion').text('Total Incorrect Answers: ' + incorrect);
        } 

    }
        function shuffle() {
            var quest = document.querySelector('quest');
            for (var i = quest.children.length; i >= 0; i--) {
            quest.appendChild(quest.children[Math.random() * i | 0]);
        }
    }
   
 /*   $('.answer').click (function() {
        if (x <= 8) {
            questionRun(x);  
            if((x > 7) && (incorrect >= 4)) {
                $('.loser').css('display','block');
                $('.correctQuestion').text('Total Correct Answers: ' + correct);
                $('.incorrectQuestion').text('Total Incorrect Answers: ' + incorrect);
                
            }
            else if((x > 7) && (incorrect < 4)) {
                $('.winner').css('display','block');
                $('.correctQuestion').text('Total Correct Answers: ' + correct);
                $('.incorrectQuestion').text('Total Incorrect Answers: ' + incorrect);
            } 

        }
    }); */ 
}
    









