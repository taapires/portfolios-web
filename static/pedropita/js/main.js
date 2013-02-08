$(document).ready(function(){

$('#container .works').hover(
        function(){
            var w = $(this).width() + "px";
            var overlay = $('.overlay1', this);
            overlay.stop().css({display: "block", width: w}).animate({top: "130px"});
		},
		function(){
            var overlay = $('.overlay1', this);
			overlay.stop().animate({top: "200px"});	
		});
});

function placeholder(){
    for (var i = 0; i < 7; i++) {
        $('#container').after('<p>test</p>');
    }
}

/*$('#one').click(function(e){
    e.preventDefault();
    $('#container').slideDown('slow', function(){
            $('#container').fadeOut(1500);
    });*/
    

$('#container .works').click(function(e){
    e.preventDefault();
    $('section#container').css({boxShadow : "0 0 0px 0px rgba(0, 0, 0, 0)"})
    $('#one').hide(2500);
    $('#two').delay(2000).hide(2000);
    $('#three').delay(3000).hide(2000);
    $('#four').delay(4000).hide(2000);
    $('#five').delay(5000).hide(2000);
    $('#six').delay(6000).hide(2000);

});