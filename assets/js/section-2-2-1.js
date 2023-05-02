$(document).ready(function() {
    $('#section-2-2-1').pagepiling({
        sectionsColor: ['#392F6B', '#392F6B'],
        anchors: ['section-1', 'section-2'],
        keyboardScrolling: true,
        scrollOverflow: false
    })
    $.fn.pagepiling.setAllowScrolling(false)
    const modules = {
        'module-1': {
            title: 'Módulo de gestión',
            content: 'Permite hacer seguimiento al desarrollo de las actividades de verificación realizadas por el certificador extramural. Este módulo contiene una breve introducción del propósito de la entrevista vital, una bitácora de visitas para cada caso y la grabación de la autorización del entrevistado para realizar la entrevista vital de nacimiento; Además, solicita información básica como certificador extramural y el número único de antecedente RUAF-ND asignado al caso.',
            img: 'assets/img/module-1.png'
        },
        'module-2': {
            title: 'Módulo del entrevistado',
            content: 'Consolida la información básica del entrevistado e informante clave del caso relacionado con el nacido vivo a gestionar.  Esto incluye nombres y apellidos completos, tipo y número de documento de identificación, sexo, edad, grado escolar cursado y tipo de relación con el niño(a) a certificar.',
            img: 'assets/img/module-2.png'
        },
        'module-3': {
            title: 'Módulo de datos del nacimiento e información de los padres',
            content: 'Recopila la información básica del nacimiento (municipio y lugar de ocurrencia del nacimiento, sexo, fecha de nacimiento, tipo de parto, persona que atendió el parto, tiempo de gestación, número de consultas prenatales y reconocimiento étnico) así como los datos básicos de la madre (nombres, documento de identidad, edad, municipio de residencia, hijos previos, nivel educativo, entre otros datos) y los datos del padre (edad y nivel educativo).',
            img: 'assets/img/module-3.png'
        }
    }
    $('.option').click(function(){
        $('.option').removeClass('active')
        $(this).addClass('active')
        const module = $(this).data('content')
        const title = modules[module].title
        const content = modules[module].content
        const img = modules[module].img
        $('.module-title').html(title)
        $('.module-content .text').html(content)
        $('.module-content img').attr('src', img)
    })
})