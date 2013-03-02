
$(document).ready(function () {
    /*Função que altera a borda dos inputs tipo text quando o mesmo é focado ou retirado o foco*/
    borderController();
});


/*Função que altera a borda dos inputs tipo text quando o mesmo é focado ou retirado o foco*/
function borderController() {
    var borda = "border: solid 1px #73A6FF;";

    /*insere a assinatura a ação FOCUS nos inputs do tipo text*/
    $('input').focus(function () {
        /*INSERE a borda customizada no textbox que sofreu a ação*/
        $(this).attr("style", borda);
    });

    /*insere a assinatura  a ação BLUR nos inputs do tipo text*/
    $('input').blur(function () {
        /*RETIRA a borda customizada no textbox que sofreu a ação*/
        $(this).removeAttr("style", borda);

    });
}