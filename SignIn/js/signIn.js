var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signInBtn = document.getElementById('signInBtn');
var alertmsg = document.getElementById('alertmsg');

$(function() {
    $('.loader').fadeOut(1000, function() {
        $('.loading').fadeOut(1000);
    });
})

userData = [];

if (localStorage.getItem("Users") != null) {
    userData = JSON.parse(localStorage.getItem("Users"));
}

function login() {

    if (validationinputs()) {
        alertMsg('All inputs required', 'red')

    } else {
        if (checkEmailAndPassword() == true) {
            window.location.href = '.././home/home.html';

        } else {
            alertMsg('Email or Password incorrect', 'red')
        }

    }

}

function checkEmailAndPassword() {
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == emailInput.value && userData[i].password == passwordInput.value) {
            localStorage.setItem("userName", userData[i].userName);
            return true;
        }
    }
}

signInBtn.addEventListener('click', function() {
    login();
})

function alertMsg(text, color) {
    alertmsg.classList.replace("d-none", "d-block");
    alertmsg.innerHTML = text;
    alertmsg.style.color = color;

}

function validationinputs() {
    if (emailInput.value == "" || passwordInput.value == "") {
        return true;
    } else {
        return false;
    }

}