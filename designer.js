function desenharCards(container){
    container.innerHTML = ''

    for (let i = 0; i < comida.listaDeComidas.length; i++){
        container.innerHTML +=`
        
        <div class = 'card'> 
            <img class = 'foto' src = 'img/fotoPadrao.jpg'/>
            <div class = 'nome'> ${comida.listaDeComidas[i].nome}</div>
            <div class = 'descricao'> ${comida.listaDeComidas[i].descricao}</div>
            <div class = 'precoEmedida'> R$ ${comida.listaDeComidas[i].preco} ${comida.listaDeComidas[i].medida}</div>
        <div>
        `;
    }
}