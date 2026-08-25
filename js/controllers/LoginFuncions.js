let pw = document.querySelector('#psw');
let usnm = document.querySelector('#user_nm');
let btn = document.querySelector('#lg_btn');

function Validate_btn_lg() {
    if (pw.value !== '' && usnm.value !== '') {
        btn.disabled = false;
    } else{
        btn.disabled = true;
    }
}

function ShowPass_lg() {
    if(pw.type === 'password') {
        pw.type = 'text';
    } else{
        pw.type = 'password'
    }
}