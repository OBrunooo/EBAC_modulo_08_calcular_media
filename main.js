const form = document.getElementById('form-atividade'); 
const resultado = document.getElementsByClassName('media-final-resultado');
const imgReprovado = "<img src='img/reprovado.png'alt='emoji triste'/>";
const imgAprovado = "<img src='img/aprovado.png' alt='emoji celebrando'/>";
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Qual a nota mínima?'));
const atividades = [];
const notas = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizatabela();
    atualizaMediaFinal();
})

function adicionarlinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    }
    else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizatabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediafinal = calculaMediaFinal();
    document.getElementById('mediafinal').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinima ? spanAprovado : spanReprovado;
} 

function calculaMediaFinal() {
    let somaNotas = 0;
    
    for(let i=0; i<notas.length; i++){
        somaNotas+=notas[i]
    }

    return somaNotas/notas.length
}


