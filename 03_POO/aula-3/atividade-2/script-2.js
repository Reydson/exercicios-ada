console.log('Exercício 2');
class Produto {
    #nome;
    #preco;
    #quantidade;
    #estoque;
    constructor(nome, preco, quantidade, estoque) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
        this.#estoque = estoque;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    getPrecoLiquido() {
        return this.#preco;
    }

    getQuantidade() {
        return this.#quantidade;
    }
}

class ProdutoEletronico extends Produto{
    static desconto = 15;

    getPrecoLiquido() {
        return this.getPreco() * ((100 - this.constructor.desconto) / 100);
    }
}

class ProdutoAlimenticio extends Produto{
    #preco;
    static desconto = 20;

    getPrecoLiquido() {
        return this.getPreco() * ((100 - this.constructor.desconto) / 100);
    }
}

class Carrinho {
    produtos = [];
    constructor(produtos) {
        if(produtos) {
            this.produtos = produtos;
        }
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(nomeProduto) {
        this.produtos = this.produtos.filter((produto) => {
            if(produto.getNome() == nomeProduto) {
                return false;
            }
            return true;
        })
    }

    calculaTotal() {
        return this.produtos.reduce((acumulador, produto) => {
            return acumulador + produto.getPrecoLiquido() * produto.getQuantidade();
        }, 0)
    }
}

class ClienteEcommerce {
    constructor(carrinho) {
        if(carrinho) {
            this.carrinho = carrinho;
        } else {
            this.carrinho = new Carrinho();
        }
    }
}

const clienteEcommerce = new ClienteEcommerce();
clienteEcommerce.carrinho.adicionarProduto(new Produto('Sabão', 10.00, 5, 100));
clienteEcommerce.carrinho.adicionarProduto(new ProdutoEletronico('Computador', 1500, 1, 100));
console.log(`Total do carrinho: ${clienteEcommerce.carrinho.calculaTotal()}`)