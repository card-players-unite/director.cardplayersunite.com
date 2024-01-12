
$(document).ready(function () {



displayPricingTickData();

//##	setInterval(displayPricingTickData, 8 * 1000);

});

function displayPricingTickData() {

	console.debug(" -> :: displayPricingTickData()");	

	$.ajax({

		type: "GET",
		
		url: upstreamAPIURL + "/tournaments/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            alert("api got a call!");

	        console.log("responseData / ", responseData);

            var trHTML = '';

            for (var i = 0 ; i < responseData.length; i++) {
	        
                trHTML += "<tr scope='row'>";

                trHTML += '<td class="">' + responseData[i].id + '</td>';

                trHTML += '<td class="">' + responseData[i].name + '</td>';

                trHTML += '<td class="">' + responseData[i].description + '</td>';	

                trHTML += '<td class="">' + responseData[i].rental_price + '</td>';

                trHTML += '<td class="">' + responseData[i].rented_user_id + '</td>';

            }

            $('#activity-display-table  > tbody').html(trHTML); 

		},

		error: function (jqXHR, status) {

            alert("api failed!");

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

}
