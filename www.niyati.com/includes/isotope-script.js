var isotopeBreakpoints = [
                            { min_width: 1680, columns: 4 }, // Desktop
                            { min_width: 1285, max_width: 1680, columns: 4 }, // iPad Landscape
                            { min_width: 1024, max_width: 1284, columns: 3 }, // iPad Portrait
                            { min_width: 768, columns: 2 }, // iPhone Landscape
                            { min_width: 479, max_width: 768, columns: 2 },
                            { max_width: 768, columns: 1 } // iPhone Portrait
                            
                         ];

jQuery(document).ready(function ($) {
    var $container = $('.full-portfolio .items');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            onLayout: realignCaptions
        });
    });

    // hook to window resize to resize the portfolio items for fluidity / responsiveness
    $(window).smartresize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        for ( var i = 0; i < isotopeBreakpoints.length; i++ ) {
            if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                    $container.find('.item').each(function() {
                        $(this).width( Math.floor( $container.width() / isotopeBreakpoints[i].columns ) );
                    });

                    break;
                }
            }
        }
    });

    $(window).trigger( 'smartresize' );
	$('.filter li a').click(function () {

        $('.filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
	});
function realignCaptions($container) {
  $container.each(function($) {
      	 var $h5 = jQuery(this).find('a h5');
      	 $h5.css( 'margin-top', jQuery(this).height() / 2 - $h5.get()[0].clientHeight / 2 );
    });
}

var $wrapper = jQuery('.full-portfolio .items .item');
$wrapper.find('a h5').css('visibility', 'hidden');

jQuery(window).load(function($) {
    $wrapper.find('a h5').css('visibility', 'visible');
    realignCaptions($wrapper);
});

