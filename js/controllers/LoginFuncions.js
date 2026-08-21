function showPass() {
    let pw = document.querySelector('#psw');
    if (pw.type === 'password') {
        pw.type = 'text';
    }
    else {
        pw.type = 'password'
    }
}