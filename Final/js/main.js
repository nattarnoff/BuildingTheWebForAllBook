var pullquotes = $('span.pullquote');
var PullTheQuotes = function(){
	console.log(pullquotes);
	// console.log(pullquotes.length);
	 for(i=0;i<pullquotes.length;i++){
		var text = $(pullquotes[i]).text();
		var html = "<blockquote class='pullquote";
		if($(pullquotes[i]).hasClass('right')){
			html += " right";
		}
		html += "'>"+text+"</blockquote>";
		$(pullquotes[i]).parents('.row').children('p:first-child').after(html);
		
	 };
}

$(function(){
	PullTheQuotes();
})