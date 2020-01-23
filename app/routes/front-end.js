//var db = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/front-end',function(req,res){
        //var connection = db();
        var connection = app.config.dbConnection();
        
        /*var mysql = require('mysql');
        var connection = mysql.createConnection({
            host:'localhost',
            user:'usuario',
            password:"123456",
            database:'projeto_node'
        });*/
        connection.query("SELECT * FROM conteudo WHERE modulo = 'front-end'", function(error,result){
            //res.send(result);
            res.render('Secao/front-end',{dados:result});
        });
        
    });
    app.post('/front-end/salvar',function(req,res){
        var dados = req.body;
        var connection = app.config.dbConnection()
        connection.query('INSERT INTO conteudo SET?', dados,function(error,
            result){
            res.redirect('/front-end');
        });
    });
    app.post('/front-end/delete',function(req,res){
        var dados = req.body;
        var connection = app.config.dbConnection();
        console.log("DELETE FROM conteudo WHERE", dados);
        connection.query('DELETE FROM conteudo WHERE?', dados,function(error,
            result){
            res.redirect('/front-end');
        });
    });
}
