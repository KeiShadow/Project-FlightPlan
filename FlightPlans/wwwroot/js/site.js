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

   

    $.ajax({
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

    //https://www.mapbox.com/mapbox-gl-js/api/

    // Datum
    var dates = $("#departure, #return").datepicker({
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
    });

});




function getFlights() {
    var path = "";
    var flightFrom = $("#srchFrom").val();
    var flightTo = $("#srchTo").val();
    var dateFrom = $("#departure").datepicker().val();
    var dateTo = $("#return").datepicker().val();
    console.log(flightFrom + ", " + flightTo + ", " + dateFrom + ", " + dateTo);

    var urlFlights = "https://api.skypicker.com/flights?flyFrom=" + flightFrom + "&to=" + flightTo + "&dateFrom=" + dateFrom +"&asc=0";//+"&dateTo="+dateTo;
    var obsah;
    $.ajax({
        type: "GET",
        url: urlFlights,
        success: function (response) {
            for (var i = 0; i < response["data"].length; i++) {
                path += "<div class=\"card\">" +
                            "<div class=\"card-body\">" +
                    "<div class=\"row\">"+
                        "<div class=\"col-sm-2\" >"+
                    " <div class=\"text-left\" id=\"spolecnost\">" +
                            "id="+i+"<br>"+
                    " <h6> Společnosti: <br> " + getAirlines(response,i) +"</h6>" +
                           " </div> " +
                        " </div >" +
                        "<div class=\"col-sm-3\">"+
                            getFromTo(response, i)+
                        "</div>"+
                        "<div class=\"col-sm-3\">" +
                            getDuration(response, i)+
                        "</div>" +
                        "<div class=\"col-sm-3\">" +
                            getPrice(response, i) + " Eur <br/>" +
                            "<button id="+ i +" class=\"btn\"> Click for booking</button>"+
                        "</div>" +
                      " </div >"+
                     "</div>" +
                    "</div>";             
            }
            document.getElementById("lety").innerHTML = path;
            console.log(response);         
        },
        dataType: "json"//set to JSON    
    });


}

var obj = $.getJSON("js/airlines.json", function (data) {
    return data;
});

 


function getAirlines(response, i) {  
    var airlines = "";
    if (response["data"][i]["airlines"].length >= 2) {
        for (var y = 0; y < obj["responseJSON"].length; y++) {
            for (var j = 0; j < response["data"][i]["airlines"].length; j++) {
                if (response["data"][i]["airlines"][j] === obj["responseJSON"][y].id) {
                    airlines += obj["responseJSON"][y].name +" <br>";
                }
            }
           
        }
        airlines = airlines.substring(0, airlines.lastIndexOf(" "));
        console.log();
        return airlines;
    } else{
        
        for (var y = 0; y < obj["responseJSON"].length; y++) {
            if (response["data"][i]["airlines"][0] === obj["responseJSON"][y].id) {
                return obj["responseJSON"][y].name;
            }
        }     
    }
}

function getFromTo(response, i) {
    return response["data"][i]["cityFrom"] + " - " + response["data"][i]["cityTo"];
}
function getDuration(response, i) {
    return response["data"][i]["fly_duration"];
}
function getPrice(response, i) {
    return response["data"][i]["price"];
}