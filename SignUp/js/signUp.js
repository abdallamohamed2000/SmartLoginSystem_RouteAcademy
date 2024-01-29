var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn = document.getElementById('signUpBtn');
var alertmsg = document.getElementById('alertmsg');
var removeCard = document.getElementById('removeCard');
var cardValidation = document.getElementById('cardValidation');





$(function() {
    $('.loader').fadeOut(1000, function() {
        $('.loading').fadeOut(1000);
    });
})

userData = [];

if (localStorage.getItem("Users") != null) {
    userData = JSON.parse(localStorage.getItem("Users"));
}

function signUp() {

    if (validationName() && validationEmail() && validationPassword()) {
        if (checkEmail() == true) {
            alertMsg('Email already exist', 'orange')
        } else {
            var data = {
                userName: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            userData.push(data);
            localStorage.setItem("Users", JSON.stringify(userData));
            alertMsg('success', 'green')
            clearForm()
        }
    } else if (validationinputs()) {
        alertMsg('All inputs required', 'red')
    } else {
        cardValidation.classList.remove("d-none");
        alertmsg.classList.replace("d-block", "d-none");
    }


}

signUpBtn.addEventListener('click', function() {
    signUp();

})

removeCard.addEventListener('click', function() {
    remove();

})

function alertMsg(text, color) {
    alertmsg.classList.replace("d-none", "d-block");
    alertmsg.innerHTML = text;
    alertmsg.style.color = color;

}



function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}


function validationName() {
    var text = nameInput.value;
    var regexName = /^\w{3,}(\s+\w+)*$/;

    if (regexName.test(text)) {
        return true;
    } else {

        return false;
    }
}

function validationEmail() {
    var text = emailInput.value;
    var regexName = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexName.test(text)) {
        return true;
    } else {

        return false;
    }
}

function validationPassword() {
    var text = passwordInput.value;
    var regexName = /^.{8,20}$/;

    if (regexName.test(text)) {
        return true;
    } else {

        return false;
    }
}

function remove() {
    cardValidation.classList.add("d-none");
}

function validationinputs() {
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        return true;
    } else {
        return false;
    }

}

function checkEmail() {
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == emailInput.value) {
            return true;
        }
    }
}