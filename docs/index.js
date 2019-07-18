var logoHeight = $('#myCarousel img').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('##myCarousel img').css('margin-top', margintop);
    }
