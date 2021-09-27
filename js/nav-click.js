function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top-60
        }, 500)
    });
}

ativaScrollSuave('a[href*=artistas]');
ativaScrollSuave('a[href*=sobre]');
ativaScrollSuave('a[href*=galeria]');
ativaScrollSuave('a[href*=local]');
ativaScrollSuave('a[href*=contato]');
ativaScrollSuave('a[href*=equipe]');