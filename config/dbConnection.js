var mysql = require ('mysql');
//colocar a função numa variável
var connMySQL = function(){
    console.log('CONEXÃO com o db foi estabelecida');
    return mysql.createConnection({
        host:'localhost',
        user:'jean',
        password:"123456",
        database:'projeto_node'
    });
};
//exportar a variável (não mais a função de conexão)
    module.exports = function(){
        console.log('O autoload carregou o módulo de conexão com o db');
        return connMySQL;
    }    