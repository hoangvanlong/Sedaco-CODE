function CCHeader1() {
    $('.canhcam-header-1 .navbar-toggler').on("click", function() {
        $('.canhcam-header-1').toggleClass('expand')
    });
    $('.canhcam-header-1 .btnsearch .btn').on("click", function() {
        $('.canhcam-header-1 .search').toggleClass('active')
        $('.canhcam-header-1 .btnsearch').toggleClass('active')
    });
    $('.canhcam-header-1 .closebnt').on("click", function() {
        $('.canhcam-header-1').toggleClass('expand')
    });
};

function getMapto() {
    if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
        $('[k-menu-map-to]').each(function() {
            var getTo = $(this).attr('k-menu-map-to')
            $(getTo).html($(this).clone().removeAttr('k-menu-map-to').show())
            $(this).hide()
        })
    } else {
        $('[k-menu-map-to]').each(function() {
            var getTo = $(this).attr('k-menu-map-to')
            $(getTo).html('')
            $(this).show()
        })
    }
}

$(function() {
    CCHeader1();
    getMapto()
})


$(window).resize(function() {
    getMapto()
    $('.canhcam-header-1').removeClass('expand')
    $('.canhcam-header-1 .search').removeClass('active')
    $('.canhcam-header-1 .btnsearch').removeClass('active')
})