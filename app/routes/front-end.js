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
}