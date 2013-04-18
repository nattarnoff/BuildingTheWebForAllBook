var pullquotes = $('span.pullquote');
var PullTheQuotes = function(){
	console.log(pullquotes);
	// pullquotes.forEach(function(){
		var text = pullquotes.text();
		console.log(text);
		var html = "<blockquote class='pullquote'>"+text+"</blockquote>";
		console.log(html);
		console.log(pullquotes.parents('.row'));
		pullquotes.parents('.row').children('p:first-child').after(html);
		
	// })
}

$(function(){
	PullTheQuotes();
})