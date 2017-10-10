var express = require('express')
var app = express()


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));


/*app.get("https://sheetlabs.com/NUME/cards.json",function(req,res){
    res.json();
});*/
app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
});



