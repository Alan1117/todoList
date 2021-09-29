const express = require("express");
const bodyParser = require("body-parser");


var toDos =[];

const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static("public"));
app.use(express.static(__dirname+"/public"));





app.get("/", function(req, res){

  var today = new Date();
  var day ="";
  var i = today.getDay();

   var options ={
     weekday :'long',
     day : 'numeric',
     month : 'long'
   };
   var day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay:day, newListItems:toDos});
});

app.post("/", function(req, res){
  var toDo = req.body.newItem;
  toDos.push(toDo);
  res.redirect("/");
});







app.listen(3000, function(){
  console.log("COnnected on port 3000");
});
