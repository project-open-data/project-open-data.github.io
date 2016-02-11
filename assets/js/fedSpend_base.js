// BOOTSTRAP TOOLTIP AND POPOVER
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $('[data-toggle="popover"]').popover()

    $('body').on('click', function(e) {
        $('[data-toggle="popover"]').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});



// SET HEIGHT OF BLOCKS ON HOMEPAGE
    var dataIn = $('.data-in').outerHeight()
    var dataOut = $('.data-out').outerHeight()

    function numbers(colA, colB) {
        if (colA > colB) {
            $(".data-out").css({'height': ($(".data-in").outerHeight() + 'px')});
        } else if (colA === colB) {
            console.log('The divs are the same height. Wow, what are the chances?');
        } else {
            $(".data-in").css({'height': ($(".data-out").outerHeight() + 'px')});
        }
    }

$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".menu-toggle").css("display") == "block" ){
        numbers(dataIn, dataOut);
    }
        if ($(".col-md-4").css("float") == "left" ){
        numbers(dataIn, dataOut);
    }
}