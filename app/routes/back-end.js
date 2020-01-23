var db = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/back-end',function(req,res){
        var connection = db();

        /*var mysql = require('mysql');
        var connection = mysql.createConnection({
            host:'localhost',
            user:'usuario',
            password:"123456",
            database:'projeto_node'
        });*/
        connection.query("SELECT * FROM conteudo WHERE modulo = 'back-end'", function(error,result){
            //res.send(result);
            res.render('Secao/back-end',{dados:result});
        });
        
    });
}