 
function ver(){
    let visualizar = document.getElementById('ver');
    let password = document.getElementById('senha');
    let n_visualizar = document.getElementById('oculto');
     

   let input_type = password.getAttribute("type")
    
    if (input_type == "password") {
        password.setAttribute("type","text");
        visualizar.style. display="none"; 
        n_visualizar.style.display="flex";
         

    } else {
        password.setAttribute("type","password");
        visualizar.style. display="flex"; 
        n_visualizar.style.display="none";    
    }
}