document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    //  användarnamnet och lösenordet i localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    
    alert('Din inloggning lyckades!');
});


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //  localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Jamföra med data som finns
    if (username === storedUsername && password === storedPassword) {
        alert('Din inloggning lyckades!');
    } else {
        alert('inloggningen misslyckades. Kontrollera ditt användarnamn och lösenord.');

    }
});








