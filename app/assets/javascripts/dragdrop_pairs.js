$(document).on("ready", function(){
	var score = 0
 
	$('body');
  /*function to allow only a specific piece of the puzzle to drop in the required div*/
	var droppable_option = {
		activeClass: 'ui-state-hover',
		hoverClass: 'ui-state-active',
		drop: function(event, ui) {		
			ui.draggable.draggable("disable", 1)
		
			$(this).addClass('ui-state-highlight');
			$("body").append('<embed src="shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			bonus_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".earth, .jupiter, .mars, .venus, .neptune, .mercury, .saturn, .uranus" ).draggable({revert: 'invalid'});
		
	$(".bigrow1").droppable($.extend({ accept: '.mercury'}, droppable_option));
	$(".bigrow2").droppable($.extend({ accept: '.venus'}, droppable_option));
	$(".bigrow3").droppable($.extend({ accept: '.earth'}, droppable_option));

	$(".bigrow4").droppable($.extend({ accept: '.mars'}, droppable_option));
	$(".bigrow5").droppable($.extend({ accept: '.saturn'}, droppable_option));
	$(".bigrow6").droppable($.extend({ accept: '.jupiter'}, droppable_option));

	$(".bigrow7").droppable($.extend({ accept: '.neptune'}, droppable_option));
	$(".bigrow8").droppable($.extend({ accept: '.uranus'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
