
$(document).ready(function(){
	
	var productId = document.URL.indexOf("?");
	
	$.ajax({
		
		type: "POST",
		url : serverPath 
	});
	
	$("table #reserve-expire-date").text(getDate(5));
});