const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click' , () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click' , () => {
    wrapper.classList.toggle('active');
});
function login(username, password) {
    // Perform a call to the authentication server
    // and retrieve the token if credentials are valid
    const token = authenticate(username, password);
  
    if (token) {
      // Store the token in session storage
      sessionStorage.setItem('token', token);
      console.log('Login successful');
    } else {
      console.log('Login failed. Please check your username and password');
    }
  
  }