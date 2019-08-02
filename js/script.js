jQuery(document).ready(function($) {
	$("#menu-button").click(function(event){
	  if ($(".menu").hasClass('active')) {
	  	$(".menu").removeClass('active');
	  }
	  else{
	  	$(".menu").addClass('active');
	  	$(".cross").addClass('active')
	  }
	});
	$("#cross-button").click(function(event){
		$(".menu").removeClass('active');
		$(".cross").removeClass('active');
	});
	$(".cross").click(function(event){
		$(".menu").removeClass('active');
		$(".cross").removeClass('active');
	});
	$(".info-icon").click(function(event){
	  if ($(".info-box-list").hasClass('active')) {
	  	$(".info-box-list").removeClass('active');
	  }
	  else{
	  	$(".info-box-list").addClass('active');
	  	$(".info-box-list").addClass('active')
	  }
	});
});