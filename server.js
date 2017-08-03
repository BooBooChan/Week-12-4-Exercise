//Requring npm packages
var handlebar = require("handlebars");
var mysql = require("mysql");
var login = require("./models.login.sql");
var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root",
	password:"",
	database:"user"
});
connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
});
//Preparing new users to enter login information
function newTask(){
	connection.query(
		"INSERT INTO user",
		{
			username:
			password:
		}
		