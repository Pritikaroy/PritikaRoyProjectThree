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

gritApp.firstSentence = {
    coddleYouUp: {
        perseverance: (name) => {
            return `test1 ${name}`
        },
        passion: (name) => {
            return `test2 ${name}`
        }
    },
    toughYouUp: {
        perseverance: (name) => {
            return `test1 ${name}`
        },
        passion: (name) => {
            return `test2 ${name}`
        }
    },
    oprahYouUp: {
        perseverance: (name) => {
            return `test1 ${name}`
        },
        passion: (name) => {
            return `test2 ${name}`
        }
    },
};

gritApp.gritTalk = {
    coddleYouUp: {
        resilience: [
            'Resilience is very often the factor which leads some people to overcome immense obstacles to become successful.',
        ],

        passion: [
            'Passion is very often the factor which leads some people to wake up full charged everyday to pursue their chosen career',
        ]
    },
    
    toughYouUp: {
        resilience: [
            'Develop a positive self image.Everything starts in the mind – resilient people think well of themselves and see themselves in a positive way.',
        ],

        passion: [
            'Do you love to swim and bike? Then think about training for a triathlon. If your heart is in it, your grit will intensify, and you\'ll be much more likely to succeed. ',
        ]    
    },

    oprahYouUp: {
        resilience: [
            'See the good. We’ve all heard the \‘glass half full\’ mentality – resilient people tend to see stressful events or crises as temporary or even as opportunities to learn and grow, rather than as unbearable problems.',
        ],

        passion: [
            'We often focus on the perseverance part of grit, as though being gritty means never changing course. However, it\'s just as crucial that we find a passion that inspires us—one that\'s worth our consistent investment of time and energy. ',
        ]    
    }
};

// Stretch goal:
// gritApp.lastSentence = {
//     coddleYouUp: {
//         gif:``
//     },
//     toughYouUp: {

//     },
//     oprahYouUp: {

//     },
// }

// Listen for submit user name
gritApp.gritTalk = () => {
    $('.userName').on('submit', function(e){
        // this prevent the default behaviour of the form submit, which is page refresh
        e.preventDefault();

    // save user info
        gritApp.userName = $('#name').val();
        $('.needSomeGrit').html(`${gritApp.userName} What kind of grit do you need today?`);
        
        gritApp.changeQuestions('.userName', '.userReasonForm');
    });

    //listen for submit of grit vibe
    $('.userReasonForm').on('submit', function(e){
        e.preventDefault();
        
        console.log('user has entered their vibe!')
        //save reason
        gritApp.userReason = $('input[name=reason]:checked').val();
        
        gritApp.changeQuestions('.userReasonForm', '.userVibeForm');
        
    });

    $('.userVibeForm').on('submit', function(e){
        e.preventDefault();
        
        //save user style
        gritApp.userVibe = $('input[name=reason]:checked').val();
    })
};

// toggle to show first question
gritApp.changeQuestions = (currentQuestionClassName, nextQuestionClassName) => {

    $(currentQuestionClassName).removeClass("show");
    $(currentQuestionClassName).addClass("hide");
    $(nextQuestionClassName).removeClass("hide");
    $(nextQuestionClassName).addClass("show");
};






//IFFY - Immediately-Invoked Function Expression

$(document).ready(()=> {
    
    gritApp.gritTalk();
    $("userNameSubmit").submit(function(){
        $("userName").toggle();
    })
    
});





















