function changeItemBoxes4() {
    if ($(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
        var geth = $('.home-box-4 .top-project:first-child .item:first-child figure').outerHeight();
        $('.home-box-4.part-list').each(function() {
            var countitem = $(this).find('.item').length
            $(this).find('.item figure').each(function() {
                $(this).css({
                    'height': 'calc(' + (geth / countitem) + 'px - 1rem)'
                })
            });
        })
    } else {
        $('.home-box-4 .part-list .item figure').each(function() {
            $(this).css({
                'height': 'initial'
            })
        });
    }
}

$(document).ready(function() {
    changeItemBoxes4()
});

$(window).resize(function() {
    changeItemBoxes4()
})