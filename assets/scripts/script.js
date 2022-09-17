const submit = document.querySelector('#submit');
password = document.querySelector('#password');
confirm = document.querySelector('#confirm-password');
function compare(e) {
    if(password.value === confirm.value){
    }
    else{
        e.preventDefault();
    }
}

function errorClass(){
    if(password.value === confirm.value){
        password.classList.remove('error');
        confirm.classList.remove('error');
    }
    else{
        password.classList.add('error');
        confirm.classList.add('error');
    }
}
password.addEventListener('input', errorClass);
confirm.addEventListener('input', errorClass);
submit.addEventListener('click', compare);
