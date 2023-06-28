    
    const buyBtns = document.querySelectorAll('.buyticket')
    const mdl = document.querySelector('.modal')
    const mdlclose = document.querySelector('.modal-btn-close')
    const modalcontainer = document.querySelector('.modal-container')
    const mdlftclose = document.querySelector('.btn-footer-close')

    function showmodal(){
        mdl.classList.add('open')
    }

    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showmodal)
    }

    function closemodal(){
        mdl.classList.remove('open')
    }
    mdlclose.addEventListener('click', closemodal)

    mdlftclose.addEventListener('click', closemodal)

    // mdl.addEventListener('click', closemodal)

    // modalcontainer.addEventListener('click', function(envent){
    //     envent.stopPropagation
    // })
