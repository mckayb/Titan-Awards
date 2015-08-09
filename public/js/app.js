$(".more_details").on("click", function() {
    var honoreeInformation = $(this).siblings(".honoree_information");
    var overflow = honoreeInformation.css("overflow");
    if ( overflow === "hidden" ) {
        honoreeInformation.css({
            overflow: "visible",
        }).animate({
            height: honoreeInformation[0].scrollHeight
        }, 500);
        honoreeInformation.addClass( "no_after" );
        $(this).text("Hide Details");
    } else if ( overflow === "visible" ) {
        honoreeInformation.css({
            overflow: "hidden"
        }).animate({
            height: "250px"
        }, 500);

        honoreeInformation.removeClass( "no_after" );
        $(this).text("Show Details");
    }
});

function jumpTo( key ) {
    window.location.hash = key;
}
