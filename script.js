$(document).ready(function(){
	
	$('.con:first').show();
	$('.nav li:first').addClass('seen');

	$('.nav li').click(function() {
		index = $(this).index();
		$('.nav li').removeClass('seen');
		$(this).addClass('seen');
		$('.con').hide();
		$('.con').eq(index).show();
	});



	$('.st3').click(function(){
		if($(this).hasClass('show1')){
			$(this).removeClass('show1');
			$(this).children('i').removeClass('fa-minus');
			$(this).next().slideUp();
			$(this).parent().removeClass('seen');
		}else{
			$('.st3').removeClass('show1');
			$(this).addClass('show1');
			$('.st3').children('i').removeClass('fa-minus');
			$(this).children('i').addClass('fa-minus');
			$('.st3').next().slideUp();
			$(this).next().slideDown();
		

		}
	});


});