const button = document.getElementById('btnSubmit')
const names = document.getElementById('name_f')
const phoneNumber = document.getElementById('phoneNumber')
const email = document.getElementById('email')
const span = document.getElementById('span')
const service = document.getElementById('service')
const labelError1 = document.getElementById('labelError1')
const labelError2 = document.getElementById('labelError2')
const labelError3 = document.getElementById('labelError3')
const labelError4 = document.getElementById('labelError4')
email.addEventListener('input', (e) =>{
    const ok = e.target;
    const validar = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(validar.test(ok.value)){
        span.textContent = "✔"
    }else{  
        span.textContent = "❌"
    }
})
button.addEventListener('click', () =>{
        const newObject = {
        Nombre: names.value,
        Celular: phoneNumber.value,
        Email: email.value,
        TipoServicio: service.value,
        Registro: "Website"
    }
    if((names.value != "") && ((phoneNumber.value != "") && (!isNaN(phoneNumber.value))) && ((email.value != "") && (span.textContent != "❌")) && (service.value != "")){
        console.log(newObject);
        names.value = ""
        phoneNumber.value = ""
        email.value = ""
        service.value = ""
        labelError1.textContent = ''
        labelError2.textContent = ''
        labelError3.textContent = ''
        labelError4.textContent = ''
        alert('Formulario enviado correctamente')
    }else{
        if(span.textContent = "❌"){
            alert('Correo no valido')
        }
        if(isNaN(phoneNumber.value)){
            alert('No ingreso un numero valido')
        }
        alert('Faltan rellenar campos')
        labelError1.textContent = 'Campo requerido'
        labelError2.textContent = 'Campo requerido'
        labelError3.textContent = 'Campo requerido'
        labelError4.textContent = 'Campo requerido'
        if(names.value != "")labelError1.textContent = ''
        if(phoneNumber.value != "")labelError2.textContent = ''
        if(email.value != "")labelError3.textContent = ''
        if(service.value != "")labelError4.textContent = ''
    }
})
const send = () =>{
    return false
}


