$(document).ready(function(){
    
    /*Slide botão nova imagem*/
    $('header button').click(function(){
        $('form').slideDown();
    })

    /*SlideUp botão cancelar*/
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})
