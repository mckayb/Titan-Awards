$(".more_details").on("click", function() {
    var honoreeInformation = $(this).siblings(".honoree_information");
    var overflow = honoreeInformation.css("overflow");
    var distance = honoreeInformation[0].scrollHeight;
    var rate = 2000;
    var time = (distance / rate).toFixed(3) * 1000;


    if ( overflow === "hidden" ) {
        honoreeInformation.css({
            overflow: "visible",
        }).animate({
            height: honoreeInformation[0].scrollHeight
        }, time);
        honoreeInformation.addClass( "no_after" );
        $(this).text("Hide Details");
    } else if ( overflow === "visible" ) {
        honoreeInformation.css({
            overflow: "hidden"
        }).animate({
            height: "180px"
        }, time);
        honoreeInformation.removeClass( "no_after" );
        $(this).text("Show Details");
    }
});

function jumpTo( key ) {
    $("a[href='#contact']")[0].click();
}
