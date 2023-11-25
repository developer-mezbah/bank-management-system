document.getElementById('login-button').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    if (email === 'admin' && password === "admin") {
        window.location.href = 'banking.html'
    }else{
        alert("Your credential is Wrong!!!!")
    }
})