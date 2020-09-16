const doLogin = () => {
    login();
}

const login = async () => {
    const username = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;
    const { data, error } = await loginAccount(username, password);
    if (data) {
        setActiveUser(data);
        window.location.href = '/ContactSearch.html';
    } else {
        document.getElementById('login-error').innerHTML = 'Invalid username or password';
    }
}