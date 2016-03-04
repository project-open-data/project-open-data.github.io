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
var shortCol = $('.short-col').outerHeight()
var tallCol = $('.tall-col').outerHeight()

function numbers(colA, colB) {
    if (colA > colB) {
        $(".tall-col").css({
            'height': ($(".short-col").outerHeight() + 'px')
        });
    } else if (colA === colB) {
        // console.log('The divs are the same height. Wow, what are the chances?');
    } else {
        $(".short-col").css({
            'height': ($(".tall-col").outerHeight() + 'px')
        });
    }
}

$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    if ($(".menu-toggle").css("display") == "block") {
        numbers(shortCol, tallCol);
    }
    if ($(".col-md-4, .col-md-5").css("float") == "left") {
        numbers(shortCol, tallCol);
    }
}



if ($('#back-to-top').length) {
    var scrollTrigger = 1250, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 1250
        }, 700);
    });
}


function placeFooter() {
    var winHeight = window.innerHeight;
    var divHeight = $(".usa-da-outter-wrap").height();
    var footerHeight = $(".usa-da-footer").innerHeight() + 20;

    if (winHeight >= divHeight) {
        $(".usa-da-footer").addClass("place-bottom").css("bottom", -footerHeight);
    } else if (winHeight <= divHeight) {
        $(".usa-da-footer").removeClass("place-bottom");
    } else if (divHeight >= winHeight) {
        $(".usa-da-footer").removeClass("place-bottom");
    }

}

$(window).load(function() {
    placeFooter()
});

$(window).resize(function() {
    placeFooter();
});