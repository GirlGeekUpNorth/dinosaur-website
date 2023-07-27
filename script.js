// assign "0" to the "score" variable
let score = 0

//assign the quiz elements to the quiz variable:
quiz = document.forms.Quiz.elements;

/*
//Define function:
function checkAnswers(){
    //assign 10 to the score variable
    let score = 10
    //return the score value as part of an alert in the browser
    alert ("Well done, your score was...  " + score);
  }
  */

  function validateQuestions() {
        //if any of the validation functions return `false` indicate the data is not valid.
        if (validateText() && validateNumber() && validateRadio1() && validateRadio2() && validateRadio3()){
          return true;
        }
        else {
          return false;
        }
      }
  
  //Define function:
  function checkAnswers(){
    // assign "0" to the "score" variable
    let score = 0
    //assign the quiz elements to the quiz variable:
    quiz = document.forms.Quiz.elements;
    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.largest.value;
    // Check the answer to the first question:
    if (answer1 == "Supersaurus"){
      //Add 1 to the score if the user was correct
      score = score + 1;
    }
    // Add code here to check the answers to the rest of your questions in the same way
    answer2 = quiz.period.value;
    // Check the answer to the second question:
    if (answer2 == "Cretaceous"){
    //Add 1 to the score if the user was correct
    score = score + 1;
    }
    
    //display the score variable in an alert:
    alert ('Well done, your score was... ' + score);
  }




  
/*
  //Define function:
  function checkAnswers2(){
    // assign "0" to the "score" variable
    var score = 0
    //assign the quiz elements to the quiz variable:
    quiz = document.forms.Quiz.elements;
    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.growth.value;
      // Check the answer to the first question:
      if (answer1 == "70%"){
        //Add 1 to the score if the user was correct
        score = score + 1;
      }
    // Add code here to check the answers to the rest of your questions in the same way
    //assign the answer to the question to the answer1 variable:
    answer2 = quiz.talent.value;
    // Check the answer to the first question:
    if (answer2 == 50){
    //Add 1 to the score if the user was correct
      score = score + 1;
}
      
    //display the score variable in an alert:
    alert ('Well done, your score was... ' + score);
  }
  */