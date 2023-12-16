function toggle() {
    let nav = document.getElementById('nav-list')
    nav.classList.toggle('show')
}

function success(ctr){
    if(ctr == 6){
        window.location.href = "companyprofiles.html"
    }
}

let ctr = 0;

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    let fullname = document.getElementById('full-name-input').value;
    let email = document.getElementById('email-input').value;
    let phone = document.getElementById('phone-input').value;
    let password = document.getElementById('password-input').value;
    let password1 = document.getElementById('password1-input').value;
    let terms = document.getElementById('t1').checked;

    ctr = 0;
    if(fullname === ''){
        document.getElementById('error1').innerHTML = '⚠ Full name can not be empty'
        return;
    }
    else{
        document.getElementById('error1').innerHTML = '';
        ctr += 1;
    }

    if(email === ''){
        document.getElementById('error2').innerHTML = '⚠ Email address can not be empty'
        return;
    }
    else if(!email.endsWith('@binus.ac.id') && !email.endsWith('@binus.edu')){
        document.getElementById('error2').innerHTML = '⚠ Email address is not a valid binusian email'
        return;
    }
    else{
        document.getElementById('error2').innerHTML = '';
        ctr += 1;
    }

    if(phone === ''){
        document.getElementById('error3').innerHTML = '⚠ Phone number can not be empty'
        return;
    }
    else if(isNaN(phone)){
        document.getElementById('error3').innerHTML = '⚠ Phone number must be numerical'
        return;
    }
    else if(phone.length < 10){
        document.getElementById('error3').innerHTML = '⚠ Phone number must be at least 10 digits'
        return;
    }
    else{
        document.getElementById('error3').innerHTML = '';
        ctr += 1;
    }

    if(password === ''){
        document.getElementById('error4').innerHTML = '⚠ Password can not be empty'
        return;
    }
    else if(password.length < 8){
        document.getElementById('error4').innerHTML = '⚠ Password must be at least 8 digits'
        return;
    }
    else{
        document.getElementById('error4').innerHTML = '';
        ctr += 1;
    }

    if(password1 === ''){
        document.getElementById('error5').innerHTML = '⚠ Password can not be empty'
        return;
    }
    else if(password1 != password){
        document.getElementById('error5').innerHTML = '⚠ Password must be the same'
        return;
    }
    else{
        document.getElementById('error5').innerHTML = '';
        ctr += 1;
    }

    if(terms == false){
        document.getElementById('error6').innerHTML = '⚠ Please read our Terms of Service'
    }
    else{
        document.getElementById('error6').innerHTML = '';
        ctr += 1;
    }

    success(ctr);
})