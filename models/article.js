/**
 * @author djqq
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema({
	title:{type:String},
	content:{type:String},
	authorId:{type:ObjectId},
	createTime:{type:Date,default:Date.now},
	updateTime:{type:Date,default:Date.now}
})

mongoose.model("Article",ArticleSchema);

