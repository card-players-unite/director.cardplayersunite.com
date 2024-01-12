
$(document).ready(function () {

    // run it first

    fillDashboardTournaments();

    // wait the amount of time then run the second one

    setInterval(displayPricingTickData, 10 * 1000);

});

function fillDashboardTournaments() {

	console.debug(" -> :: fillDashboardTournaments()");	

	$.ajax({

		type: "GET",
		
		url: upstreamAPIURL + "/tournaments/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

        console.log("responseData / ", responseData);

        fillTournamentTable(responseData);

        countTournamentStatus(responseData);

	},

	error: function (jqXHR, status) {

		console.log("Something Went wrong");

		console.log("exception");
		
		console.log(jqXHR);

		console.log("status");
		
		console.log(status);

	}});

}

function fillTournamentTable(responseData) {

    var htmlTableContents = '';

    for (var i = 0 ; i < responseData.length; i++) {

        htmlTableContents += '<tr class="text-gray-700 dark:text-gray-400">';

        htmlTableContents += '<td class="px-4 py-3 text-sm">' + responseData[i].id + '</td>';

        htmlTableContents += '<td class="px-4 py-3 text-sm">' + responseData[i].name + '</td>';

        htmlTableContents += '<td class="px-4 py-3 text-sm">' + responseData[i].description + '</td>';	

        htmlTableContents += '<td class="px-4 py-3 text-sm">' + responseData[i].rental_price + '</td>';

        htmlTableContents += ' <td class="px-4 py-3 text-xs">';

        htmlTableContents += '    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">';

        htmlTableContents += responseData[i].rented_user_id

        htmlTableContents += '     </span>';

        htmlTableContents += '    </td>';

    }

    $('#tournament-all-listing > tbody').html(htmlTableContents); 

}

function countTournamentStatus(responseData) {

    alert("countTournamentStatus");

    sizeAll = responseData.length;

    $('#display-tournament-total-count').text(sizeAll); 

    sizeUpcoming = -1;

    $('#display-tournament-upcoming-count').text(sizeUpcoming); 

}
