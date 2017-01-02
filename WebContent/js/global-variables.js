var serverPath = "/Degree_Project/"; 

var imagesPath = "C:\\Users\\Tomas\\Documents\\Spring_Tool_Suite\\Degree_Project\\WebContent\\resources\\images\\";

function getDate(days){
	
	var date = new Date();
	
	date.setDate(date.getDate() + days);
	
	return addZero(date.getDate()) + "-" + addZero(date.getMonth() + 1) + "-" + date.getFullYear();
}

function addZero(value){
	
	if(value < 10){
		
		value = "0" + value;
	}
	return value;
}

/*=========================================================================================*/
/*------- SET FONT FOR 'N / A', etc. VALUES -----------------------------------------------*/
function setFonts(value){
	
	if(value.localeCompare("N / A") === 0){
		$(this).css({"color" : "#ad0630", "font-size" : "17px"});
	}	
	if(value.localeCompare("'Pay as You Go'") === 0){
		value = "<div class='pay-as-you-go'>" + value + "</div>";
	}
	if(value.localeCompare("present") === 0){
		value = "<div class='present'>" + value + "</div>";
	}
	return value;
}