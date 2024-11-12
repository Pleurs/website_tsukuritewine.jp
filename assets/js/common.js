$(function(){
	$('a[href*=\\#]:not([href=\\#])').on('click',function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top;
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});

	var state = false;
	var scrollpos;

	$('.menu').on('click', function(){
		if(state == false) {
			scrollpos = $(window).scrollTop();
			$('body').addClass('fixed').css({'top': -scrollpos});
			$(this).addClass('on');
			$('.menuBox').stop().slideToggle();
			state = true;
		}else{
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			$(this).removeClass('on');
			$('.menuBox').stop().slideToggle();
			state = false;
		}
		return false;
	});

	$('.menuBox li a:not(.accordion)').on('click',function(){
		if(window.innerWidth < 897){
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			$('.menu').removeClass('on');
			$('.menuBox').slideUp();
			state = false;
		}
	});
	$(window).on('scroll',function () {
        if($(window).scrollTop() > $(window).height()) {
            $('.pageTop').fadeIn();
        }else{
            $('.pageTop').fadeOut();
        }
    }).trigger('scroll');
});

$(window).on('load',function(){
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){
		localLink = localLink.slice(localLink.indexOf("#")+1);
		if($('#'+localLink).length){
			setTimeout(function(){
				$('html,body').animate({scrollTop: $('#'+localLink).offset().top}, 500);
			},100);
		}
	}
});