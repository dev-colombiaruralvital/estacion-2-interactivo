$(document).ready(function() {
    $('.openBox').on('click', function() {
        let elem = $(this).data('target')
        $(`.title-${elem}`).removeClass('animate__animated')
        $(`#${elem}`).addClass('show')
    })
    if ($('#pagepiling').length > 0) {
        $('#pagepiling').pagepiling({
            direction: 'horizontal',
            sectionsColor: ['#ffffff', '#004520s', '#ffffff'],
            verticalCentered: false,
            navigation: true,
            anchors: ['section-1', 'section-2', 'section-3'],
            keyboardScrolling: false
        });
        $.fn.pagepiling.setAllowScrolling(false)
    }
    $('#mapa').load('./assets/img/mapa.svg')
    $('.hoverable').hover(function() {
        console.log("Foasd")
    })
    $('.content-box-header').on('click', function() {
        $(this).removeClass('animate__pulse')
        const content = $(this).data('content');
        $(`#${content}`).css('opacity', '1').addClass('animate__fadeInDown')
    })
})

function addClassBlue (element) {
    $('.' + element).addClass('blue')
}

function removeClassBlue (element) {
    $('.' + element).removeClass('blue')
}

function show (element) {
    $('.location.' + element).addClass('animate__swing')
    $('.location.' + element).css('opacity', '1')
}