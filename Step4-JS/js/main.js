var pullquotes = $('span.pullquote');
var PullTheQuotes = function(){
	// console.log(pullquotes);
	// console.log(pullquotes.length);
	 for(i=0;i<pullquotes.length;i++){
		var text = $(pullquotes[i]).text();
		var html = "<blockquote class='pullquote";
		if($(pullquotes[i]).hasClass('right')){
			html += " right";
		}
		html += "'>"+text+"</blockquote>";
		$(pullquotes[i]).parents('span').children('p:first-child').after(html);
		
	 };
}
/* Hide the lightbox */
var killDialog= function(){
	$('.dialog').fadeOut('slow').delay(500).remove();
}

$(function(){
	/* Submit the form and trigger error */
	$('#submit').click(function(e){
		e.preventDefault();
		$('.warning').fadeIn();
	});
	/* Display pull quotes */
	PullTheQuotes();
	/* Show the lightbox */
	$('.gallery a img').click(function(e){
		if($('.dialog')){killDialog();}
		e.preventDefault();
		var object = this;
		// console.log(object);
		var src = $(this).attr('src');
		var alt = $(this).attr('alt');
		var dialog = "<div class='dialog' role='alertdialog' aria-live='polite'><a href='#' class='close'>&times;<span class='visuallyhidden'>Close</span></a><img src='"+src+"' alt='"+alt+"' /></div>";
		$('body').append(dialog);
		$('.dialog').fadeIn('slow');
		$('.dialog > .close').on("click", function(e){
			e.preventDefault();
			killDialog();
		});
		$('body').keyup(function(e){
			// console.log('Clicked escape: '+e.which);
			if(e.which == 27){
				killDialog();
			}
		});
	});
	
	/*Expand the transcript*/
	$('.expand').click(function(e){
    e.preventDefault();
    if($('.transcript').hasClass('visuallyhidden')){
      $('.transcript').removeClass('visuallyhidden');
      $('#expandcollapse').text("-");
    } else {
      $('.transcript').addClass('visuallyhidden');
      $('#expandcollapse').text("+");
    }
  })
	/*scrolling with sticky nav */
	$(document).scroll(function(){
		var elem = $('.navbar');
		if (!elem.attr('data-top')) {
		    if (elem.hasClass('navbar-fixed-top'))
		        return;
		     var offset = elem.offset()
		    elem.attr('data-top', offset.top);
		}
		if (elem.attr('data-top') <= $(this).scrollTop() )
		    elem.addClass('navbar-fixed-top');
		else
		    elem.removeClass('navbar-fixed-top');
		});
});