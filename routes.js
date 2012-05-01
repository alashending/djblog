/**
 * @author djqq
 */
var article = require('./controller/article.js');
exports = module.exports = function(app){
	app.get('/article/create',article.save);
	app.post('/article/create',article.save);
	app.get('/article/:aid',article.index);
	app.get('/index',article.getList);
}

