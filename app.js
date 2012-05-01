/**
 * @author djqq
 */
var express = require('express');
var app = express.createServer();
var routes = require('./routes');

app.configure(function(){
	app.set('view engine','html');
	app.set('view','/views');
	app.set("view options",{layout: false });
	app.register('.html',require('ejs'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	
})

routes(app);

app.listen(3000);
 
