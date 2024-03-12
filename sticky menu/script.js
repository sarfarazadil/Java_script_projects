let nav = document.getElementById("stick");


window.addEventListener('scroll' , function(){
    if(window.pageYOffset >=312.8){
        nav.classList.add('sticky');
        
    }
    else{
        nav.classList.remove('sticky')
    }
})