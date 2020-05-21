let cat;
let difficulty;
let search = document.getElementById("search").addEventListener("click", () => searchq());
let listOfQ=[];
let jsonList=[];
//function to add questions when they are serached
function searchq(){
    document.getElementById("availableq").innerHTML="";
    let element2;
  cat=document.getElementById("category").value;
  difficulty=document.getElementById("difficulty").value;
  let questionsback = new XMLHttpRequest();
  console.log(cat);
  let requeststring= "/questions?"+"category="+`${cat}`+"&"+"difficulty="+`${difficulty}`;
  console.log(requeststring);
      questionsback.open("GET", requeststring);
      questionsback.setRequestHeader("Accept", "application/json");
      questionsback.acceptType='json'
      questionsback.send();
      questionsback.onload = function() {
            let responseObj = JSON.parse(questionsback.response);
            console.log(responseObj.questions);
            console.log("test");

            document.getElementById("availableq").innerHTML=""


            if(responseObj.questions.length==0){
                document.getElementById("availableq").innerHTML="No results, try a different query"
            }




            //adds the buttons to the questions
            for(let i=0; i<responseObj.questions.length; i++){
              let addbutton=document.createElement("BUTTON");
              let addbuttontext=document.createTextNode("Add");
              let tempstring="addbutton"+`${i}`
              addbutton.appendChild(addbuttontext);
              addbutton.setAttribute('id',`${tempstring}`);
              addbutton.setAttribute("class", "button");
              document.getElementById("availableq").appendChild(addbutton);
              let element=document.getElementById(`${tempstring}`);





              //defines action for when the add questinos button is pressed
              element.onclick=function(){
                check=0;
                for(let j=0; j<listOfQ.length; j++){
                  if(`${responseObj.questions[i].question}`==listOfQ[j]){
                    check=1;
                  }
                }
                if(check==0){
                let newlink= document.getElementById("qlink"+`${i}`);
                console.log(newlink);
                let link= document.createElement('a');
                link.setAttribute('href', `${newlink}`);
                let linktext=document.createTextNode(`${responseObj.questions[i].question}`);
                link.appendChild(linktext);
                link.setAttribute('id', "qintest"+`${responseObj.questions[i]._id}`);
                let removequestionbutton=document.createElement("BUTTON");
              let removequestionbuttontext=  document.createTextNode("Remove");
              let removequestionbuttonid="remove"+`${responseObj.questions[i].question}`
                removequestionbutton.setAttribute('id',`${removequestionbuttonid}`);
                removequestionbutton.setAttribute('class',"button");
                removequestionbutton.append(removequestionbuttontext);


                document.getElementById("questionsinquiz").appendChild(removequestionbutton);
                document.getElementById("questionsinquiz").appendChild(link);
                linebreak = document.createElement("br");
                document.getElementById("qintest"+`${responseObj.questions[i]._id}`).appendChild(linebreak);
                listOfQ.push(`${responseObj.questions[i].question}`);
                jsonList.push(responseObj.questions[i]);
                console.log(jsonList);
                let element2=document.getElementById(`${removequestionbuttonid}`);


                //makes it possible to remove the questions
                element2.onclick=function(){
                  console.log("removed the question");

                  let elstring="qintest"+`${responseObj.questions[i]._id}`
                  let el=document.getElementById(`${elstring}`);

                  el.remove();
                  let e2=document.getElementById(`${removequestionbuttonid}`);
                  e2.remove();
                  for(let k=0; k<listOfQ.length; k++){
                  console.log(listOfQ[k]);
                  console.log(`${linktext}`);
                  if(listOfQ[k]==`${responseObj.questions[i].question}`){
                    listOfQ.splice(k,1);
                    console.log(listOfQ);
                    jsonList.splice(k,1);
                    console.log(jsonList);
                    break;
                  }
                  }

                  }

              }


              }


              //adds links to the questions
              let qlink=document.createElement('a');
              let qlinktext=document.createTextNode(`${responseObj.questions[i].question}`);
              let qlinkstirng="/questions/"+`${responseObj.questions[i]._id}`
              console.log(qlinkstirng);
              qlink.setAttribute('href',`${qlinkstirng}`);
              qlink.setAttribute('id',"qlink"+`${i}`);
              qlink.appendChild(qlinktext);
              document.getElementById("availableq").appendChild(qlink);
              linebreak = document.createElement("br");
              document.getElementById("availableq").appendChild(linebreak);
            }
          }





}






//defines the action when the save button is pressed
let savebutton=document.getElementById("save");
savebutton.onclick=function(){
  if(listOfQ.length<=0){
alert('Need to add at least 1 question');
  }
  else{
  let createname=document.getElementById("namer").value;
  let tager=document.getElementById("tags").value;
  tager=tager.split(/[ ,]+/);
  let quiz={
    questions:jsonList,
    creatorname:createname,
    tags:tager
  };
  let finalquiz=JSON.stringify(quiz);
  console.log("test");
  let xhr= new XMLHttpRequest();
  xhr.open("POST", '/quizzes');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(finalquiz);


  if(createname!=""&&tager!=""){
    xhr1=new XMLHttpRequest();
    xhr1.open("GET", '/quizztemp');
    xhr1.setRequestHeader('Content-type', 'text/plain; charset=utf-8');
    xhr1.send(null);
    xhr1.onreadystatechange=function(){
      if (xhr1.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
          if (xhr1.status == 200) {
          let x=xhr1.responseText;
          let url="/quiz"
          let fullurl=url+x;
          console.log(fullurl);
          window.location.href=fullurl;

          }
          else if (xhr1.status == 400) {
             alert('There was an error 400');
          }
          else {
              alert('something else other than 200 was returned');
          }
       }
    }



}
if(createname!=""&&tager==""){
alert("you dont have tags");
}
if(createname==''&&tager!=''){
  alert("you dont have a name");
}
if(createname==""&&tager==""){
  alert("you dont have a tag or a name");
}
}
}
