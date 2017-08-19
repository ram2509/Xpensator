/**
 * Created by angularboy on 13/07/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host : 'localhost',
    user : 'root',
    password : '12345',
    database: 'expenso'
};


function getDetails(email,cb) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('SELECT * FROM sign_up WHERE email="'+email+'"',function (error,results,fields) {
        console.log(results);
        cb(results);

    });

}

function signUp(data,cb) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();

    var sign = {
        name: data.name,
        email: data.email,
        password: data.password
    }

    connection.query('INSERT INTO sign_up SET ?', sign, function (err,result,fields) {
        if(err) throw err;
        cb(result);
    });

    }



module.exports = {
    signUp : signUp,
    getDetails : getDetails

}


