const parser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

var host = '127.0.0.1',user = 'root', pass = '',database='pclist';
var con = mysql.createConnection({host,user,pass,database});
var jsonparse = parser.json();
var parse = parser.urlencoded({extended: false});


app.listen(3000, () => console.log('Server running on port 3000'));

app.post('/api/mysql', parse , (req, res) => {
  var query = req.body.query;
  console.log(query);
  con.query(query, function(err, result){
    if(err){
      res.send("error, check your query")
    }else{
      res.send(result[0]);
    };
  });
});

app.post('/api/model',parse , function(request, result){
  var query = request.body.query;
  console.log("model : "+query);
  con.query(query, function(error, res){
    if(error){
      result.send("error, check your query");
    }else{
      result.send(res[0]);
    }
  })
})

app.post('/api/input', parse ,function(req, res) {
  const newItem = req.body.user;
  
  res.send(`Item added: ${newItem}`);
  console.log(newItem)
});

/**/