export default function TypeWriterEffect(){
  const h1 = document.querySelector('[data-js="title-banner"] > h1' )
  const span = document.querySelector('[data-js="title-banner"] > span')
  const paragraph = document.querySelector('[data-js="title-banner"] > p')
  
  const split_h1 = h1.textContent.split('')
  const split_span = span.textContent.split('')
  const split_paragraph = paragraph.textContent.split('')
  
  

  const writerEffect = () => {
        h1.textContent = ''
        span.textContent = ''
        paragraph.textContent = '';
        split_h1.forEach((word, index) => {
            setTimeout(() => {
            h1.textContent += word
            }, 100 * index)
        })

        setTimeout(() => {
            split_span.forEach((word, index) => {
                setTimeout(() => {
                span.textContent += word
                }, 100 * index)
            })
        },1500)

        setTimeout(() => {
            split_paragraph.forEach((word, index) => {
                setTimeout(() => {
                paragraph.textContent += word
                }, 100 * index)
            })
        
        },3000)


   
  }

   writerEffect()


}