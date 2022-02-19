const toggleBurgerMenuBtn = document.querySelector('.menu__icon')

toggleBurgerMenuBtn.addEventListener('click', function () {
    document.querySelector('.menu__body').classList.toggle('menu__body--active')
    document.querySelector('.menu__icon').classList.toggle('menu__icon--active')
    document.body.classList.toggle('_lock')
})
