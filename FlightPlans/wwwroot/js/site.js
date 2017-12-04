// Write your JavaScript code.

$(document).ready(function () {
    var term = document.getElementById("#form");
    var url = "https://api.skypicker.com/places";

    var options = "";

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vpc2hhZG93IiwiYSI6ImNqOXE5aGxoZjAyeGIzM3Fxc2F0MmZvc2gifQ.wRPKceFPLIsKsrJgInYXYA';
    var map = new mapboxgl.Map({
        container: 'map',
        
        style: 'mapbox://styles/mapbox/streets-v9'
    });
    
   /* var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10'
    });*/
   

   /* $.ajax({
        type: "GET",
        url: url,
        success: function (response) {
            for (var i = 0; i < response.length; i++) {
                options += '<option data-id="' + i + '" value="' + response[i].id + '" >' + response[i].value + '</option>';
            }
            document.getElementById('datalistFrom').innerHTML = options;
            document.getElementById('datalistTo').innerHTML = options;
        },
        dataType: "json"//set to JSON    
    });
*/
    //https://www.mapbox.com/mapbox-gl-js/api/

    // Datum
    /*var dates = $("#departure, #return").datepicker({
        defaultDate: "+2w",
        changeMonth: true,
        numberOfMonths: 2,
        dateFormat: 'd/mm/yy',
        onSelect: function (selectedDate) {
            var option = this.id === "departure" ? "minDate" : "maxDate",
                    instance = $(this).data("datepicker");
            date = $.datepicker.parseDate(
                    instance.settings.dateFormat ||
                    $.datepicker._defaults.dateFormat,
                    selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);

            console.log($("#departure").datepicker().val());
        }
    });*/

});



/*
function getFlights() {
    var flightFrom = $("#srchFrom").val();
    var flightTo = $("#srchTo").val();
    var dateFrom = $("#departure").datepicker().val();
    var dateTo = $("#return").datepicker().val();
    console.log(flightFrom + ", " + flightTo + ", " + dateFrom + ", " + dateTo);

    var urlFlights = "https://api.skypicker.com/flights?flyFrom=" + flightFrom + "&to=" + flightTo + "&dateFrom=" + dateFrom;//+"&dateTo="+dateTo;
    var obsah;
    $.ajax({
        type: "GET",
        url: urlFlights,
        success: function (response) {
          console.log(response);
        },
        dataType: "json"//set to JSON    
    });
}*/