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

app.listen(8080, function() {
    
});
   