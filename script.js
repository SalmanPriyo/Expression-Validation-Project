let firstName = document.getElementById('firstName');
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let contactNum = document.getElementById("contactNum")
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirmPass");
let form = document.getElementById("form")
let gender = document.getElementById('gender')



let output = document.getElementById('output')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')
let output5 = document.getElementById('output5')
let output6 = document.getElementById('output6')
let output7 = document.getElementById('output7')
let output8 = document.getElementById('output8')
let output9 = document.getElementById('output9')




form.addEventListener('submit', errorText);





let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
function errorText(e) {

    if (firstName.value === '') {
        e.preventDefault();
        output.innerHTML = "plaese fill this field!"
    }
    if (lastName.value === '') {
        e.preventDefault();
        output2.innerHTML = "plaese fill this field!"
    }

    if (email.value === '') {
        e.preventDefault();
        output3.innerHTML = "please enter your email address!"
    }

    else if (email.value.match(validEmail)) {
        e.preventDefault();
        return true;
    } else {
        e.preventDefault();
        output3.innerHTML = "invalid email!"
    }


    if (contactNum.value === '') {
        e.preventDefault();
        output6.innerHTML = "plaese fill this field!"
    }
    if (gender.value === "-----") {
        e.preventDefault()
        output9.innerHTML = "please select your gender!"
    }


    if (password.value === '') {
        e.preventDefault();
        output7.innerHTML = "plaese fill this field!"
    }
    else if (password.value.length < 8) {
        e.preventDefault();
        output7.innerHTML = "Password must be at least 8 characters!"
    }

    else if (password.value.length >= 16) {
        e.preventDefault();
        output7.innerHTML = "Password can not be more than 14 characters!"
    }


    if (confirmPass.value === '') {
        e.preventDefault();
        output8.innerHTML = "plaese fill this field!"
    }

    if (confirmPass.value !== password.value) {
        e.preventDefault();
        output8.innerHTML = "password doesn't match!"
    }
}



