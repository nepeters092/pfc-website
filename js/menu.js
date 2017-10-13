// JavaScript Document

$(document).ready(function(){
	
	$("#menu-icon span").click(function(){
		$("#mobile-menu").slideToggle( "slow" );
	});
	
	$(window).resize(function(){
		if( $("#mobile-menu").css('display') == 'block' ) {
			$("#mobile-menu").hide();
		}
	});
	
	$("#mobile-menu a").click(function(){
		$("#mobile-menu").hide();
	});
	
});