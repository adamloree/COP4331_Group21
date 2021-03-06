const doRegister = async () => {
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('login-password').value;
    const first_name = document.getElementById('name').value;
    const last_name = document.getElementById('lastname').value;
    if(!(username === "" || password === "" || first_name === "" || last_name === "")) {
    const { data, error } = await addAccount(username, password, first_name, last_name);
      if (!(error === "")) {
          document.getElementById('login-error').innerHTML = 'Account exists';
      } else {
          window.location.href = "/loginpage.html";
      }
    } else {
      document.getElementById('login-error').innerHTML = "Incomplete entry";
    }
}