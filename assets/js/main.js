jQuery(document).ready(function(){

	var cookieName = 'visited';
	var cookieOptions = {expires: 1, path: '/'};
	
	$("#verbose").val("");
	$("#" + $.cookie(cookieName)).addClass("visited");

	$(".navbar .nav > li > a").click(function(){
		$("#" + $.cookie(cookieName)).removeClass("visited");
		$.cookie(cookieName, $(this).attr("id"), cookieOptions);
		$("#" + $.cookie(cookieName)).addClass("visited");
	});
		
	
});
