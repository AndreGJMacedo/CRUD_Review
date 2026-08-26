let pw = document.querySelector('#psw');
let usnm = document.querySelector('#user_nm');
let btn = document.querySelector('#lg_btn');
let form = document.querySelector('#form');


function Validate_btn_lg() {
    if (pw.value !== '' && usnm.value !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
};

function ShowPass_lg() {
    if (pw.type === 'password') {
        pw.type = 'text';
    } else {
        pw.type = 'password'
    }
};

form.addEventListener('submit', try_lg);

function try_lg(event) {
    event.preventDefault();
    const newUS = localStorage.getItem('users')

    if (newUS !== null) {
        const user_new = JSON.parse(newUS)
        if (pw.value === user_new.password && usnm.value === user_new.user) {
            console.log(user_new)
        }
        else {
            alert('Usuario ou senha incorretos!')
        }
    }
    else {
        alert("você não tem cadastro")
    }

}