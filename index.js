var express =  require('express');
var fs = require("fs");
var path = require("path");
var app = express();

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data){
      if(err){
          console.error(err);
      }
      var str = data.toString();
      var object = JSON.parse(str);
        res.json(object);
      
  });
  
    
});
app.listen(process.argv[2]);