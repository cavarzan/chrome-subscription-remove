//var div = document.getElementsByClassName('overlay');
//var div2 = document.getElementsByClassName('fora2 modal');
//console.log(div);
//if (div) {
//    console.log(div);
//    div[0].outerHTML = '';
//}
//if (div2) {
////document.removeChild(div);
//    console.log(div2);
//    div2[0].outerHTML = '';
//    //div.parentNode.removeChild(div);
//}


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

