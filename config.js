
var ano = document.getElementById('nascimento');
var legenda = document.getElementById('legenda');
var resultado = document.getElementById('resultado');
var final = document.getElementById('final');
var imagem_ele = document.getElementById('imagem');
var sexo = document.getElementsByName('sexo');


function validacao(){
if(ano.value >= 1900 && ano.value <=2100){
    legenda.innerHTML = '';

    var idade = new Date().getFullYear() - Number(ano.value);
    var genero = '';
    var imagem = '';

    if(sexo[0].checked){
        genero = 'um Homem';

        if(idade >= 1 && idade <= 5){
            imagem = 'imagens/h_bebe.png';
        }else if(idade >= 6 && idade <= 17){
            imagem = 'imagens/h_crianca.png';
        }else if(idade >= 18 && idade <= 25){
            imagem = 'imagens/h_jovem.png';
        }else if(idade >= 26 && idade <= 59){
            imagem = 'imagens/h_adulto.png';
        }else if(idade >= 60){
            imagem = 'imagens/h_idoso.png';
        }else{
            
        }
    }else if(sexo[1].checked){
        genero = 'uma Mulher';

        if(idade >= 1 && idade <= 5){
            imagem = 'imagens/m_bebe.png';
        }else if(idade >= 6 && idade <= 17){
            imagem = 'imagens/m_crianca.png';
        }else if(idade >= 18 && idade <= 25){
            imagem = 'imagens/m_jovem.png';
        }else if(idade >= 26 && idade <= 59){
            imagem = 'imagens/m_adulto.png';
        }else if(idade >= 60){
            imagem = 'imagens/m_idoso.png';
        }else{

        }
    }else{
        genero = 'um genero Indefinido'
        imagem = 'imagens/lgbt.jpg';

    }


    imagem_ele.src = imagem;
    resultado.style.display = 'block';
    final.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.';


}else{

    legenda.innerHTML = 'Algum erro com a data de nascimento!';
    resultado.style.display = 'none'; 



}
}