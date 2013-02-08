//Smooth Scrolling
jQuery(document).ready(function($) {
 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1250);
	});
});

//brs
jQuery(document).ready(function($) {
	for(var i=0; i<15; i++){
		$('div#intro-logo').after("<br>")
	}
});


$(document).ready(function($) {
	var originalContent = $('p#tp').html();
	$('p#tp').hover(function() {
			$(this).html('<p id="tp">code()</p>');
			$(this).css({ color: "#3A3A3A", borderWidth: "" });
	}, function() {
			$(this).html(originalContent);
			$(this).css({ color: "#242424", borderWidth: "" });

		});
});

/*
$(document).ready(function($) {
	var originalContent = $('div.tosco').html();
	$('div.tosco').hover(function() {
				$(this).html('<div class="tosco2">MEGA TOSCO</div>');
			},
			function() {
			$(this).html(originalContent);
		});
});

*/