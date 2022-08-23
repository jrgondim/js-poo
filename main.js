class Products {
    codigo;
    descricao;
    estoque;
    preco;

    comprar(quantidadeComprada){
        if(quantidadeComprada > 0) {
            this.estoque += quantidadeComprada;
        }
    }

    vender(quantidadeVendida){
        if(this.estoque < quantidadeVendida) {
            console.log('Sem estoque para esse item')
        } else {
            this.estoque -= quantidadeVendida;
        }
    }
}

const produto1 = new Products();
produto1.codigo = 001;
produto1.descricao = "Água Mineral Xavequinho 20 Litros";
produto1.estoque = 0;
produto1.preco = 12.40;

const produto2 = new Products();
produto2.codigo = 002;
produto2.descricao = "Água Mineral Miguelinho 5 Litros";
produto2.estoque = 0;
produto2.preco = 4.1;

produto1.comprar(5);
produto2.comprar(10)

produto1.vender(4)
produto2.vender(8);

console.log(produto1, produto2);