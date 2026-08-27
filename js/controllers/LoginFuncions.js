let pw = document.querySelector('#psw'); //pegando elementos do html
let usnm = document.querySelector('#user_nm');
let btn = document.querySelector('#lg_btn');
let form = document.querySelector('#form');


function Validate_btn_lg() { //função que ativa o botão de login 
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


form.addEventListener("submit", try_lg);

function try_lg(event) {

    event.preventDefault();

    const newUS = localStorage.getItem("users");

    if (newUS !== null) {
        const user_new = JSON.parse(newUS);
        
        const finded_us = user_new.find((data_us) => {
            return data_us.username === usnm.value && data_us.password === pws.value;
            
          
        });
               if (finded_us !== undefined) {
            }
          console.log(finded_us)

    } else {
        alert("sem usuários, registre-se");
    }
}