const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Username:', username);
  console.log('Password:', password);


  if (username === "admin" && password === "password") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }
});
