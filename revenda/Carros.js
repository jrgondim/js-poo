export class Carros{
    _placa;
    _fabricante;
    _modelo;
    _ano;
    _km;
    _cor;
    _valorcompra;
    _valorvenda;
 


    constructor (placa, fabricante, modelo, ano, km, cor, valorcompra) {
        this._placa = placa;
        this._fabricante = fabricante;
        this._modelo = modelo;
        this._ano = ano;
        this._km = km;
        this._cor = cor;
        this._valorcompra = valorcompra;
        this._valorvenda = this._valorcompra + (this._valorcompra * 0.1);
    }


    get placa(){
        return this._placa;
    }

    get fabricante(){
        return this._fabricante;
    }

    get modelo(){
        return this._modelo;
    }

    get ano(){
        return this._ano;
    }

    get cor(){
        return this._cor
    }

    get valorcompra(){
        return this._valorcompra
    }

    get valorvenda(){
        return this._valorvenda;
    }


    set modelo(novoModelo){
        this._modelo = novoModelo;
    }

    set ano(novoAno){
        this._ano = novoAno;
    }

    set km(novoKm){
        let vericakm = this._km;
        if (novoKm > vericakm){
            this._km = novoKm;
            console.log("Alteração de km realizada! " + "O km antigo era " + vericakm + " e mudou para " + novoKm)
        } else{
            console.log("Tentativa de alteração de km não permitida!")
        }
    }


    novopreco(valor){
        if (this._valorcompra < valor){
            let antigopreco = this._valorvenda;
            this._valorvenda = valor;
            console.log("Alteração de preço realizada! " + "O preço antigo era R$ " + antigopreco + " e mudou para R$ " + valor)
        }else{
            console.log("Tentativa de alteração de preço não permitida!")
        }
            
        
        
    }
}