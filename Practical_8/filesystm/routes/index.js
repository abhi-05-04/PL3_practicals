var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./data.txt','utf-8',(err,data)=>{
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.send(data);
    }
  })

  var data = 'To write something in file'
  fs.writeFile('forwriting.txt',data,err=>{
    if(err){
      console.log(err);
    }
  })
});

module.exports = router;
