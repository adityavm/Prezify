$(document).ready(function(){
	$('li').eq(0).addClass('curr');
	$("ul.prezify li").wrapInner("<div></div>");
	$(document).keydown(function(e){
		switch(e.keyCode) { 
			case 38://"up" arrow
				prevSlide();
				break;
			case 40://"down" arrow
				nextSlide();
				break;
			default:
				break;
      		}
	});
});

function nextSlide(){
	if($("li.curr").next('li').length == 0)
		return;

	var curr = $("li.curr");
	curr.removeClass('curr').addClass('prev').next('li').addClass('curr');
}

function prevSlide(){
	if($("li.curr").prev('li').length == 0)
		return;
	
	var curr = $("li.curr");
	curr.removeClass('curr').prev('li').addClass('curr').removeClass('prev');
}
