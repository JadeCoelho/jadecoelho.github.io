

function mudacor(){
    claroescuro = document.getElementById('claroescuro')
    tema = document.getElementById('tema')
    info = document.getElementsByClassName('info')
   
    if (tema.classList.contains('bxs-sun')){
        tema.classList.remove('bxs-sun')
        tema.classList.add('bxs-moon')
       
        document.body.style.backgroundColor='#121212'
        document.body.style.color='#9e9e9e'
        document.getElementById('header').style.backgroundImage="url('imgs/wallpaper-escuro.webp')"
        document.getElementById('cinza').style.color='#9e9e9e'
        document.getElementById('cinza1').style.color='#9e9e9e'
        document.getElementById('cinza2').style.color='#9e9e9e'
        document.getElementById('cinza3').style.color='#9e9e9e'
        document.getElementById('cinza4').style.color='#9e9e9e'
        document.getElementById('cinza5').style.color='#9e9e9e'
        document.getElementById('bg-cinza').style.backgroundColor='#9e9e9e'

        document.getElementById('bg-cinza').addEventListener('mouseenter', function hover(){
            document.getElementById('bg-cinza').style.backgroundColor='#1ec270f1'
         });

         document.getElementById('bg-cinza').addEventListener('mouseleave', function hoverdois(){
            document.getElementById('bg-cinza').style.backgroundColor='#9e9e9e'
            
         });


    } else if(tema.classList.contains('bxs-moon')){
        tema.classList.remove('bxs-moon')
        tema.classList.add('bxs-sun')
        document.body.style.backgroundColor='white'
        document.body.style.color='#212d27'
        document.getElementById('header').style.backgroundImage="url('imgs/wallpaper.webp')"
        document.getElementById('cinza').style.color='#212d279e'
        document.getElementById('cinza1').style.color='#212d279e'
        document.getElementById('cinza2').style.color='#212d279e'
        document.getElementById('cinza3').style.color='#212d279e'
        document.getElementById('cinza4').style.color='#212d279e'
        document.getElementById('cinza5').style.color='#212d279e'
        document.getElementById('bg-cinza').style.backgroundColor='#212d276d'
        
    }
    
}