const nome = document.getElementById('nome');
const status = document.querySelector('#situacao'); 
const img = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 

elementoBtn.addEventListener('click', () =>{
   
    if(elementoBtn.value == 'primeiro'){
        img.src = "./assents/imgs/harrypotter-feliz.gif"
        nome.innerText = 'Harry Potter' 
        status.innerText = 'Feliz' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        img.src = "./assents/imgs/revirandoolhos.gif" 
        nome.innerText = 'Harry Potter' 
        status.innerText = 'Bravo' 
        elementoBtn.value = 'terceiro'  
    } else { 
        img.src =  "./assents/imgs/yes-harry.gif" 
        nome.innerText = 'Harry Potter' 
        status.innerText = 'Triste' 
        elementoBtn.value = 'primeiro' 
    }
})

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }