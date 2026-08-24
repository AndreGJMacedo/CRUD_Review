let pws = document.querySelectorAll('.psw');
let us = document.querySelector('#user_nm');
let bt = document.querySelector('#lg_btn');


function showPass() {
    pws.forEach((pw) => {
        if (pw.type === 'password') {
        pw.type = 'text';
    }
    else {
        pw.type = 'password'
    }
    })
};

function validate_user() {
    if (pws.value.trim() !== '' && us.value.trim() !== '') {
        bt.disabled = false;
    }else {
        bt.disabled = true;
    }
}