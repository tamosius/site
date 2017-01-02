$(document).ready(function(){
	
   $.ajax({
		
		type: "GET",
		url  : serverPath + "products/getAllProducts",
		dataType : "json",
		async    : false,
		success: function(data, status, e){
			
			$(".shop-listing .row").empty();
			
			$.each(data, function(key, value){
				
				$(".shop-listing .row").append(
				
						"<div class='col-sm-4' >" +
                        "<div class='shop-post' >" +
                            "<div class='thumb'>" +
                                "<img class='product-image' src='" + serverPath + "resources/images/productsImages/" + value.id + ".jpg' alt=''>" +
                            "</div>" +
                            "<div class='details'>" +
                                "<input type='hidden' id='product-id' " + value.id + " />" +
                                "<h6 class='name'>" + value.name + "</h6>" +
                                "<h6 class='manufacturer'>" + value.manufacturer + "</h6>" +
                                "<h6 class='price'>€" + value.price + "</h6>" +
                                "<h6 class='units'>Units in Stock: " + value.units + "</h6>" +
                                "<a class='btn btn-shop' id='reserve' href='shop-reserve.html?id=" + value.id +
                                   "&price=" + value.price + "'>Reserve</a>" +
                            "</div>" +
                        "</div>" +                                   
                    "</div>"
                        );  // end of 'append'
			});  // end of 'each'
		},
		error: function(e){
			
			alert("Failed get All Products!");
		}
	});
   
   $(".list #protein").click(function(event){
	  
	   console.log("clicked");
	   event.preventDefault();
   });
});