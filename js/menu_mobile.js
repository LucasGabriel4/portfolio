 export default function menuMobile(){
   const btnMobile = document.getElementById('mobile')
   const menu = document.getElementById('menu__mobile')
   const body = document.body;

   
   btnMobile.addEventListener('click', showMenuMobile)

   menu.addEventListener('click', (event) => {
        menu.classList.add('hide')
        btnMobile.classList.remove('active')
        body.style.overflowY = 'initial'
   })


   function showMenuMobile(event){
       btnMobile.classList.toggle('active')
       
       if (menu.classList.contains('hide')){
          menu.classList.add('show')
          menu.classList.remove('hide')
          body.style.overflowY = 'hidden'
       }else if (menu.classList.contains('show')){
          menu.classList.add('hide')
          menu.classList.remove('show')
          body.style.overflowY = 'initial'
       }
   }

    
 }