let pw = document.querySelector('#psw');
let bt = document.querySelector('#lg_btn');

function showPass() {
    if (pw.type === 'password') {
        pw.type = 'text';
    }
    else {
        pw.type = 'password'
    }
};

function validate_user() {
    if (pw.value !== '') {
        bt.disabled = false;
    }else {
        bt.disabled = true;
    }
}