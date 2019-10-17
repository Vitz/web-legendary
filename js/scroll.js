
var handle = 0.0;
var locked = 0;

function burnRocket(idInter) {
    // Increment the value by 1
    if(handle < 1.0 ) {
		handle = handle + 0.1;
		document.getElementById("logo-burn").style.opacity = handle;
    }
	else{
		locked = 0;
		handle = 0.0;
		clearInterval(idInter);
	}
}


$(function(){
    var _top = $(window).scrollTop();
    var _direction;
    $(window).scroll(function(){
        var _cur_top = $(window).scrollTop();
        if(_top < _cur_top)
        {
            _direction = 'down';
			
        }
        else
        {	
			if (locked == 0)
			{
				var idInter = setInterval(function() {burnRocket(idInter); }, 100);
			}
			locked = 1;
            _direction = 'up';
        }
        _top = _cur_top;
    });
});


