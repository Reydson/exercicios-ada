console.log('Exercício 1');
class Usuario {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
}
class SistemaDeLogin {
    usuarios = [];

    cadastrarUsuario(usuario, senha) {
        this.usuarios.push(new Usuario(usuario, senha));
    }

    realizarLogin(usuario, senha) {
        let usuarioLogado = null;
        this.usuarios.forEach((user) => {
            if(user.usuario === usuario && user.senha === senha) {
                usuarioLogado = user;
            }
        })
        return usuarioLogado;
    }

    exibirMensagemPersonalizada(usuario) {
        return `Bem-vindo, ${usuario.usuario}!`
    }
}

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
// Saída esperada: Bem-vindo, usuario1!