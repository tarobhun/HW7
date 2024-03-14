var express = require('express');
var router = express.Router();
var serverArray = [];

var fs = require("fs");
let fileManager = {
read: function() {
var rawdata = fs.readFileSync('objectdata.json');
let goodData = JSON.parse(rawdata);
serverArray = goodData;
},
write: function() {
let data = JSON.stringify(serverArray);
fs.writeFileSync('objectdata.json', data);
},
validData: function() {
var rawdata = fs.readFileSync('objectdata.json');
console.log(rawdata.length);
if(rawdata.length < 1) {
return false;
}
else {
return true;
}
}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.get('/getRecipes', function(req, res) {
  fileManager.read();
  res.status(200).json(serverArray);
});

router.post("/addRecipe", function(req, res) {
  if (!fileManager.validData()) {
  serverArray.push(req.body);
  res.status(200).json(req.body);
  fileManager.write();
  }
  else {
    fileManager.read();
  }
});


module.exports = router;

//router.delete('/RemoveRecipe/:ID', (req, res) => {
  //const num = req.params.ID;
  //let isFound = false;
  //let index = GetIndex(num);
  //if (index == -1) {
    //return res.status(500).json({
      //status: "That ID cannot be found."
    //});
  //}
  //else {
    //serverArray.splice(num, 1);
    //res.send('The recipe saved at ID ' + num + ' has been deleted!');
  //}
//});

//function GetIndex(num) {
  //for (let i = 0; i < serverArray.length; i++) {
    //if (num === serverArray[i].ID) {
      //return i;
    //}
  //}
  //return -1;
//}
