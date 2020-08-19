
; (function ($, undefined) {
    $(function () {

        $data_scroll = $('[data-scroll]');
        $data_collapse = $('[data-collapse]');
        $nav_toggle = $('#nav-toggle');
        $nav = $('#nav');

        /*Change active on scroll*/
        const offsets = {};
        $.each($data_scroll, function (index, value) {
            const scrolledBlock = $(this).data('scroll');
            if (index != 0) {
                let offset = $(scrolledBlock).offset().top;
                offsets[offset] = scrolledBlock;
            }
        })
        /* Header Fixed */

        const header = $('#header');
        const introH = $('#intro').innerHeight();
        let scrollOffset = $(window).scrollTop();

        function checkFixedHeaderMenu(scrollOffset) {

            let hasClass = header.hasClass('fixed');

            if (!hasClass && scrollOffset > introH) {
                header.addClass("fixed");
            }

            if (hasClass && scrollOffset < introH) {
                header.removeClass("fixed");
            }
        }

        function checkActiveMenu(scrollOffset, offsets) {

            for (const offset in offsets) {
                if ((scrollOffset >= (offset - 100)) &&
                    (scrollOffset <= (+offset + 100))){

                    const active = offsets[offset];
                        $data_scroll.removeClass('active');
                    $("[data-scroll=\""+active).addClass('active');
                    break;
                }
            }
        }

        checkFixedHeaderMenu(scrollOffset);
        checkActiveMenu(scrollOffset, offsets);

        $(window).on("scroll", function (event) {
            scrollOffset = $(this).scrollTop();
            checkFixedHeaderMenu(scrollOffset);
            checkActiveMenu(scrollOffset, offsets);
        });

        /*Smooth scroll*/
        $data_scroll.on('click', function (event) {
            event.preventDefault();

            const blockId = $(this).data('scroll');
            let blockOffset = $(blockId).offset().top;
            if ($(window).width() < 720) blockOffset -= 30;


            $data_scroll.removeClass('active');
            $(this).addClass('active');

            $('html, body').animate({
                scrollTop: blockOffset
            }, 800);
        })

        /*burger-menu*/
        $nav_toggle.click(function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $nav.toggleClass('active');
        });

        $('#nav').children('.nav__link').click(function () {
            $nav.hasClass('active') && $nav.removeClass('active');
            $nav_toggle.hasClass('active') && $nav_toggle.removeClass('active');
        });

        /* Collapse */
        $data_collapse.click(function(event){
            event.preventDefault();
            const $blockId = $(this).data('collapse');
            $($blockId).slideToggle();

            
            $(this).parent().toggleClass('active'); 
           
            
            
        });

    });
})(jQuery);