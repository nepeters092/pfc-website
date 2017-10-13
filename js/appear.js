// JavaScript Document
var servicesTop = $('#services-anchor').offset().top;
var teamTop = $('#team-anchor').offset().top;

$(window).on('scroll', function(){
	var top_of_services = $('#services').offset().top;
	var top_of_team = $('#team').offset().top;
	var bottom_of_screen = $(window).scrollTop() + $(window).height();
	
	if ((bottom_of_screen > (top_of_services + 100 ) )) {
		$('#services .page-content').fadeIn(1000);
	}
	if ((bottom_of_screen > (top_of_team + 100 ) )) {
		$('#team .page-content').fadeIn(1000);
	}
	
});