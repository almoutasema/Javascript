document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('register-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('Registreringen lyckades!');
    });

    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Inloggningen lyckades!');
        } else {
            alert('Inloggningen misslyckades. Kontrollera ditt användarnamn och lösenord.');
        }
    });
});
