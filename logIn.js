document.getElementById("login").addEventListener("click", ValidateForm);
function ValidateForm(event)
{
  event.preventDefault();
    let Username = document.getElementById("Name");
    let nameerror = document.getElementById("nameerror");
    // let Email = document.getElementById("Email");
    // let Emailerror = document.getElementById("emailerror");
    let Password = document.getElementById("Password");
    let passworderror = document.getElementById("passworderror");
    let matcherror1 = document.getElementById("totalerror");
    // let passwordregex=/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    // let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       // Name section
       if (Username.value === '') {
        nameerror.textContent = "The name field is required.";
        nameerror.style.color ="red";
        Username.style.borderColor = "#FEA0CD";
        event.preventDefault();
      } else {
        nameerror.textContent = "";
        Username.style.borderColor = "";
      }
    
  
      // Password section
      if (Password.value === '') {
        passworderror.textContent = "The password field is required.";
        Password.style.borderColor = "#FEA0CD";
        passworderror.style.color="red";
        event.preventDefault();
      } else {
        passworderror.textContent = "";
        Password.style.borderColor = "";
      }

       // get data from local storage
 let existingUsers = JSON.parse(localStorage.getItem("users ids")) || [];
 console.log(existingUsers);
// let name=
 // Check if email and password match an existing user
 let CURRENTUSERINFO = false;
 for (let i = 0; i < existingUsers.length; i++) {
  // console.log(existingUsers[i]);
  // console.log(existingUsers[i].Password);
  // console.log(Username.value);

console.log('555555');
     if (existingUsers[i].username == Username.value && existingUsers[i].Password == Password.value) {
      CURRENTUSERINFO = true;
         let currentUser = {
             id: i,
             Name: existingUsers[i].username
         };
         sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
       
     }
     else  {
      CURRENTUSERINFO=false;
     
  matcherror1.textContent= "Invalid email or password";
  matcherror1.style.color="red";
  }
 }
 console.log('555555555555555555555555');
 if (CURRENTUSERINFO ===true ) {
  // Redirect to dashboard page
  window.location.href ="/welcome.html";
}

}

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