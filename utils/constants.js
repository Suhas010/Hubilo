import LocalizedStrings from 'react-localization';
import {config} from '../utils/config';
/**
 * For Localization Support I Have defined string Constants 
 */
let strings = new LocalizedStrings({
    
      EN:{
       header:"Hubilo Assignment Test",
       questions: "Qustion",
       finishMsg: "Congratulations! You have successfully finished test. Here is yout score card",
       correct: "Correct Annswers : ",
       wrong: "Wrong Ansers : ",
       pre: "Previous",
       next: "Next",
       finish: "Finish" 
     },
    
     MR: {
        header:"Hubilo Assignment Test",
        questions: "Qustion",
        finishMsg: "Congratulations! You have successfully finished test. Here is yout score card",
        correct: "Correct Annswers : ",
        wrong: "Wrong Ansers : ",
        pre: "Previous",
        next: "Next",
        finish: "Finish" 
     },
     HN: {
        header:"Hubilo Assignment Test",
        questions: "Qustion",
        finishMsg: "Congratulations! You have successfully finished test. Here is yout score card",
        correct: "Correct Annswers : ",
        wrong: "Wrong Ansers : ",
        pre: "Previous",
        next: "Next",
        finish: "Finish" 
     }
    });
    
    strings.setLanguage(config.lang);
    
    export default strings;