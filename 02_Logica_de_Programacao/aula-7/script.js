let tarefas = [];

const modalTarefa = new bootstrap.Modal(document.getElementById("modalTarefa"));
const tituloModalTarefa = document.querySelector("#modalTarefa .modal-title");
const tarefaForm = document.querySelector('#tarefaForm');

function preparaModalAdicionar() {
    tituloModalTarefa.innerHTML = 'Adicionar tarefa';
    tarefaForm.elements['id'].value = -1;
    tarefaForm.reset();
    modalTarefa.show();
}

function buscaTarefaPorId(id) {
    return tarefas.find((tarefa) => {
        return tarefa.id == id;
    })
}

function preparaModalEditar(id) {
    const tarefa = buscaTarefaPorId(id);
    tituloModalTarefa.innerHTML = 'Editar tarefa';
    tarefaForm.elements['id'].value = tarefa.id;
    tarefaForm.elements['titulo'].value = tarefa.titulo;
    tarefaForm.elements['descricao'].value = tarefa.descricao;
    tarefaForm.elements['categoria'].value = tarefa.categoria;
    modalTarefa.show();
}

function proximaId() {
    return tarefas.reduce((acumulador, tarefa) => {
        if(tarefa.id > acumulador) {
            return tarefa.id;
        }
        return acumulador;
    }, 0) + 1;
}

function tituloJaCadastrado(titulo, id) {
    return tarefas.some((tarefa) => {
        return tarefa.titulo == titulo && tarefa.id != id
    })
}

function adicionarTarefa(titulo, descricao, categoria) {
    tarefas.push({
        id: proximaId(),
        titulo,
        descricao,
        categoria
    });
}

function atualizaTarefa(id, titulo, descricao, categoria) {
    tarefas = tarefas.map((tarefa) => {
        if(tarefa.id == id) {
            return {
                ...tarefa,
                titulo,
                descricao,
                categoria
            }
        }
        return tarefa;
    });
}

function salvarTarefa() {
    try {
        const id = tarefaForm.elements['id'].value;
        const titulo = tarefaForm.elements['titulo'].value;
        if(titulo.length < 4) {
            throw new Error('O campo título deve ter pelo menos 4 caracteres');
        }
        if(titulo.replace(/\d+/, '').length == 0) {
            throw new Error('O campo título não pode conter apenas números');
        }
        console.log(id == -1, tituloJaCadastrado(titulo));
        if(id == -1 && tituloJaCadastrado(titulo)) {
            throw new Error('Título já cadastrado para uma tarefa, escolha outro');
        } else {
            if(tituloJaCadastrado(titulo, id)) {
                throw new Error('Título já cadastrado para uma tarefa, escolha outro');
            }
        }
        const descricao = tarefaForm.elements['descricao'].value;
        if(descricao.length < 20) {
            throw new Error('O campo descrição deve ter pelo menos 20 caracteres');
        }
        const categoria = tarefaForm.elements['categoria'].value;

        if(id == -1) {
            adicionarTarefa(titulo, descricao, categoria);
        } else {
            atualizaTarefa(id, titulo, descricao, categoria);
        }
        modalTarefa.hide();
    } catch (erro) {
        alert(erro.message);
    }
}








const adicionarTarefaBtn = document.querySelector('#adicionarTarefaBtn').addEventListener('click', preparaModalAdicionar);
const salvaTarefaBtn = document.querySelector('#salvaTarefaBtn').addEventListener('click', salvarTarefa);