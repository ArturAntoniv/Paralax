$(document).ready(function() {
    $(window).scroll(function(event) {  /* Звертаємось до прокрутки (scroll)*/
        var s=$(this).scrollTop();       /* Отримую пікселі прокручені в вікні браузера */
        var w=$(this).outerWidth();       /* Отримую ширину вікна*/
        var h=$('.content').outerHeight();         /* Отримую висоту контентної частини*/
        var h_b=$('.parallax').outerHeight();   /* Отримую висоту верхнього блока*/
        var p = s/h*100;                        /* Вичисляю процент прокрутки */
        var p_b = s/h_b*100;                    /* Вичисляю процент прокрутки верхньї частини */
        var o = 1-1/100*p_b;                 /* Вичисляю НЕпрозорість*/

        var z_1=1+(w/10000*p_b);  /* Зробив ЗУМ туману*/
    $('.parallax__fog').css('transform','scale('+z_1+')');  /* Звертаюсь до туману і змінюватиму css, а саме scale */
    $('.parallax__fog').css('opacity',o); /* включаю прозорість туману */


        var z_2=1+(w/1000000*p); /* Зробив невеликий ЗУМ гори*/
    $('.parallax__montain_1').css('transform','scale('+z_2+')');  /* Звертаюсь до фонової гори і змінюватиму css, а саме scale */

        var hr=w/800*p_b;                    /* Зробив зміщення бокової правої гори*/
        var z_3=1+(w*0.000001*p_b);            /* Зробив невеликий ЗУМ гори*/
    $('.parallax__montain_2').css('transform','translate3D('+hr+'px,0,0) scale('+z_3+')');  /* Звертаюсь до бокової правої гори і змінюватиму scale і translate3D*/

        var hr_2=w/1500*p_b;                    /* Зробив зміщення бокової лівої гори*/
        var z_4=1+(w*0.000008*p_b);            /* Зробив невеликий ЗУМ гори*/
    $('.parallax__montain_3').css('transform','translate3D('+hr_2+'px,0,0) scale('+z_4+')');  /* Звертаюсь до бокової лівої гори і змінюватиму scale і translate3D*/

    });
});


