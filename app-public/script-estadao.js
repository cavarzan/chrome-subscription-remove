setInterval(function () {
	var data = {
		paywall_ligado : 0,
		signwall_ligado : 0
	};
	var p = new PayWall(data);
	p.initCount();
	setCookie("OESP_PW_CONT", 0, 31);
	
    $('.window').hide();
    $('#mask').hide();
    $('#pw-mask').hide();
    $('#pw-content').hide();

    if(typeof oReload != 'undefined') oReload.start();
    $('html').css('overflow','auto');

    if(document.body.addEventListener){
        document.body.removeEventListener('touchstart', scrollTop, false);
        document.body.removeEventListener('touchmove', scrollTop, false);
        document.body.removeEventListener('touchend', scrollTop, false);
    }else{
        document.body.detachEvent('touchstart', scrollTop, false);
        document.body.detachEvent('touchmove', scrollTop, false);
        document.body.detachEvent('touchend', scrollTop, false);
    }
	
	

} , 2000);
