export default function animationScroll(){
     const sections = document.querySelectorAll('[data-js="scroll"]')

     
     function animaScroll(){
        const windowHalf = window.innerHeight * 0.6;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop - windowHalf < 1){
                section.classList.add('active')
            }else if(section.classList.contains('active')){
                section.classList.remove('active')
            }
            
        })
     }

     animaScroll()

     window.addEventListener('scroll', animaScroll)
}