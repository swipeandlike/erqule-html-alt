document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimations = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        })
    }

    scrollAnimations();

    //low

    const scrollItemsLow = document.querySelectorAll('.scroll-item--low');

    const scrollAnimationsLow = () => {
        let windowCenter = window.innerHeight + window.scrollY;
        scrollItemsLow.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight;
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        })
    }

    scrollAnimationsLow();

    window.addEventListener('scroll', () => {
        scrollAnimations();
        scrollAnimationsLow();
    })
});
