export default function writerEffect(){
     let h1 = document.querySelector('[data-js="title-banner"] h1')
     let span = document.querySelector('[data-js="title-banner"] span')
     let paragraph = document.querySelector('[data-js="title-banner"] p')

     const splith1 = h1.textContent.split('');
     const splitSpan = span.textContent.split('');
     const splitParagraph = paragraph.textContent.split('');
     
    function typeWriterEffect(){
            h1.textContent = ''
            span.textContent = ''
            paragraph.textContent = ''

            function typeWriter(word, index ,element){
                    setTimeout(() => {
                        element.textContent += word
                    }, 150 * index)
            }


            splith1.forEach((word, index) => {
                typeWriter(word, index, h1)
            })


            setTimeout(() => {
                    splitSpan.forEach((word, index) => {
                        typeWriter(word, index, span)
                    })
            }, 2000)
            
            setTimeout(() => {
                    splitParagraph.forEach((word, index) => {
                        typeWriter(word, index, paragraph)
                    })
            }, 4000)
    }

    typeWriterEffect()
}