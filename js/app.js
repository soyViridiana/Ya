


const registrarUsuario=()=>{
    var correo=document.querySelector("#correo").value;
var password=document.querySelector("#password").value;
var nombre=document.querySelector("#nombre").value;

if(correo.trim()===''||
password.trim()===''||
nombre.trim()=== ''){
    swal.fire({
icon: 'error',
title:'ERROR',
text: 'FALTA LLENAR CAMPOS',
footer:'CRUD CONTACTOS'
    })
}
}