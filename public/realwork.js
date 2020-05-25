//Gets the test that is from the drop down menu
let tests = {
	"Test 1" : [{"category":"Entertainment: Television","type":"multiple","difficulty":"medium","question":"In what year did &quot;The Big Bang Theory&quot; debut on CBS?","correct_answer":"2007","incorrect_answers":["2008","2006","2009"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which city is the capital of Switzerland?","correct_answer":"Bern","incorrect_answers":["Z&uuml;rich","Frankfurt","Wien"]},{"category":"Animals","type":"multiple","difficulty":"hard","question":"How many known living species of hyenas are there?","correct_answer":"4","incorrect_answers":["8","2","6"]},{"category":"History","type":"multiple","difficulty":"hard","question":"The Battle of Hastings was fought in which year?","correct_answer":"1066","incorrect_answers":["911","1204","1420"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"hard","question":"&quot;All the Boys&quot; by Panic! At the Disco was released as a bonus track on what album?","correct_answer":"Too Weird To Live, Too Rare To Die!","incorrect_answers":["A Fever You Can&#039;t Sweat Out","Death Of A Bachelor","Vices &amp; Virtues"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"What was Daft Punk&#039;s first studio album?","correct_answer":"Homework","incorrect_answers":["Discovery","Random Access Memories","Human After All"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"How much radiation does a banana emit?","correct_answer":"0.1 Microsievert","incorrect_answers":["0.3 Microsievert","0.5 Microsievert","0.7 Microsievert"]},{"category":"Sports","type":"multiple","difficulty":"hard","question":"What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?","correct_answer":"Cristiano Ronaldo dos Santos Aveiro","incorrect_answers":["Cristiano Ronaldo los Santos Diego","Cristiano Armando Diego Ronaldo","Cristiano Luis Armando Ronaldo"]},{"category":"Animals","type":"multiple","difficulty":"medium","question":"The dish Fugu, is made from what family of fish?","correct_answer":"Pufferfish","incorrect_answers":["Bass","Salmon","Mackerel"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What are the names of the Ice Climbers in the video game Ice Climber?","correct_answer":"Popo and Nana","incorrect_answers":["Popo and Nina","Papi and Nana","Papi and Nina"]}],

	"Test 2" : [{"category":"Vehicles","type":"multiple","difficulty":"hard","question":"What was the name of the first front-wheel-drive car produced by Datsun (now Nissan)?","correct_answer":"Cherry","incorrect_answers":["Sunny","Bluebird","Skyline"]},{"category":"History","type":"multiple","difficulty":"medium","question":"America&#039;s Strategic Defense System during the Cold War was nicknamed after this famous movie.","correct_answer":"Star Wars","incorrect_answers":["Jaws","Blade Runner","Alien"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In Portal 2, the iconic character GLaDOS is turned into:","correct_answer":"A potato","incorrect_answers":["A tomato","A lemon","An apple"]},{"category":"History","type":"multiple","difficulty":"hard","question":"When did Canada leave the confederation to become their own nation?","correct_answer":"July 1st, 1867","incorrect_answers":["July 1st, 1763","July 1st, 1832","July 1st, 1902"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"The &quot;K&quot; in &quot;K-Pop&quot; stands for which word?","correct_answer":"Korean","incorrect_answers":["Kenyan","Kazakhstan","Kuwaiti"]},{"category":"History","type":"boolean","difficulty":"medium","question":"United States President Ronald Reagan was the first president to appoint a woman to the Supreme Court. ","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What is the name of the 4-armed Chaos Witch from the 2016 video game &quot;Battleborn&quot;?","correct_answer":"Orendi","incorrect_answers":["Orendoo","Oranda","Randy"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Ellie Goulding&#039;s earliest album was named?","correct_answer":"Lights","incorrect_answers":["Halcyon","Bright Lights","Halcyon Days"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Which former boy-band star released hit solo single &quot;Angels&quot; in 1997?","correct_answer":"Robbie Williams","incorrect_answers":["Justin Timberlake","Harry Styles","Gary Barlow"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"In &quot;Puella Magi Madoka Magica&quot;, what is the first name of Madoka&#039;s younger brother?","correct_answer":"Tatsuya","incorrect_answers":["Montoya","Tomohisa","Minato"]}],

	"Test 3" : [{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?","correct_answer":"Rad Mobile","incorrect_answers":["Sonic The Hedgehog","Super Mario 64","Mega Man"]},{"category":"Politics","type":"multiple","difficulty":"medium","question":"Who was the only president to not be in office in Washington D.C?","correct_answer":"George Washington","incorrect_answers":["Abraham Lincoln","Richard Nixon","Thomas Jefferson"]},{"category":"Entertainment: Books","type":"multiple","difficulty":"hard","question":"In the Harry Potter universe, who does Draco Malfoy end up marrying?","correct_answer":"Astoria Greengrass","incorrect_answers":["Pansy Parkinson","Millicent Bulstrode","Hermione Granger"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In what year was the original Sonic the Hedgehog game released?","correct_answer":"1991","incorrect_answers":["1989","1993","1995"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What is the name given to Indian food cooked over charcoal in a clay oven?","correct_answer":"Tandoori","incorrect_answers":["Biryani","Pani puri","Tiki masala"]},{"category":"Vehicles","type":"multiple","difficulty":"easy","question":"Automobiles produced by Telsa Motors operate on which form of energy?","correct_answer":"Electricity","incorrect_answers":["Gasoline","Diesel","Nuclear"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Who was featured in the song &quot;Words&quot; by Feint? ","correct_answer":"Laura Brehm","incorrect_answers":["Anna Yvette ","Danyka Nadeau","Veela"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"Leonardo Di Caprio won his first Best Actor Oscar for his performance in which film?","correct_answer":"The Revenant","incorrect_answers":["The Wolf Of Wall Street","Shutter Island","Inception"]},{"category":"Sports","type":"multiple","difficulty":"medium","question":"What year was hockey legend Wayne Gretzky born?","correct_answer":"1961","incorrect_answers":["1965","1959","1963"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"hard","question":"Which sci-fi cult films plot concerns aliens attempting to prevent humans from creating a doomsday weapon?","correct_answer":"Plan 9 from Outer Space","incorrect_answers":["The Man from Planet X","It Came from Outer Space","The Day The Earth Stood Still"]}],

	"Test 4" : [{"category":"Entertainment: Cartoon & Animations","type":"boolean","difficulty":"easy","question":"In the &quot;Shrek&quot; film franchise, Donkey is played by Eddie Murphy.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What was the character Kirby originally going to be named?","correct_answer":"Popopo","incorrect_answers":["Dedede","Waddle Dee","Prince Puff"]},{"category":"Geography","type":"multiple","difficulty":"medium","question":"Which country inside the United Kingdom does NOT appear on its flag, the Union Jack?","correct_answer":"Wales","incorrect_answers":["Scotland","Ireland","Isle of Wight"]},{"category":"Mythology","type":"multiple","difficulty":"easy","question":"Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?","correct_answer":"Jason","incorrect_answers":["Castor","Daedalus","Odysseus"]},{"category":"Animals","type":"multiple","difficulty":"medium","question":"Cashmere is the wool from which kind of animal?","correct_answer":"Goat","incorrect_answers":["Sheep","Camel","Llama"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In Halo 2, how many rounds does the M6C hold in a single magazine?","correct_answer":"12","incorrect_answers":["6","36","18"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?","correct_answer":"Doug Bradley","incorrect_answers":["Doug Jones","Doug Savant","Doug Benson"]},{"category":"Entertainment: Comics","type":"multiple","difficulty":"medium","question":"In the comics, which Sonic character took command of the Dark Legion after Luger&#039;s assassination?","correct_answer":"Lien-Da","incorrect_answers":["Kragok","Dimitri","Remington"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"In Haikyuu!!, who is not a member of Karasuno VBC?","correct_answer":"Shigeru Yahaba","incorrect_answers":["Tadashi Yamaguchi","Hisashi Kinoshita","Kazuhito Narita"]},{"category":"Entertainment: Musicals & Theatres","type":"multiple","difficulty":"medium","question":"The musical &quot;Dirty Rotten Scoundrels&quot; is set in what country?","correct_answer":"France","incorrect_answers":["USA","Germany","Sweden"]}],

	"Test 5" : [{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"What was the name of the police officer in the cartoon &quot;Top Cat&quot;?","correct_answer":"Dibble","incorrect_answers":["Barbrady","Mahoney","Murphy"]},{"category":"Animals","type":"multiple","difficulty":"easy","question":"The K\u0101k\u0101p\u014d is a large, flightless, nocturnal parrot native to which country?","correct_answer":"New Zealand","incorrect_answers":["South Africa","Australia","Madagascar"]},{"category":"Entertainment: Musicals & Theatres","type":"multiple","difficulty":"medium","question":"In which Shakespeare play does the character Marcellus say, &quot;Something is rotten in the state of Denmark&quot;?","correct_answer":"Hamlet","incorrect_answers":["Macbeth","King Lear","Twelfth Night"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"hard","question":"Which M83 album is the song &quot;Midnight City&quot; featured in?","correct_answer":"Hurry Up, We&#039;re Dreaming","incorrect_answers":["Saturdays = Youth","Before the Dawn Heals Us","Junk"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Which of these songs by Skrillex features Fatman Scoop as a side artist?","correct_answer":"Recess","incorrect_answers":["All is Fair in Love and Brostep","Rock N Roll (Will Take You to the Mountain)","Scary Monsters and Nice Sprites"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Generally, which component of a computer draws the most power?","correct_answer":"Video Card","incorrect_answers":["Hard Drive","Processor","Power Supply"]},{"category":"Vehicles","type":"multiple","difficulty":"medium","question":"Which supercar company is from Sweden?","correct_answer":"Koenigsegg","incorrect_answers":["Bugatti","Lamborghini","McLaren"]},{"category":"Geography","type":"multiple","difficulty":"hard","question":"What is the area of Vatican City?","correct_answer":"0.44km^2","incorrect_answers":["0.10km^2","0.86km^2","12.00km^2"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"Final Fantasy VI was originally released outside Japan under what name?","correct_answer":"Final Fantasy III","incorrect_answers":["Final Fantasy VI","Final Fantasy V","Final Fantasy II"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?","correct_answer":"Shao Kahn","incorrect_answers":["Liu Kang","Shang Tsung","Raiden"]}],

	"Test 6" : [{"category":"Animals","type":"multiple","difficulty":"medium","question":"What color\/colour is a polar bear&#039;s skin?","correct_answer":"Black","incorrect_answers":["White","Pink","Green"]},{"category":"Celebrities","type":"multiple","difficulty":"easy","question":"By what name is Carlos Estevez better known? ","correct_answer":"Charlie Sheen","incorrect_answers":["Ricky Martin","Bruno Mars","Joaquin Phoenix"]},{"category":"Entertainment: Books","type":"multiple","difficulty":"medium","question":"What was the pen name of novelist, Mary Ann Evans?","correct_answer":"George Eliot","incorrect_answers":["George Orwell","George Bernard Shaw","George Saunders"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?","correct_answer":"White","incorrect_answers":["Black","Blue","Yellow"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In Left 4 Dead, what is the name of the Special Infected that is unplayable in Versus mode?","correct_answer":"The Witch","incorrect_answers":["The Tank","The Smoker","The Spitter"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What is the full name of the protagonist from the SNES game Clock Tower?","correct_answer":"Jennifer Simpson","incorrect_answers":["Jennifer Barrows","Jennifer Cartwright","Jennifer Maxwell"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"Which of the following is the oldest of these computers by release date?","correct_answer":"TRS-80","incorrect_answers":["Commodore 64","ZX Spectrum","Apple 3"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"When was &quot;System Shock&quot; released?","correct_answer":"1994","incorrect_answers":["1995","2000","1998"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"What vulnerability ranked #1 on the OWASP Top 10 in 2013?","correct_answer":"Injection ","incorrect_answers":["Broken Authentication","Cross-Site Scripting","Insecure Direct Object References"]},{"category":"Mythology","type":"multiple","difficulty":"easy","question":"What mythological creatures have women&#039;s faces and vultures&#039; bodies?","correct_answer":"Harpies","incorrect_answers":["Mermaids","Nymph","Lilith"]}]
}












function checkDropdown() {
  let x = document.getElementById("dropdown").value;
  if (x == 1) {
    main('Test 1');
  } else if (x == 2) {
    main('Test 2');
  } else if (x == 3) {
    main('Test 3')
  } else if (x == 4) {
    main('Test 4')
  } else if (x == 5) {
    main('Test 5');
  } else if (x == 6) {
    main('Test 6');
  }

}

document.addEventListener('DOMContentLoaded', function() {
   getRandomTest();
}, false);
document.getElementById('google').style.display="none";
//Gets a random test using a XMLHttpRequest
function getRandomTest() {
let responseObj;
let url=window.location.href;
console.log(window.location.href);
let lastUrl=url.split("/");
let pos=lastUrl.indexOf("playquiz");
let result=lastUrl[pos+1];
console.log(result);
  let randomTest = new XMLHttpRequest();
	let finalURL="/quizJson/"+`${result}`;
	console.log(finalURL);
  randomTest.open("GET", `${finalURL}`);
  randomTest.responseType = 'json';
  randomTest.send();
  if (randomTest.status != 0) {
    //Sends alert if there is an error
    alert(`Error ${randomTest.status}`);
  }

  else {
    randomTest.onload = function() {
      console.log(randomTest.response[0].questions);



      mainForRandom(randomTest.response[0].questions);


    }
  }

}

//function to do most of the work on load
function main(x) {
  document.getElementById("score").innerHTML = "";
  //makes arrays for the questions, wrong answers, and correct answers
  let correctAnswers = tests[x].map(rightAnswerGen);
  let wrongAnswers = tests[x].map(answerGen);
  let answers = answerObj(correctAnswers, wrongAnswers);
  let questions = tests[x].map(questionGen);
  document.getElementById("answersOnPage").innerHTML = "";

  //displays questions on the page
  for (let i = 0; i < questions.length; i++) {
    let q = document.createElement("p");
    let q1 = document.createTextNode(`${questions[i]}`);
    q.appendChild(q1);
    q.setAttribute('id', i);
    let pagebreak = document.createElement("BR");
    document.getElementById("answersOnPage").appendChild(q);

    //Makes the radio buttons for the questions
    for (let j = 0; j < wrongAnswers[i].length; j++) {
      let pagebreak1 = document.createElement("BR");
      document.getElementById("answersOnPage").appendChild(pagebreak1);
      let radioBtn = document.createElement("INPUT");
      radioBtn.setAttribute("type", "radio");

      radioBtn.setAttribute('name', `${questions[i]}`);
      radioBtn.setAttribute('value', `${answers[i][j]}`);
      radioBtn.setAttribute('id', `${answers[i][j]}`);

      //Appends the radio buttons to the page
      document.getElementById("answersOnPage").appendChild(radioBtn);
      let answerText = document.createTextNode(`${answers[i][j]}`);
      document.getElementById("answersOnPage").appendChild(answerText);
      document.getElementById("answersOnPage").appendChild(pagebreak);

    }

  }




  //creates the button to clear the test
  let clearbutton = document.createElement("BUTTON");
  let clearbuttontext = document.createTextNode("Clear Test");
  clearbutton.setAttribute('id', 'clearpage');
  clearbutton.appendChild(clearbuttontext);
  document.getElementById("answersOnPage").appendChild(clearbutton);

  //creates button to check the questions
  let checkTestButton = document.createElement("BUTTON");
  let checkButtonText = document.createTextNode("Check test");
  checkTestButton.appendChild(checkButtonText);
  checkTestButton.setAttribute("id", "checkBtn");
  document.getElementById("answersOnPage").appendChild(checkTestButton);



  let gbutton= document.createElement("BUTTON");
  let gbuttontxt=document.createTextNode("Translate");
  gbutton.setAttribute('id', "gbutton");
  gbutton.appendChild(gbuttontxt);
  document.getElementById("answersOnPage").appendChild(gbutton);

  //Event listeniners to enable event based functions
  let totalscore = document.getElementById("checkBtn").addEventListener("click", () => checkTest(questions, correctAnswers));
  let clearTests = document.getElementById("clearpage").addEventListener("click", () => clearTest(x));
  let putPicture = document.getElementById("checkBtn").addEventListener("click", () => putPictures(questions, correctAnswers));
  let makered = document.getElementById("checkBtn").addEventListener("click", () => makeTextRed(questions));
  let googletranslate= document.getElementById("gbutton").addEventListener("click", () => googletrans());

  //appends an x to all of the questions
  for (let i = 0; i < questions.length; i++) {
    let wrongimg = document.createElement("img");
    wrongimg.setAttribute('id', `${i+"tagwrong"}`);
    wrongimg.src = "/x.png";
    wrongimg.style.width = "4%";
    document.getElementById(`${i}`).appendChild(wrongimg);
    document.getElementById(`${i+"tagwrong"}`).style.display = "none";
  }
  //appends a check mark to all of the questions
  for (let i = 0; i < questions.length; i++) {
    let correct = document.createTextNode("correct");
    let correctimg = document.createElement('img');
    correctimg.src ="/check.png";
    correctimg.style.width = '4%';
    correctimg.setAttribute('id', `${i+"tagcorrect"}`);
    document.getElementById(`${i}`).appendChild(correctimg);
    document.getElementById(`${i+"tagcorrect"}`).style.display = "none";
  }




}






//same as the main functino except it is used for random test generation
function mainForRandom(x) {
	if(x.length==0){
document.getElementById("answersOnPage").innerHTML="this quiz has no questions";
	}
	console.log(x.length);
  document.getElementById("score").innerHTML = "";
  let correctAnswers = x.map(rightAnswerGen);
  let wrongAnswers = x.map(answerGen);
  let answers = answerObj(correctAnswers, wrongAnswers);
  let questions = x.map(questionGen);
  console.log(answers);
  document.getElementById("answersOnPage").innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    let q = document.createElement("p");
    let q1 = document.createTextNode(`${questions[i]}`);
    q.appendChild(q1);
    q.setAttribute('id', i);
    let pagebreak = document.createElement("BR");

    document.getElementById("answersOnPage").appendChild(q);

    for (let j = 0; j < wrongAnswers[i].length; j++) {
      let pagebreak1 = document.createElement("BR");
      document.getElementById("answersOnPage").appendChild(pagebreak1);
      let radioBtn = document.createElement("INPUT");
      radioBtn.setAttribute("type", "radio");
      radioBtn.setAttribute('name', `${questions[i]}`);
      radioBtn.setAttribute('value', `${answers[i][j]}`);
      radioBtn.setAttribute('id', `${answers[i][j]}`);



      document.getElementById("answersOnPage").appendChild(radioBtn);
      //console.log(radioBtn);

      let answerText = document.createTextNode(`${answers[i][j]}`);
      document.getElementById("answersOnPage").appendChild(answerText);
      document.getElementById("answersOnPage").appendChild(pagebreak);

    }

  }




  let clearbutton = document.createElement("BUTTON");
  let clearbuttontext = document.createTextNode("Clear ");
  clearbutton.setAttribute('id', 'clearpage');
	  clearbutton.setAttribute('class', 'button');
  clearbutton.appendChild(clearbuttontext);
  document.getElementById("answersOnPage").appendChild(clearbutton);





  let checkTestButton = document.createElement("BUTTON");
  let checkButtonText = document.createTextNode("Check ");
  checkTestButton.appendChild(checkButtonText);
  checkTestButton.setAttribute("id", "checkBtn");
	  checkTestButton.setAttribute("class", "button");
  document.getElementById("answersOnPage").appendChild(checkTestButton);


  let gbutton= document.createElement("BUTTON");
  let gbuttontxt=document.createTextNode("Translate");
  gbutton.setAttribute('id', "gbutton");
	  gbutton.setAttribute('class', "button");
  gbutton.appendChild(gbuttontxt);
  document.getElementById("answersOnPage").appendChild(gbutton);

  let totalscore = document.getElementById("checkBtn").addEventListener("click", () => checkTest(questions, correctAnswers));
  let clearTests = document.getElementById("clearpage").addEventListener("click", () => clearTestRand(x));
  let putPicture = document.getElementById("checkBtn").addEventListener("click", () => putPictures(questions, correctAnswers));
  let makered = document.getElementById("checkBtn").addEventListener("click", () => makeTextRed(questions));
  let googletranslate= document.getElementById("gbutton").addEventListener("click", () => googletrans());

  for (let i = 0; i < questions.length; i++) {
    let wrongimg = document.createElement("img");
    wrongimg.setAttribute('id', `${i+"tagwrong"}`);
    wrongimg.src = "/x.png";
    wrongimg.style.width = "4%";
    document.getElementById(`${i}`).appendChild(wrongimg);
    document.getElementById(`${i+"tagwrong"}`).style.display = "none";
  }
  for (let i = 0; i < questions.length; i++) {
    let correct = document.createTextNode("correct");
    let correctimg = document.createElement('img');
    correctimg.src = "/check.png";
    correctimg.style.width = '4%';
    correctimg.setAttribute('id', `${i+"tagcorrect"}`);
    document.getElementById(`${i}`).appendChild(correctimg);
    document.getElementById(`${i+"tagcorrect"}`).style.display = "none";
	}






}






//checks if the question answer is correct
function checkTest(questions, answers) {
  document.getElementById("score").innerHTML = "";
  let totalans = 0;
  for (let i = 0; i < questions.length; i++) {
    radios = document.getElementsByName(`${questions[i]}`);
    console.log(radios);
    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        let answer = radios[j].value;
        //sees if answer is in the answer arrays
        for (let e = 0; e < answers.length; e++) {
          if (answer == answers[e]) {

            totalans++;
            break;
          }
        }
      }
    }
  }

  let finalscore = "Your final score is " + totalans + " / " + questions.length;
  let pagebreak = document.createElement("BR");
console.log(finalscore);
let temp_html="<p>"+`${finalscore}`+"</p>"
	var newHTML=temp_html;
  document.getElementById("score").innerHTML=newHTML;
}

//puts the check mark or the x mark if they are correct or not
function putPictures(questions, answers) {
  for (let i = 0; i < questions.length; i++) {

    radios = document.getElementsByName(`${questions[i]}`);
    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        let answer = radios[j].value;
        if (answers.includes(`${answer}`)) {
          //reveals check mark if they are correct
          document.getElementById(`${i+"tagcorrect"}`).style.display = "block";
          document.getElementById(`${i+"tagwrong"}`).style.display = "none";
          console.log(answer);
        } else {

          //reveals x if they are incorrect
          document.getElementById(`${i+"tagwrong"}`).style.display = "block";
          document.getElementById(`${i+"tagcorrect"}`).style.display = "none";
          console.log("incorrect");
        }
      }
    }
  }
}

//Makes the text red if they missed a quesiton
function makeTextRed(questions) {
  let realbool = 1;
  for (let i = 0; i < questions.length; i++) {
    let bool = 0;

    radios = document.getElementsByName(`${questions[i]}`);
    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        bool = 1;
      }
    }
    if (bool == 0) {
      document.getElementById(`${i}`).style.color = "red";
      console.log(i + "red");
      realbool = 0;
    } else if (bool == 1) {
      document.getElementById(`${i}`).style.color = "black";
    }
  }
  //sends an alert if they did not answer all of the questions
  if (realbool == 0) {
    alert("You did not answer all of the questions");
  }
}


//clears the questions if they want to clear the test
function clearTest(x) {
  if (confirm("do you want to clear the test")) {
    main(x);
    return;
  } else {
    return;
  }
}

function clearTestRand(x){
	if (confirm("do you want to clear the test")) {
		mainForRandom(x);
		return;
	} else {
		return;
	}
}




//maps the array of questions
function questionGen(item) {
  let question = item['question']
  return question;
}

//maps the array of incorrect answers

function answerGen(item) {
  let wrongAnswers = item['incorrect_answers'];
  return wrongAnswers;
}


//maps to a new array of corect answers
function rightAnswerGen(item) {
  let rightAnswer = item['correct_answer'];
  return rightAnswer;
}

//makes a single array of answers including the correct and incorrect ones
//Also randomizes the answers
function answerObj(correctAns, wrongAnswers) {
  for (let i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i] = wrongAnswers[i].concat(correctAns[i]);
  }
	//algorthim to randomize choices
  for (let x = 0; x < wrongAnswers.length; x++) {
    for (let i = wrongAnswers[x].length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = wrongAnswers[x][i];
      wrongAnswers[x][i] = wrongAnswers[x][j];
      wrongAnswers[x][j] = temp;
    }
  }
  return wrongAnswers;
}




function googletrans(){

document.getElementById("google").style.display="block";

}
