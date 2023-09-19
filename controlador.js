let nome = document.getElementById('iptNome');
let descricao = document.getElementById('iptDescricao');
let medida = document.getElementById('iptMedida');
let preco = document.getElementById('iptPreco');
let buttonCadastrar = document.getElementById('btnCadastrar');
let divContainerCards = document.getElementById('containerDeCards')

let listaDeComidas = [];

let comida = new Cardapio('Apenas doces');

buttonCadastrar.addEventListener('click', clicarEmCadastrar);

function clicarEmCadastrar(){
    let doceNovo = new Doce(
        '',
        nome.value,
        descricao.value,
        medida.value,
        preco.value
    );

    comida.adicionarDoce(doceNovo);
    desenharCards(divContainerCards);
}
