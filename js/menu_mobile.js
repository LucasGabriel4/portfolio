 export default function menuMobile(){
   const btnMobile = document.getElementById('mobile')
   const menu = document.getElementById('menu__mobile')
   const body = document.body;

   console.log(menu)
   btnMobile.addEventListener('click', showMenuMobile)


   function showMenuMobile(event){
       this.classList.toggle('active')
       
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