// function Login(){
//     let Link=document.getElementById('Login');
//     let Formulario =document.getElementById('forma');
//     let body=document.getElementById('corpo');

//     body.style.opacity="5";
//     Formulario.style.display="flex";

//     Formulario.style.transition=" display 1s";
// }
// function fechar(){
//     let fechar=document.getElementById('fechar');
//     let Formulario =document.getElementById('forma');
//     Formulario.style.display="none";

// }

const switchModal = () => {
    const modal = document.getElementById('forma');
    console.log(modal);
   
    

    if (modal.style.display == 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

const btn = document.getElementById('Login')
btn.addEventListener('click',switchModal)

window.onclick = function (event) {
    const modal = document.getElementById('forma')
    if (event.target == modal) {switchModal}      
}
