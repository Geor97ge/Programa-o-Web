/*
    Programação Web
    Prof. Orlewilson Maia
    Aluno (a): seu nome (digite seu nome:))
    Data: 30/04/2020
    Descrição: Validar campos com JavaScript.
*/
function validarCampos() {

    // obter valor dos campos
    conteudoNome = document.getElementById("campoNome").value;

    // verificar campos Nome
    if(!conteudoNome){
        window.alert("Nome deve ser preenchido!");
    } else {
        window.alert("campos validados");
    }   
}