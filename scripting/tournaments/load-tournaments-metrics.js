
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

        //    alert("api got a call!");

	        console.log("responseData / ", responseData);

            var trHTML = '';

            for (var i = 0 ; i < responseData.length; i++) {
	        
                trHTML += '<tr class="text-gray-700 dark:text-gray-400">';

                trHTML += '<td class="px-4 py-3 text-sm">' + responseData[i].id + '</td>';

                trHTML += '<td class="px-4 py-3 text-sm">' + responseData[i].name + '</td>';

                trHTML += '<td class="px-4 py-3 text-sm">' + responseData[i].description + '</td>';	

                trHTML += '<td class="px-4 py-3 text-sm">' + responseData[i].rental_price + '</td>';

        //        trHTML += '<td class="px-4 py-3 text-sm">' + responseData[i].rented_user_id + '</td>';

                     trHTML += ' <td class="px-4 py-3 text-xs">';
                    trHTML += '    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">';

//                    trHTML += '      Approved';

                    trHTML += responseData[i].rented_user_id

                   trHTML += '     </span>';
                  trHTML += '    </td>';
            }

            $('#tournament-all-listing > tbody').html(trHTML); 

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
