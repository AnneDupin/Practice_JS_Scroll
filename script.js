// // Fonction Scroll

// $(window).scroll(function() {
// //position actuelle sur le document
// var wintop = $(window.scrollTop(),
// // hauteur du document en entier
// docheight = $(document).height(),
// //hauteur de la fenêtre
// winheight = $(window).height();

// // position actuelle / hauteur fenêtre * 100 pour avoir le pourcentage d'où on est sur la page
// var scrolled = (wintop/(docheight-winheight))*100;

// //changer le css de la classe scroll
// $('.scroll').css('width',(scrolled + '%'));
// // On prend la classe Scroll > rajoute largeur + % pour la changer
// })

$(window).scroll(function(){

    var wintop = $(window).scrollTop(),
    
    docheight = $(document).height(),
    
    winheight = $(window).height();

    var scrolled = (wintop/(docheight-winheight))*100;

    $('.scroll').css('width',(scrolled + '%'));

})