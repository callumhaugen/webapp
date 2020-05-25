const express = require('express');
const app = express()
const MongoClient = require("mongodb").MongoClient
var ObjectId = require("mongodb").ObjectId
app.set('view engine', 'pug');
const path = require("path");
const router = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser());
app.use(express.static('public'));

var DomParser = require('dom-parser');
var parser = new DomParser();
var he = require('he');





const uri = "mongodb+srv://excore:nM2JB0b6XshJIbDE@cluster0-2kaje.gcp.mongodb.net/test?retryWrites=true&w=majority";

var db;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
   db = client.db("a4");
   console.log("hello")

});

router.get('/', function(req, res, next){
  res.render('pages/index');
});

//questions route
router.get('/questions', function(req, res, next) {
  let category = req.query.category;
  let difficulty = req.query.difficulty

  if (req.accepts('html')) {
    let response_array = []
    if (category == null && difficulty == null) {
      db.collection("questions").find().limit(25).toArray(function(err, response) {

        let response_array = [];
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;

        res.render('pages/questions', {
          questions: resobj.questions
        });
      });
    } else if (category != null && difficulty == null) {
      db.collection("questions").find({
        "category": {
          $eq: `${category}`
        }
      }).limit(25).toArray(function(err, response) {
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;
        res.render('pages/questions', {
          questions: resobj.questions
        });

      });
    } else if (category == null && difficulty != null) {
      db.collection("questions").find({
        "difficulty": {
          $eq: `${difficulty}`
        }
      }).limit(25).toArray(function(err, response) {
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;
        res.render('pages/questions', {
          questions: resobj.questions
        });

      });
    } else if (category != null && difficulty != null) {
      db.collection("questions").find({
        "category": {
          $eq: `${category}`
        },
        "difficulty": {
          $eq: `${difficulty}`
        }
      }).limit(25).toArray(function(err, response) {
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;
        res.render('pages/questions', {
          questions: resobj.questions
        });

      });
    }
  } else if (req.accepts('json')) {
    if (category == null && difficulty == null) {
      db.collection("questions").find().limit(25).toArray(function(err, response) {
        let response_array = [];
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        console.log("hello")
        console.log(response)
        response_array = response
        resobj.questions = response_array;
        let finalresobj = JSON.stringify(resobj)
        console.log(finalresobj);
        res.send(finalresobj);
      });
    } else if (category != null && difficulty == null) {
      db.collection("questions").find({
        "category": {
          $eq: `${category}`
        }
      }).limit(25).toArray(function(err, response) {
        let response_array = [];
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;
        let finalresobj = JSON.stringify(resobj)
        res.send(finalresobj);

      });
    } else if (category == null && difficulty != null) {
      db.collection("questions").find({
        "difficulty": {
          $eq: `${difficulty}`
        }
      }).limit(25).toArray(function(err, response) {
        let response_array = [];
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response
        resobj.questions = response_array;
        let finalresobj = JSON.stringify(resobj)
        res.send(finalresobj);

      });
    } else if (category != null && difficulty != null) {
      db.collection("questions").find({
        "category": {
          $eq: `${category}`
        },
        "difficulty": {
          $eq: `${difficulty}`
        }
      }).limit(25).toArray(function(err, response) {
        let response_array = [];
        if (err) {
          throw err;
        }
        let resobj = {
          questions: null
        }
        response_array = response

        for(let i=0; i<response_array.length; i++){
          let x=he.decode(response_array[i].question);
          response_array[i].question=x;
        }
console.log(response_array);





        resobj.questions = response_array;
        let finalresobj = JSON.stringify(resobj);
        console.log("maybe here");
        res.send(finalresobj);

      });
    }
  }



});
//questions with a spefiic id route
router.get('/questions/:qID', function(req, res, next) {
  if (req.accepts('html')) {
    let x = req.params.qID;
    console.log(x)
    db.collection("questions").find({
      "_id": ObjectId(`${x}`)
    }).toArray(function(err, response) {
      if (err) {
        res.status(500).send();
        throw err;
      }
      console.log(response);
      res.render('pages/questshow', {
        questions: response
      });
    });
  } else if (req.accepts('json')) {
    let response_array = []
    let x = req.params.qID;
    console.log(x)
    db.collection("questions").find({
      "_id": ObjectId(`${x}`)
    }).toArray(function(err, response) {
      if (err) {
        throw err;
      }
      console.log(response);
      res.send(response[0]);
    });
  }
});

router.get('/clientfile', function(req, res, next) {
  let filepath = __dirname + '/public/client.js';
  console.log(filepath);
  res.sendFile(filepath);

});

router.get('/deletefile', function(req, res){
let filepath=__dirname+'/public/deletequestions.js'
console.log(filepath);
res.sendFile(filepath);

});

router.get('/playFile', function(req, res){
let filepath=__dirname+'/public/realwork.js'
res.sendFile(filepath);
});

router.get('/playquiz', function(req, res){
  let filepath=__dirname+'/public/view/triva.html'
  res.sendFile(filepath);


});

router.get('/playquiz/:qid', function(req, res){
  let filepath=__dirname+'/public/view/triva.html'
  res.sendFile(filepath);


});

router.get("/noQ", function(req, res){
  res.send("this quiz has no questions");
});


//create quiz route
router.get('/createquiz', function(req, res, next) {
  let cats;
  let difficulty;
  db.collection("questions").distinct("category", function(err, response) {
    if (err) {
      throw err;
    }
    let cats = response;
      response=[];
      response[0]="easy";
      response[1]="medium";
      response[2]="hard";
      let filepath = __dirname + "/public/client.js"
      console.log(filepath);
      res.render('pages/createq', {
        questions: cats,
        difficulty: response,
        filepath: filepath
      
    });
  });
});

