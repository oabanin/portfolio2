
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
        
    });
})(jQuery);