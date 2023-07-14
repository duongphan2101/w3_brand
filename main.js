    
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

    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('btn-menu');
    var headerHeight = header.clientHeight;

    //đóng mở menu mobile
    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight == headerHeight;
        if(isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }
    //Tự Động đóng menu sau khi chọn
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];

        menuItem.onclick = function() {
            header.style.height = null;
        }
    }
