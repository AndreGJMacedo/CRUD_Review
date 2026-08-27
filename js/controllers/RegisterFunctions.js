let pws = document.querySelectorAll('.psw');
let us = document.querySelector('#user_nm');
let eml = document.querySelector('#user_email');
let bt = document.querySelector('#lg_btn');
let form = document.querySelector('#form');



function showPass_reg() {
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
    const check_input = pws[0].value !== '' && pws[1].value !== '' && us.value.trim() !== '' && eml.value.trim() !== '';
    const check_psw = pws[0].value === pws[1].value;

    if (check_psw && check_input) {
        bt.disabled = false;
    } else {
        bt.disabled = true;
    }
}

form.addEventListener('submit', create_users);

function create_users(event) {
    event.preventDefault();
    let users;

    let user = {
        username: us.value,
        password: pws[0].value
    };

    let check_us = localStorage.getItem('users');



    if (check_us === null) {
        users = [];
    }
    else {
        users = JSON.parse(check_us);
    }
    users.push(user)
    let saved_user = JSON.stringify(users)
    localStorage.setItem('users', saved_user)
}
