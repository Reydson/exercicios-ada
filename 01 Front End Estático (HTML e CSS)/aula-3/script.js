const formulario = document.querySelector('form');

const dados = {};
formulario.addEventListener('change', ({target}) => {
    dados[target.name] = target.value;
})

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/registrations', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados)
    }).then((response) =>{
        if(!response.ok) {
            formulario.reset();
            throw new Error('Código de resposta inválido!');
        }
        alert('Inscrição feita com sucesso!');
        formulario.reset();
    }).catch((error) => {
        alert('Um erro ocorreu, por favor tente novamente mais tarde!');
    })
})