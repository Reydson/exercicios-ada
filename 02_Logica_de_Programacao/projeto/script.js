let tarefas = [
    {id: 1, titulo: 'Testar aplicação', descricao: 'Realizar o teste da aplicação', categoria: 'Teste', deletado: false, vencimento: '2023-11-10T10:10:10'},
    {id: 2, titulo: 'Atualizar aplicação', descricao: 'Realizar a atualização da aplicação', categoria: 'Atualização', deletado: true, vencimento: '2024-11-10T11:11:11'},
    {id: 3, titulo: 'Testar rede', descricao: 'Realizar o teste da rede', categoria: 'Teste', deletado: false, vencimento: '2024-11-10T12:12:12'},
    {id: 4, titulo: 'Teste geral', descricao: 'Realizar o teste geral', categoria: 'Teste', deletado: false, vencimento: ''},
    {id: 5, titulo: 'Atualizar computador', descricao: 'Realizar a atualização do computador', categoria: 'Atualização', deletado: false, vencimento: '2024-11-10T13:13:13'}
];

let filtros = {
    deletado: false,
    id: null,
    categoria: null,
    vencido: false
}

const filtroPadrao = {...filtros};

const modalTarefa = new bootstrap.Modal(document.getElementById("modalTarefa"));
const tituloModalTarefa = document.querySelector("#modalTarefa .modal-title");
const tarefaForm = document.querySelector('#tarefaForm');
const listaTarefas = document.querySelector('#lista-tarefas');
const tarefaModelo = document.querySelector('#lista-tarefas .modelo');
const botoes = document.querySelector('#botoes');
const pesquisaInput = document.querySelector('#pesquisaInput');

function preparaModalAdicionar() {
    tituloModalTarefa.innerHTML = 'Adicionar tarefa';
    tarefaForm.elements['id'].value = -1;
    tarefaForm.reset();
    modalTarefa.show();
}

function preparaModalEditar(id) {
    const tarefa = buscaTarefaPorId(id);
    tituloModalTarefa.innerHTML = 'Editar tarefa';
    tarefaForm.elements['id'].value = tarefa.id;
    tarefaForm.elements['titulo'].value = tarefa.titulo;
    tarefaForm.elements['descricao'].value = tarefa.descricao;
    tarefaForm.elements['categoria'].value = tarefa.categoria;
    tarefaForm.elements['vencimento'].value = tarefa.vencimento;
    modalTarefa.show();
}

function atualizaBotoes() {
    if(filtros.deletado) {
        botoes.classList.add('deletado');
    } else {
        botoes.classList.remove('deletado');
    }
    if(filtros.categoria) {
        botoes.classList.add('categoria');
    } else {
        botoes.classList.remove('categoria');
    }
    if(filtros.vencido) {
        botoes.classList.add('vencido');
    } else {
        botoes.classList.remove('vencido');
    }
}

function limpaListaTarefas() {
    const tarefasDom = document.querySelectorAll('#lista-tarefas .tarefa');
    tarefasDom.forEach((tarefaDom) => {
        if(!tarefaDom.classList.contains('modelo')) {
            tarefaDom.remove();
        }
    })
}

function imprimeListaTarefas() {
    atualizaBotoes();
    limpaListaTarefas();
    let cloneTarefas = [...tarefas];
    if(!filtros.deletado) {
        cloneTarefas = cloneTarefas.filter((tarefa) => !tarefa.deletado);
    }
    if(filtros.vencido) {
        cloneTarefas = cloneTarefas.filter((tarefa) => converteDataTimestamp(tarefa.vencimento) < converteDataTimestamp());
    } else {
        cloneTarefas = cloneTarefas.filter((tarefa) => tarefa.vencimento.length == 0 || converteDataTimestamp(tarefa.vencimento) > converteDataTimestamp());
    }
    if(filtros.id) {
        cloneTarefas = cloneTarefas.filter((tarefa) => tarefa.id == filtros.id);
    }
    if(filtros.categoria) {
        cloneTarefas = cloneTarefas.filter((tarefa) => tarefa.categoria == filtros.categoria);
    }
    if(cloneTarefas.length > 0) {
        cloneTarefas.forEach((tarefa) => {
            const clone = tarefaModelo.cloneNode(true);
            clone.dataset.id = tarefa.id;
            clone.querySelector('.id').innerHTML = '#'+tarefa.id;
            clone.querySelector('.titulo').innerHTML = tarefa.titulo;
            clone.querySelector('.descricao').innerHTML = tarefa.descricao;
            if(tarefa.vencimento != '') {
                const campoVencimento = clone.querySelector('.vencimento');
                campoVencimento.innerHTML = converteDataFormatoBR(tarefa.vencimento);
                campoVencimento.parentElement.classList.remove('d-none');
                if(converteDataTimestamp(tarefa.vencimento) < converteDataTimestamp()) {
                    clone.querySelector('.vencido').classList.remove('d-none')
                } else {
                    clone.querySelector('.naoVencido').classList.remove('d-none')
                }
            }
            
            const catClone = clone.querySelector('.categoria');
            if(tarefa.categoria) {
                catClone.innerHTML = tarefa.categoria;
            } else {
                catClone.remove();
            }
            if(tarefa.deletado) {
                clone.classList.add('deletado');
            }
            clone.classList.remove('modelo');
            listaTarefas.appendChild(clone);
        })
    } else {
        const elementoMensagem = document.createElement("h2");
        elementoMensagem.innerHTML = 'Nenhuma tarefa foi encontrada';
        elementoMensagem.classList.add('tarefa', 'my-4');
        listaTarefas.appendChild(elementoMensagem);
    }
}

