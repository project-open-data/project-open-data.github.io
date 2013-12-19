jQuery(document).ready(function(){
	var date = new Date();
	date.setTime(date.getTime() + (5 * 1000));

	var cookieName = 'visited';
	var cookieOptions = {expires: date, path: '/'};
	
	$("#verbose").val("");
	$("#" + $.cookie(cookieName)).addClass("visited");

	$(".navbar .nav > li > a").click(function(){
		$("#" + $.cookie(cookieName)).removeClass("visited");
		$.cookie(cookieName, $(this).attr("id"), cookieOptions);
		$("#" + $.cookie(cookieName)).addClass("visited");
	});
		
	
});
