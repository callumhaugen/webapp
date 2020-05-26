let Questionin={
question:"",
correct_answer: "",
incorrect_answers:[],
category:"",
difficulty:""
}

let element=document.getElementById("save");
element.onclick=function(){

let UserQuestion=document.getElementById("question").value;
let UserDifficulty=document.getElementById("difficulty ").value;
let UserAns=document.getElementById("Correct Answer").value;
let UserWrong1=document.getElementById("Incorrect1").value;
let UserWrong2=document.getElementById("Incorrect2").value;
let UserWrong3=document.getElementById("Incorrect3").value;


Questionin.question=UserQuestion;
Questionin.category="User Generated Content";
Questionin.correct_answer=UserAns;
Questionin.difficulty=UserDifficulty;
Questionin.incorrect_answers[0]=UserWrong1;
Questionin.incorrect_answers[1]=UserWrong2;
Questionin.incorrect_answers[2]=UserWrong3;
console.log(Questionin);
if(Questionin.difficulty==""||(Questionin.difficulty!="medium"&&Questionin.difficulty!="hard"&&Questionin.difficulty!="easy")){
  Questionin.difficulty="medium";
}
let answerOut=JSON.stringify(Questionin);
let xhr= new XMLHttpRequest();
xhr.open("POST", '/createquestion');
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(answerOut);
}
