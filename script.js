// Pseudo Code for Project3:

//     //save user info, toggle classes to show first question.
//     //listen for submit of grit style(userReasonSubmit)
//     //save reason
//     //toggle class to hide
//     //toggle next question to show


//     (userStyleSubmit)
// //save user style
// //generate array of choices
// //make copy of all options to send to randomize splice function?
// //create empty array to collect the final quotes


// Stretch Goals:
//         //listen for click on new choice - hide results and show userStyleForm again
//         //listen for click on reset button and refresh the page
//         //listen for click on save button
//         // Adding GIF

const gritApp = {} ;

// Stretch goal:
gritApp.Giffy = {
    coddleYouUp: {
        gif:`src ='styles/assets/youGotThis.gif' alt="a man pepping himself in the mirror"`
    },
    
    toughYouUp: {
        gif: `src ='styles/assets/shakeItOff.gif' alt="a man shaking it off"`
    },

    oprahYouUp: {
        gif: `src ='styles/assets/oprah.gif' alt="oprah being motivational"`
    },
};

gritApp.firstSentence = {
    coddleYouUp: {
        perseverance: (name) => {
            return `Why are you second guessing your tenacity, ${name}?`
        },
        passion: (name) => {
            return `Why are you second guessing your zealous nature, ${name}?`
        }
    },
    toughYouUp: {
        perseverance: (name) => {
            return `Why are you second guessing your determination, ${name}?`
        },
        passion: (name) => {
            return `Why are you second guessing your fervent nature, ${name}?`
        }
    },
    oprahYouUp: {
        perseverance: (name) => {
            return `Why are you second guessing your determination, ${name}?`
        },
        passion: (name) => {
            return `Why are you second guessing your heartfelt nature, ${name}?`
        }
    },
};

gritApp.gritTalks = {
    coddleYouUp: {
        perseverance: [
            'Resilience is very often the factor which leads some people to overcome immense obstacles to become successful.',
        ],

        passion: [
            'Passion is very often the factor which leads some people to wake up full charged everyday to pursue their chosen career',
        ]
    },
    
    toughYouUp: {
        perseverance: [
            'Develop a positive self image.Everything starts in the mind – resilient people think well of themselves and see themselves in a positive way.',
        ],

        passion: [
            'Do you love to swim and bike? Then think about training for a triathlon. If your heart is in it, your grit will intensify, and you\'ll be much more likely to succeed. ',
        ]    
    },

    oprahYouUp: {
        perseverance: [
            'See the good. We’ve all heard the \‘glass half full\’ mentality – resilient people tend to see stressful events or crises as temporary or even as opportunities to learn and grow, rather than as unbearable problems.',
        ],

        passion: [
            'We often focus on the perseverance part of grit, as though being gritty means never changing course. However, it\'s just as crucial that we find a passion that inspires us—one that\'s worth our consistent investment of time and energy. ',
        ]    
    }
};


// Listen for submit user name
gritApp.gritTalk = () => {
    $('.userName').on('submit', function(e){
        // this prevent the default behaviour of the form submit, which is page refresh
        e.preventDefault();

    // save user info
        gritApp.userName = $('#name').val();
        $('.needSomeGrit').html(`${gritApp.userName} , What kind of grit do you need today?`);
        
        gritApp.changeQuestions('.userName', '.userReasonForm');
    });

    //listen for submit of grit vibe
    $('.userReasonForm').on('submit', function(e){
        e.preventDefault();
        
        //save reason
        gritApp.userReason = $('input[name=reason]:checked').val();
        

    
        gritApp.changeQuestions('.userReasonForm', '.userVibeForm');
        
    });

    $('.userVibeForm').on('submit', function(e){
        e.preventDefault();
        
        //save user style
        gritApp.userVibe = $('input[name=vibe]:checked').val();
        
        // console.log(gritApp.userReason);

        // console.log(gritApp.userVibe);


        // console.log(gritApp.gritTalks[gritApp.userVibe][gritApp.userReason]);
        
        // $(".vibeContainer").html('Hello')
        
        let introSentence = gritApp.firstSentence[gritApp.userVibe][gritApp.userReason] (gritApp.userName);
        let finalPara = gritApp.gritTalks[gritApp.userVibe][gritApp.userReason];
         
        let gritParagraph = `<p>${introSentence}</p> <p>${finalPara}</p>`

        const finalVideo = `<img ${gritApp.Giffy[gritApp.userVibe].gif}>`

        console.log(gritParagraph);
        

        
        gritApp.changeQuestions('.userVibeForm', '.resultsWrapper');
        
        
        $('.vibePara').append(gritParagraph);
        $('.gifContainer').append(finalVideo);

        
        
        

    })
};

// toggle to show first question
gritApp.changeQuestions = (currentQuestionClassName, nextQuestionClassName) => {

    $(currentQuestionClassName).removeClass("show");
    $(currentQuestionClassName).addClass("hide");
    $(nextQuestionClassName).removeClass("hide");
    $(nextQuestionClassName).addClass("show");

};

// document.body.addEventListener('click', function (e) {
//     if (e.target.matches('css-doodle')) {
//         e.target.refresh();
//     }
// });

//IFFY - Immediately-Invoked Function Expression

$(document).ready(()=> {
    
    gritApp.gritTalk();
    $("userNameSubmit").submit(function(){
        $("userName").toggle();
    })
    
});

// Inpiration from Nash Vail - https://codepen.io/nashvail/pen/wpGgXO

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
