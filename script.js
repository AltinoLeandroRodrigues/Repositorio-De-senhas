 
function clicar(){
    let visualizar = document.getElementById('ver');
    let password = document.getElementById('senha');
     

   let input_type = password.getAttribute("type")
    
    if (input_type == "password") {
        password.setAttribute("type","text");
        visualizar.style. filter=" grayscale(0%)"; 
        
    } else {
        password.setAttribute("type","password");
        visualizar.style. filter=" grayscale(100%)";
    }
}