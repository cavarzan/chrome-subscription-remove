var s = document.createElement('script');
s.src = chrome.extension.getURL('script-gazeta.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);

    jQuery("html,body").css("overflow","auto");

    var modal = jQuery(".overlay, .modal");

    if(modal.length == 0){
        if(callback != undefined){
            callback();
        }
    }else{
        jQuery(".overlay, .modal, .modal-lp").fadeOut("slow", function(){
            trata_modal();
            jQuery(".overlay").remove();
            jQuery(".modal").remove();
            jQuery(".modal-lp").remove();

            if(callback != undefined){
                callback();
            }
        });
    }

    setInterval(function () {
        fecha_modal();
    } , 2000);
};


