
//=============================PSEUDO CODE========================================

//When the page loads, it will show all of the available products' item id, name, and price
//There will be two promts:
//		1. ask the item number
//		2. ask how many they would like to buy
//Check stockquantity against quantity customer has specified:
//		1. If quantity is insuffecient: print alert message
//		2. If quantity sufficient: process customer order (update MYSQL database

//========================== GLOBAL VARIABLES =====================================

//=================================================================================


var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : "localhost",
    port    : 3306,
    user    : "root", //Your username
    password: "", //Your password
    database: "lionKing"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

connection.query("INSERT INTO characters SET ?", {
    name: 'Node Insert'
}, function(err, res) {
    if (err) throw err;
    console.log('Did Insert')
});

connection.query("INSERT INTO characters SET ?", {
    name: 'Node Insert times 2'
}, function(err, res) {
    if (err) throw err;
    console.log('Did Insert')
});

connection.query("UPDATE characters SET ? WHERE ?", [{name: "Node Update"}, {
    name: 'Node Insert'
}], function(err, res) {
});

connection.query("DELETE FROM characters WHERE ?", {
    id: 14
}, function(err, res) {
});

connection.query('SELECT * FROM characters', function(err, res) {
    if (err) throw err;
    console.log(res);
}))