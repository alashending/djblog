/**
 * @author djqq
 */
var models = require('../models');
var Article = models.Article;
var config = require('../config').config;

exports.index = function(req, res, next){
	var articleId = req.params.aid;
	/*res.render('article/index',{
		
	})
	*/
	Article.findOne({_id:articleId},function(err,article){
		res.render('article/index',{
			title:article.title,
			content:article.content,
			updateTime:article.updateTime
		});
	});
	
}
exports.save = function(req,res,next){
	var method = req.method.toLowerCase();
	if(method == "get"){
		res.render('article/edit',{
		})
	}
	if(method == "post"){
		var article = new Article();
		article.title=req.body.title;
		article.content=req.body.content;
		article.updateTime = new Date();
		article.save();
		res.json({status:"success"});
	}
}
exports.getList = function(req, res, next){
	var page = req.params.page || 1;
	var limit = config.limit;
	var opt = {limit:limit};
	Article.find({},[],opt,function(err,arts){
		res.render('index',{
			articles:arts
		})
	})
	
}
