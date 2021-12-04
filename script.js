let root = document.getElementById("root");
// navigation och header //
let header = document.createElement("div")
header.className += 'header1';
let nav = document.createElement("nav")
nav.innerText = "This is a login form project";
nav.className += 'navigation';
header.append(nav);
root.append(header);

// footer //
let footer = document.createElement("div")
footer.className += 'footer';
let footerText = document.createElement("p")
footerText.innerText = "This is the footer."
footerText.className += 'footerText';
footer.append(footerText)
root.append(footer)
 
Login();
function Login() {
let inputUsername = document.createElement("input");
        inputUsername.setAttribute("type", "text");
        inputUsername.placeholder = "Username";

        let inputPassword = document.createElement("input");
        inputPassword.setAttribute("type", "disc");
        inputPassword.placeholder = "Password";

        let loginBtn = document.createElement("button")
        loginBtn.innerText = "login";
        loginBtn.addEventListener("click", Btnclick)
        root.append(inputUsername, inputPassword, loginBtn)
        
      function Btnclick() {
      const userName = inputUsername.value
      const passWord = inputPassword.value

      if  (userName === "janne" && passWord === "test") {
      localStorage.setItem("userName", userName)
      localStorage.setItem("passWord", passWord)
      console.log("logged in")
      }
      else if (userName === "user1" && passWord === "1234") {
      localStorage.setItem("userName", userName)
      localStorage.setItem("passWord", passWord)
      console.log("logged in")
      }
      else {
        
        console.log("wrong password or username")
      }
    }
}


        
