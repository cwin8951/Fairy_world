$(function () {
    var collums = 3;//ÁÐ
    var rows = 6;//ÐÐ
    var wrap = $('.content');
    var w = wrap.width() / rows;
    var h = wrap.height() / collums;


    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < collums; c++) {

            $('<li><div class="box"></div></li>').width(w).height(h)
                .css({
                    'left': w * c + 'px',
                    'top': h * r + 'px',
                    'transform': 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg) ' +
                    'translateX(' + (30*c-60) + 'px)' +
                    'translateY(' + (30*r-60) + 'px)'
                })
                .find('.box')
                .css({
                    'background-image': 'url(images/' + (r * collums + c) + '.jpg)',
                    'transform': 'scale(0.9)'
                })
                .end()
                .appendTo(wrap)
        }
    }

    var change = true;
    wrap.find('li').on('click', function () {
        if (change == true) {
            var bgImg = $(this).find('div').css('background-image');
            var bgLeft = 0;
            var bgTop = 0;
            $('.content li').each(function (index) {
                var $this=$(this);
                $(this).delay(40*index).animate({"opacity":0},200, function () {
                    $this.css({
                        'transform': ' rotate(0deg) ' +
                        'translateX(0)' +
                        'translateY(0)'
                    });
                    $this.find('div').css({
                        'background-image': bgImg,
                        'background-size': 'auto',
                        'backgroundPositionX': -bgLeft,
                        'backgroundPositionY': -bgTop,
                        'transform': 'scale(1)'
                    });
                    bgLeft += 196;
                    if (bgLeft >= 980) {
                        bgTop += 100;
                        bgLeft = 0;
                    }
                    $this.animate({"opacity":1},300);
                })




            });
            change = false;

        } else if (change == false) {

            $('.content li').each(function (index) {
                var c=index %collums;
                var r=parseInt(index/collums);
                var $this=$(this);
                $(this).delay(40*index).animate({"opacity":0},200, function () {
                    $this.css({
                        'transform': 'rotate(' + (Math.random() * 40 - 20) + 'deg)' +
                        'translateX(' + (30*c-60) + 'px)' +
                        'translateY(' + (30*r-60) + 'px)'
                    });
                    $this.find('div').css({
                        'background-image': 'url(images/' + index + '.jpg)',
                        'background-size': 'cover',
                        'transform': 'scale(0.9)'
                    });
                    $this.animate({"opacity":1},200);
                })

            });
            change = true;
        }
    })
})

