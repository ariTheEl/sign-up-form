const submit = document.querySelector('#submit');

function compare(e) {
    password = document.querySelector('#password');
    confirm = document.querySelector('#confirm-password');

    if(password.value === confirm.value){
    }

    else{
        e.preventDefault();
    }
    console.log(e.defaultPrevented);
}

submit.addEventListener('click', compare);