function buscaTarefaPorId(id) {
    return tarefas.find((tarefa) => tarefa.id == id)
}

function proximaId() {
    return tarefas.reduce((acumulador, tarefa) => {
        if(tarefa.id > acumulador) {
            return tarefa.id;
        }
        return acumulador;
    }, 0) + 1;
}

function tituloJaCadastrado(titulo, idIgnorada) {
    return tarefas.some((tarefa) => {
        return tarefa.titulo == titulo && tarefa.id != idIgnorada
    })
}

function adicionaTarefa(titulo, descricao, categoria, vencimento) {
    tarefas.push({
        id: proximaId(),
        titulo,
        descricao,
        categoria,
        deletado: false,
        vencimento
    });
}

function atualizaTarefa(id, titulo, descricao, categoria, vencimento) {
    tarefas = tarefas.map((tarefa) => {
        if(tarefa.id == id) {
            return {
                ...tarefa,
                titulo,
                descricao,
                categoria,
                vencimento
            }
        }
        return tarefa;
    });
}

function deletaTarefa(id) {
    tarefas = tarefas.map((tarefa) => {
        if(tarefa.id == id) {
            return {
                ...tarefa,
                deletado: true
            }
        }
        return tarefa;
    });
}

function restauraTarefa(id) {
    tarefas = tarefas.map((tarefa) => {
        if(tarefa.id == id) {
            return {
                ...tarefa,
                deletado: false
            }
        }
        return tarefa;
    });
}

function converteDataTimestamp(data) {
    if(data) {
        return new Date(data).getTime()
    }
    return new Date().getTime()
}

function converteDataFormatoBR(data) {
    const objDate = new Date(data);
    return objDate.toLocaleDateString("pt-BR") + ' ' + objDate.toLocaleTimeString("pt-BR");
}

function processaSalvarTarefa() {
    try {
        const id = tarefaForm.elements['id'].value;
        const titulo = tarefaForm.elements['titulo'].value;
        const descricao = tarefaForm.elements['descricao'].value;
        const categoria = tarefaForm.elements['categoria'].value;
        const vencimento = tarefaForm.elements['vencimento'].value;
        if(titulo.length < 4) {
            throw new Error('O campo título deve ter pelo menos 4 caracteres');
        }
        if(titulo.replace(/\d+/, '').length == 0) {
            throw new Error('O campo título não pode conter apenas números');
        }
        if(id == -1 && tituloJaCadastrado(titulo)) {
            throw new Error('Título já cadastrado para uma tarefa, escolha outro');
        } else {
            if(tituloJaCadastrado(titulo, id)) {
                throw new Error('Título já cadastrado para uma tarefa, escolha outro');
            }
        }
        if(descricao.length < 20) {
            throw new Error('O campo descrição deve ter pelo menos 20 caracteres');
        }

        if(categoria.length > 0 && categoria.length < 5) {
            throw new Error('O campo categoria deve ter pelo menos 5 caracteres');
        }

        if(vencimento != '' && converteDataTimestamp(vencimento) < converteDataTimestamp()) {
            throw new Error('A data de vencimento não pode ser inferior à data atual');
        }

        if(id == -1) {
            adicionaTarefa(titulo, descricao, categoria, vencimento);
        } else {
            atualizaTarefa(id, titulo, descricao, categoria, vencimento);
        }
        modalTarefa.hide();
        imprimeListaTarefas();
    } catch (erro) {
        alert(erro.message);
    }
}

