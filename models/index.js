/**
 * @author djqq
 */
var mongoose = require('mongoose');
require('./article.js');

mongoose.connect('mongodb://127.0.0.1/djnode', function(err){
	if(err){
		console.log('connect to db error: ' + err.message);
		process.exit(1);
	}
});

exports.Article = mongoose.model("Article");

