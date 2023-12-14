// let username_array = [];

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    let fullname = document.getElementById('full-name-input').value;
    let email = document.getElementById('email-input').value;
    let phone = document.getElementById('phone-input').value;
    let password = document.getElementById('password-input').value;
    let password1 = document.getElementById('password1-input').value;
    let terms = document.getElementById('t1').checked;

    if(fullname === ''){
        document.getElementById('error1').innerHTML = '⚠ Full name can not be empty'
        return;
    }
    else{
        document.getElementById('error1').innerHTML = '';
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
    }

    if(terms == false){
        document.getElementById('error6').innerHTML = '⚠ Please read our Terms of Service'
    }
    else{
        document.getElementById('error6').innerHTML = '';
    }
    
    // if(username === ''){
    //     // validasi kosong
    //     document.getElementById('error').innerHTML = 'username masih kosong'
    //     return;
    // }
    // else if(username.length > 8){
    //     // validasi panjang
    //     document.getElementById('error').innerHTML = 'username maksimal 8 karakter'
    // }
    // else if(username_array.includes(username)){
    //     // validasi unique
    //     document.getElementById('error').innerHTML = 'username sudah terpakai'
    //     console.log(username_array)
    //     return;
    // }
    // else if(password === ''){
    //     document.getElementById('error').innerHTML = 'password masih kosong'
    //     return;
    // }
    // else if(email === ''){
    //     document.getElementById('error').innerHTML = 'email masih kosong'
    //     return;
    // }
    // else if(!email.endsWith('@binus.ac.id')){
    //     // validasi email
    //     document.getElementById('error').innerHTML = 'email harus diakhiri @binus.ac.id'
    //     return;
    // }
    // else if(isNaN(phone)){
    //     // validasi angka
    //     document.getElementById('error').innerHTML = 'phone number harus berupa angka'
    // }
    // else{
    //     // kalau semua validasi tidak terlanggar
    //     document.getElementById('error').innerHTML = '';
    //     username_array.push(username);
    //     console.log(username_array)
    //     return;
    // }
})