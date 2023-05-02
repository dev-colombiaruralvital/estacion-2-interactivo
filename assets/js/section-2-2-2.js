$(document).ready(function() {
    $('#section-2-2-2').pagepiling({
        sectionsColor: ['#0046B7', '#0046B7'],
        anchors: ['section-1', 'section-2'],
        keyboardScrolling: true,
        scrollOverflow: false
    })
    $.fn.pagepiling.setAllowScrolling(false)
    const modules = {
        'module-1': {
            title: 'ASPECTO CLAVE 1: LUGAR',
            content: '<strong>Definición:</strong> Este criterio restringe el sitio de ocurrencia de los nacimientos. En la estrategia Colombia Rural Vital, solo podrán certificarse los nacimientos ocurridos en el municipio donde trabaja el certificador y que hayan ocurrido en comunidad, es decir, si el nacimiento ocurrió en domicilio o en un lugar diferente a una clínica u hospital.<br><br>En este criterio se debe verificar que la familia del recién nacido o menor de un año vive o reside de forma permanente en el municipio.<br><br><strong>Instrucción para el certificador:</strong> el certificador extramural solo podrá certificar aquellos nacimientos en donde la madre del menor haya estado en seguimiento en el programa de gestantes o aquellos que, de forma eventual, haya ayudado en el parto de este niño o niña en el domicilio.<br><br>En poblaciones remotas que no tienen atenciones en salud de forma periódica por parte de equipos extramurales, es usual que los partos sean atendidos por personas reconocidas por la comunidad como parteras o parteros.  Si en su municipio la institución en salud cuenta con un dialogo permanente con estas personas, su testimonio puede ayudarle a establecer que en verdad los padres del menor de edad que solicitan la certificación del nacimiento son quienes dicen ser.',
        },
        'module-2': {
            title: 'ASPECTO CLAVE 2: TIEMPO',
            content: '<strong>Definición:</strong> Este criterio restringe el tiempo de ocurrencia o edad de los menores a quienes se les realiza la certificación médica de nacido vivo.<br><br><strong>Instrucción para el certificador:</strong> el  certificador extramural solo podrá aplicar la entrevista vital de nacimiento, cuando el niño o niña a certificar haya nacido 12 meses previos al conocimiento del caso. Es decir, el  niño o niña debe tener menos de un año de edad al momento de realizar la certificación.',
        },
        'module-3': {
            title: 'ASPECTO CLAVE 3: PERSONA',
            content: '<strong>Definición:</strong> Este criterio establece las personas relacionadas con el nacimiento, dando alcance al recién nacido y sus padres.<br><br><strong>Instrucciones para el certificador:</strong> Debido a que la información de la entrevista es aportada directamente por la familia del recién nacido o menor de un año, se deberá verificar o constatar lo siguiente en lo referido a personas relacionadas con el hecho vital:<br><br><strong>1.1	El menor a certificar nació con vida</strong><br>La certificación de nacimiento únicamente se expide a aquellos niños o niñas que al momento del parto o alumbramiento estaban con vida, es decir, que el(a) recién nacido(a) respiró, se movió o lloró en algún momento. El formulario de entrevista vital cuenta con preguntas que le apoyarán a establecer si el recién nacido a certificar vivía o no al momento de nacer.<br><br>En los casos en los cuales el niño haya nacido muerto debe informarles a los padres del niño/a que no es necesario realizar la expedición de un certificado médico de nacimiento ni del correspondiente registro civil. No obstante, se realizará el certificado médico de defunción relacionando la información de la madre del menor.<br><br><strong>1.2 El mejor informante es quien realiza la entrevista</strong><br>La persona que provee la información soporte del hecho vital ocurrido en comunidad se denomina “ENTREVISTADO”. En nacimientos, la persona idónea corresponderá a la madre del menor nacido vivo; sin embargo, existen diferentes situaciones en las que esto no se puede garantizar sea por la muerte de la madre del menor al momento del parto o por otros condicionantes. En orden de preferencia, los entrevistados para nacimientos son la madre del menor y en su ausencia, el padre.',
        }
    }
    $('.option').click(function(){
        $('.option').removeClass('active')
        $(this).addClass('active')
        const module = $(this).data('content')
        const title = modules[module].title
        const content = modules[module].content
        const boton = modules[module].boton
        const modal = $(this).data('modal')
        $('.module-title').html(title)
        $('.module-content .text').html(content)
        $('.boton span').html(boton)
        $('.openModal').addClass('hide')
        $(modal).removeClass('hide')
    })
    $('.openModal').click(function(){
        const modal = $(this).data('modal')
        $('.modal-overlay').fadeIn()
        $(modal).css({'visibility': 'visible', 'opacity': '1'})
    })
    $('.close-modal-button').click(function(){
        const modal = $(this).data('modal')
        $('.modal-overlay').fadeOut()
        $(modal).css({'visibility': 'hidden', 'opacity': '0'})
    })
})