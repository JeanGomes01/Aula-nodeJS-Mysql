
var consign = require('consign');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

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