function toggleDeletados() {
    filtros.deletado = !filtros.deletado;
    imprimeListaTarefas();
}

function toggleVencidos() {
    filtros.vencido = !filtros.vencido;
    imprimeListaTarefas();
}

function processarClique({target}) {
    const acao = target.dataset.acao;
    const id = target.parentElement.dataset.id;
    if(acao) {
        switch(acao) {
            case 'editar':
                preparaModalEditar(id);
            break;
            case 'deletar':
                if(confirm('Tem certeza de que deseja deletar?')) {
                    deletaTarefa(id);
                    imprimeListaTarefas();
                }
            break;
            case 'restaurar':
                if(confirm('Tem certeza de que deseja restaurar?')) {
                    restauraTarefa(id);
                    imprimeListaTarefas();
                }
            break;
            case 'listar-categoria':
                filtros.categoria = target.innerText;
                imprimeListaTarefas();
            break;
        }
    }
}

function processaPesquisa() {
    filtros.id = pesquisaInput.value;
    imprimeListaTarefas();
}

function processaLimpaPesquisa() {
    pesquisaInput.value = '';
    filtros.id = null;
    imprimeListaTarefas();
}

function processaSairCategoria() {
    filtros.categoria = null;
    imprimeListaTarefas();
}

function processaMostarContadores() {
    const qtdTarefasSemCategoria = tarefas.filter((tarefa) => tarefa.categoria.length == 0).length;
    const contagemCategorias = [];
    tarefas.forEach((tarefa) => {
        if(tarefa.categoria) {
            const posicao = contagemCategorias.findIndex((contagem) => contagem.nome == tarefa.categoria)
            if(posicao != -1) {
                contagemCategorias[posicao].quantidade++;
            } else {
                contagemCategorias.push({
                    nome: tarefa.categoria,
                    quantidade: 1
                });
            }
        }
    })
    const contagemCategoriasString = contagemCategorias.map((contagem) => ' -> ' + contagem.nome + ': ' + contagem.quantidade).join('\n');
    const qtdTarefasSemVencimento = tarefas.filter((tarefa) => tarefa.vencimento.length == 0).length;
    const qtdTarefasVencidas = tarefas.filter((tarefa) => converteDataTimestamp(tarefa.vencimento) < converteDataTimestamp()).length;
    const qtdTarefasNoPrazo = tarefas.filter((tarefa) => converteDataTimestamp(tarefa.vencimento) > converteDataTimestamp()).length;

    alert(`Quantidade de tarefas na aplicação: ${tarefas.length}\nQuantidade de tarefas sem categoria: ${qtdTarefasSemCategoria}\nQuantidade de tarefas por categoria:\n${contagemCategoriasString}\nQuantidade de tarefas sem vencimento: ${qtdTarefasSemVencimento}\nQuantidade de tarefas vencidas: ${qtdTarefasVencidas}\nQuantidade de tarefas no prazo: ${qtdTarefasNoPrazo}`);
}

function processaResetarFiltros() {
    filtros = {...filtroPadrao};
    pesquisaInput.value = '';
    imprimeListaTarefas();
}

document.querySelector('#adicionarTarefaBtn').addEventListener('click', preparaModalAdicionar);
document.querySelector('#mostrarDeletadosBtn').addEventListener('click', toggleDeletados);
document.querySelector('#ocultarDeletadosBtn').addEventListener('click', toggleDeletados);
document.querySelector('#mostrarVencidosBtn').addEventListener('click', toggleVencidos);
document.querySelector('#ocultarVencidosBtn').addEventListener('click', toggleVencidos);
document.querySelector('#salvaTarefaBtn').addEventListener('click', processaSalvarTarefa);
document.querySelector('#pesquisaBtn').addEventListener('click', processaPesquisa);
document.querySelector('#limpaPesquisaBtn').addEventListener('click', processaLimpaPesquisa);
document.querySelector('#sairCategoriaBtn').addEventListener('click', processaSairCategoria);
document.querySelector('#mostarContadoresBtn').addEventListener('click', processaMostarContadores);
document.querySelector('#resetarFiltrosBtn').addEventListener('click', processaResetarFiltros);

listaTarefas.addEventListener('click', processarClique);

imprimeListaTarefas();