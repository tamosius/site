
$(document).ready(function(){
	
	$.ajax({
		
		type     : "POST",
		url      : serverPath + "contr/memberProfile",
		data     : {id : 1237},
		dataType : "json",
		success  : function(data, status, e){
			
			$(".jumbotron img").attr("src", serverPath + "resources/images/membersImages/" +
					data.imagePath );
			$("#account-table #first-name").val(data.firstName);
			$("#account-table #last-name").val(data.lastName);
			$("#account-table #address").val(setFonts(data.address));
			$("#account-table #phone-number").val(setFonts(data.phNumber));
			$("#account-table #date-of-birth").val(setFonts(data.dateOfBirth));
			$("#account-table #email").val(data.email);
			$("#account-table #programme").text(setFonts(data.programme));
			$("#account-table #start-end-date").text(data.membershipFrom + " / " + setFonts(data.membershipTo));
			$("#account-table #date-joined").text(data.dateJoined);
		},
		error   : function(e){
			
			
		}
	});
});