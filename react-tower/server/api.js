var express = require('express');
var cors = require('cors');
var app = express();

var counter = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var whitelist = ['http://195.136.69.98:3000', 'http://localhost:3000'];

  var corsOptionsDelegate = function (req, callback) {

    var myIpAddress = req.connection.remoteAddress; // This is where you get the IP address from the request
  
    var corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback("Zapomnij");
        }
      }
    }
  
    callback(null, corsOptions);
  }
  
app.get('/getCar/:id',cors(corsOptionsDelegate), function(req, res) {
    res.header('Content-Type', 'application/json');
    const sleepTime = Math.floor(Math.random() * 9) + 1;
    sleep(sleepTime*1000).then(()=>{
        res.json({
            car: req.params.id,
            time: sleepTime*1000,
            counter: counter++,
        });
    });
});

app.get('/farawayCar/:id',cors(corsOptionsDelegate), function(req, res) {
    res.header('Content-Type', 'application/json');
    const sleepTime = Math.floor(Math.random() * 9) + 1;
    sleep(sleepTime*1000).then(()=>{
        res.json({
            car: req.params.id,
            time: sleepTime,
            counter: counter++,
        });
    });
});


app.post('/testCreate/:userId', function(req, res){
  res.header('Content-Type', 'application/json');
  res.json({
      testId: 'TEST_ID'
  })
})


app.post('/test/:testId', function(req, res){
  res.header('Content-Type', 'application/json');
  res.json({
      timeStart:'12-12-2021 10:52:53',
      timeStop: '12-12-2021 10:52:53',
      questionNumber: 1,
      answer: 70,
  })
})

app.get('/test/:userId/:testId', function(req, res){
  res.header('Content-Type', 'application/json');
  res.json({
      testId:'12-12-2021 10:52:53',
      answers: [{
        timeStart:'12-12-2021 10:52:53',
        timeStop: '12-12-2021 10:52:53',
        questionNumber: 1,
        answer: 70,
      }],
  })
})

app.get('/testResult/:testId/', function(req, res){
  res.header('Content-Type', 'application/json');
  res.json({
      result: {
        red: 33,
        green: 33,
        blue: 34,
        yellow: 33
      }
  })
})

app.post('/user/:UUID/:identifier', function(req, res){
  res.header('Content-Type', 'application/json');
})

app.listen(8081, function() {
    
});
   