var objectId;
//post the quizzes router
router.post("/quizzes", function(req, res) {
  console.log(req.body);
  console.log(req.body.creatorname);
  let quizout = req.body;
  if (req.body.creatorname == "" || req.body.creatorname == null || req.body.tags == "" || req.body.tags == null || req.body.questions == null) {
    res.status(400).send("dont have all data");
  } else {
    db.collection("quizzes").insertOne(req.body);
     objectId = quizout._id;
    console.log(objectId);
    req.body.url="test";
     res.status(200);
  }

});

router.get("/quizztemp", function(req, res){
  console.log("here");

url="/"+objectId;
  console.log(url);
  res.send(url);
});



//gets the quizzes in the database
router.get("/quizzes", function(req, res) {
  let creatorname = req.query.creator;
  let tag = req.query.tags;

  if (req.accepts('html')) {

    if (req.query.creator != null && req.query.tags == null) {
      db.collection("quizzes").find({
        "creatorname": {
          $regex: `${creatorname}`,
          $options: '-i'
        }
      }).toArray(function(err, response) {
        console.log(response);
        console.log(response.length);
        console.log()
        res.render("pages/quizrender", {
          questions: response
        });
      });
    }

    if (req.query.creator == null && req.query.tags != null) {
      db.collection("quizzes").find({
        "creatorname": {
          $regex: `${tag}`,
          $options: '-i'
        }
      }).toArray(function(err, response) {
        console.log(response);
        console.log(response.length);
        console.log()
        res.render("pages/quizrender", {
          questions: response
        });
      });
    }

    if (req.query.creator != null && req.query.tags != null) {
      db.collection("quizzes").find({
        $and: [{
          "tags": {
            $eq: `${tag}`
          }
        }, {
          "creator": {
            $regex: `${creatorname}`
          }
        }]
      }).toArray(function(err, response) {
        console.log(response);
        console.log(response.length);
        console.log()
        res.render("pages/quizrender", {
          questions: response
        });
      });
    } else {
      db.collection("quizzes").find().toArray(function(err, response) {
        console.log("hello");
        console.log(response);
        console.log(response);
        res.render("pages/quizrender", {
          questions: response

        });
      });
    }
  } else if (req.accepts('json')) {

    if (req.query.creator != null && req.query.tags == null) {
      db.collection("quizzes").find({
        "creatorname": {
          $regex: `${creatorname}`,
          $options: '-i'
        }
      }).toArray(function(err, response) {
        console.log(response);
        let finalquiz = {
          quizzes: response
        }
        let finalquizjson = JSON.stringify(finalquiz)
        res.send(finalquizjson);
      });
    } else if (req.query.creator == null && req.query.tags != null) {
      db.collection("quizzes").find({
        "tags": {
          $eq: `${tag}`
        }
      }).toArray(function(err, response) {
        console.log(response);
        let finalquiz = {
          quizzes: response
        }
        let finalquizjson = JSON.stringify(finalquiz)
        res.send(finalquizjson);

      });
    } else if (req.query.creator != null && req.query.tags != null) {
      db.collection("quizzes").find({
        $and: [{
          "tags": {
            $eq: `${tag}`
          }
        }, {
          "creator": {
            $regex: `${creatorname}`
          }
        }]
      }).toArray(function(err, response) {
        console.log(response);
        let finalquiz = {
          quizzes: response
        }
        let finalquizjson = JSON.stringify(finalquiz)
        res.send(finalquizjson);

      });
    } else {
      db.collection("quizzes").find().toArray(function(err, response) {
        console.log(response);
        let finalquiz = {
          quizzes: response,

        }
        let finalquizjson = JSON.stringify(finalquiz)
        res.send(finalquizjson);

      });


    }
  }

});


router.delete('/quizzes', function(req, res,next){
console.log(req.body.url);
db.collection("quizzes").deleteOne({_id:ObjectId(`${req.body.url}`)});
res.status(201).send("deleted quiz");





});
//gets a quiz with a spefic id
router.get('/quiz/:quizID', function(req, res, next) {

  if (req.accepts('html')) {
    let x = req.params.quizID;
    //console.log(x)
    db.collection("quizzes").find({
      "_id": ObjectId(`${x}`)
    }).toArray(function(err, response) {
      if (err) {
        res.status(404);
      }
      let questionarray = [];
      let tagsarray = [];
      //console.log(response[0]);
      //console.log("test");
      //console.log(response[0].creatorname);
      for (let u = 0; u < response[0].questions.length; u++) {
        questionarray.push(response[0].questions[u].question);
        //console.log(response[0].questions[u].question);
      }
      for (let u = 0; u < response[0].tags.length; u++) {
        tagsarray.push(response[0].tags[u]);
        //console.log(response[0].questions[u].question);
      }
      console.log(tagsarray);
      console.log(questionarray.length);
      console.log(response[0].creatorname);
      res.render('pages/quiz', {
        questions: questionarray,
        creator: response[0].creatorname,
        tags: response[0].tags
      });
    });
  }



});

router.get('/quizJson/:quizID', function (req, res, next)
{

  let x=req.params.quizID;
  db.collection('quizzes').find({"_id":ObjectId(`${x}`)}).toArray(function(err, response){
    if (err){
      res.status(404);
    }
    else{
      let finalres=JSON.stringify(response);
      console.log(finalres);
      res.send(finalres);
    }
  });

});

app.use('/', router);
app.use(express.static('public'));




const PORT=process.env.PORT||8080;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}....`);
});
