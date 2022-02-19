document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimations = () => {
        let windowCenter = window.innerHeight + window.scrollY;
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

    window.addEventListener('scroll', () => {
        scrollAnimations();
    })
});
