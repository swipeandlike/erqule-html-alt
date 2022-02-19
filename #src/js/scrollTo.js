const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
console.log(menuLinks)

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        // menuLink.classList.remove('menu__link--active')
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick (e) {
        e.preventDefault();
        const menuLink = e.target
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset
            // - document.querySelector('header').offsetHeight


        menuLink.classList.add('menu__link--active');

        // if (document.querySelector('.menu__icon').classList.contains('menu__icon--active')) {
        //     document.querySelector('.menu__body').classList.remove('menu__body--active')
        //     document.querySelector('.menu__icon').classList.remove('menu__icon--active')
        //     document.body.classList.remove('_lock')
        // }

        window.scrollTo({
            top:gotoBlockValue,
            behavior: 'smooth'
        });
    }
}
