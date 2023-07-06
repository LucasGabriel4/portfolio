export default function ScrollToSection(){
    const links = document.querySelectorAll('[data-scrollTo] a')
    

    const scrollTosection = (event) => {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const section = document.querySelector(href)
       
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
        
    } 

    links.forEach((link) => {
        link.addEventListener('click', scrollTosection)
    })
   
}