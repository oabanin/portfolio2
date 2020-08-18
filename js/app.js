
;(function($, undefined){
    $(function(){


        /* Header Fixed */

        const header =$('#header');
        const introH = $('#intro').innerHeight();
        let scrollOffset = $(window).scrollTop();
        
        function checkFixedHeaderMenu(scrollOffset){

            let hasClass = header.hasClass('fixed');

            if(!hasClass && scrollOffset>introH){
                header.addClass("fixed");
            }

            if(hasClass && scrollOffset<introH){
                header.removeClass("fixed");
            }
        }

    	checkFixedHeaderMenu(scrollOffset);

        $(window).on("scroll", function(event){
            scrollOffset = $(this).scrollTop();
            checkFixedHeaderMenu(scrollOffset);
        });

        /*Smooth scroll*/
        $('[data-scroll]').on('click', function (event){
            event.preventDefault();

            const blockId = $(this).data('scroll');
            const blockOffset = $(blockId).offset().top;

            $('[data-scroll]').removeClass('active');
            $(this).addClass('active');


             $('html, body').animate({
                scrollTop: blockOffset
              }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = blockId;
              });
        })
        
        /*burger-menu*/
        $('#nav-toggle').click(function(event){
            event.preventDefault;
            $(this).toggleClass( 'active');
            $('#nav').toggleClass( 'active');

        });

    });
})(jQuery);