

var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views','./app/views');

var consign = require('consign');
consign()
.include('app/routes')
.then('config/dbConnection.js')
.into(app);

module.exports = app;
/*app.get('/',function(req,res){
    res.render("../Secao/front-end");
});
app.get('/back-end',function(req,res){
    res.render("../Secao/back-end");
});
app.get('/infraestrutura',function(req,res){
    res.render("../Secao/infra");
});*/
