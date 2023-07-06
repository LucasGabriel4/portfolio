export default function ScrollTop(){
    const btnScrollTop = document.querySelector('[data-js="ScrollTopBtn"]')


    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}