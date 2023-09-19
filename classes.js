class Doce{
    constructor(foto, nome, descricao, medida, preco){
        this.foto = foto;
        this.nome = nome;
        this.descricao = descricao;
        this.medida = medida;
        this.preco = preco;
    }
}

class Cardapio{
    constructor(titulo){
        this.titulo = titulo;
        this.listaDeComidas = [];
    }
    
    adicionarDoce(Doce){
        this.listaDeComidas.push(Doce);
    }
}