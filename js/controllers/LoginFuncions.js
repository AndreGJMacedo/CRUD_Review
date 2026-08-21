function showPass() {
    let pw = document.querySelector('#psw');
    if (pw.type === 'password') {
        pw.type = 'text';
    }
    else {
        pw.type = 'password'
    }
};

function validate_user() {
    let usr = document.querySelector('#user_nm');
    let bt = document.querySelector('#lg_btn');

    if (usr.value !== '') {
        bt.disabled = false;
    }else {
        bt.disabled = true;
    }
}