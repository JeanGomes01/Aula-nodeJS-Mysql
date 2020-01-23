var db = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/infraestrutura',function(req,res){
        var connection = db();

        /*var mysql = require('mysql');
        var connection = mysql.createConnection({
            host:'localhost',
            user:'usuario',
            password:"123456",
            database:'projeto_node'
        });*/
        connection.query("SELECT * FROM conteudo WHERE modulo = 'infraestrutura'", function(error,result){
            //res.send(result);
            res.render('Secao/infra',{dados:result});
        });
        
    });
}