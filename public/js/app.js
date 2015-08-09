$(".more_details").on("click", function() {
    var honoreeInformation = $(this).siblings(".honoree_information");
    var overflow = honoreeInformation.css("overflow");
    if ( overflow === "hidden" ) {
        honoreeInformation.css("overflow", "visible");
        honoreeInformation.css("height", "auto");
    } else if ( overflow === "visible" ) {
        honoreeInformation.css("overflow", "hidden");
        honoreeInformation.css("height", "250px");
    }
});
