//Modal
const modal = document.querySelector('.modal');
const formModal = document.querySelector('.modal form');
const fechaM = document.querySelector('.modal .fecha');
const ctaEventos = document.querySelectorAll('.eventos .cta');

if(modal) {
    abreModal = () => {
        formModal.reset();
        document.body.classList.add('modal-aberta');
    }
    
    fechaModal = () => {
        document.body.classList.remove('modal-aberta');
    }

    modal.addEventListener('click', ({target, currentTarget}) => {
        if(target == currentTarget) {
            fechaModal();
        }
    })

    fechaM.addEventListener('click', fechaModal);

    ctaEventos.forEach(cta => {
        cta.addEventListener('click', abreModal);
    });
}