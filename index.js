var rsync = require("readline-sync")
var score = 0
var questions = [{
  question: "Who Started HipHop/Who is the Father of HipHop? \nA. Kendrick Lamar     B.Ice Cube     C. DJ Kool Herc\n",
  answer: "C"
},
{
  question: "In which U.S city was the hip hop culture created? \nA. Chicago     B. Los Angeles     C. New York City\n",
  answer: "C"
},
{
  question: " What is the name of the first album by Jay-Z \nA. The Blueprint     B. Reasonable Doubt     C. Watch the Throne\n",
  answer: "B"
},
{
  question: "Which of the following record labels featured famous artists, such as Snoop Dogg, Dr. Dre, and Tupac? \nA. Def Jam     B. Death Row Records     C. Roc-A-Fella\n",
  answer: "B"
},
{
  question: "Which hip hop artist holds the record for the most number 1 albums in the United States, after the Beatles?\nA. Eminem     B. Jay-Z     C. Kayne West\n",
  answer: "B"
},
{
  question: "In 2003, Eminem won a Grammy Award for which song, but refused to perform it as he would have had to do a clean version? \nA. Lose Yourself     B. Rap God     C. Love the Way You Lie\n",
  answer: "A"
},
{
  question: "When was the debut album of Kanye West “The College Dropout” released? \nA. 2000    B.2004     C. 2009\n",
  answer: "A"
},
{
  question: "Which artist holds the record for the most wins in the Grammy Award for Best Rap Album? \nA. Nas     B. Eminem     C. Tyler, the Creator\n",
  answer: "B"
},
{
  question: " Kendrick Lamar featured on which 2015 Taylor Swift song? \nA. Bad Blood    B. Love Story     C. Widlest Dreams\n",
  answer: "A"
}]

function welcome() {
  var userName = rsync.question("What is your name?\n")
  console.log("Welcome", userName, "to the game -> Do You Know Hip-Hop")
}
function game(question, answer) {
  var userAnswer = rsync.question(question)
  if (userAnswer.toUpperCase === answer) {
    console.log("YAAAY You are right!!")
    score++
  } else {
    console.log("OOPS You are wrong!!")
  }
  console.log("Your current score is ", score)
};
function play() {
  for (var i = 0; i < questions.length; i++) {
    game(questions[i].question, questions[i].answer)
  }
}
welcome()
play()





