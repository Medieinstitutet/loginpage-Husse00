
let root = document.getElementById("root");
// navigation och header //
let header = document.createElement("div")
header.className += 'header1';
let nav = document.createElement("nav")
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
let content = document.createElement("content")
content.className += 'content';
secondroot.append(content)
// function för startsidan
Login();
function Login() {
  // tömmer diven som har innehåll på inloggad vy
thirdroot.innerHTML = ""
let inputUsername = document.createElement("input");
        inputUsername.setAttribute("type", "text");
        inputUsername.placeholder = "Username";

        let inputPassword = document.createElement("input");
        inputPassword.setAttribute("type", "disc");
        inputPassword.placeholder = "Password";

        let loginBtn = document.createElement("button")
        loginBtn.innerText = "login";
        loginBtn.addEventListener("click", Btnclick)
      secondroot.append(inputUsername, inputPassword, loginBtn)
         
       // knappen tar in värdet på username och password
      function Btnclick() {
      const userName = inputUsername.value
      const passWord = inputPassword.value
     // om lösenodet och password matchar med "janne" och "test" så läggs dem in till localstorage via setItem
      if  (userName === "janne" && passWord === "test") {
      localStorage.setItem("userName", userName)
      localStorage.setItem("passWord", passWord)
    
      loggedin()
      console.log("logged in")
      }
      // om lösenodet och password matchar med "user1"  och "1234" så läggs dem in till localstorage via setItem
      else if (userName === "user1" && passWord === "1234") {
      localStorage.setItem("userName", userName)
      localStorage.setItem("passWord", passWord)
      loggedin()
      console.log("logged in")
      }
      // om dem inte matchar med dem 2 användare så får man en fel meddelande
      else {
        
        let wrong = document.createElement("h2")
        wrong.innerText = "wrong password or username!";
        wrong.className += 'welcome';
        secondroot.append(wrong)
      }
    }
}
// vy efter man loggar in 
loggedin()
function loggedin() {
// ser om "janne" och "test" finns i localstorage då man har skickat in dem från localsetitem genom Btnclick (logga in) knappen. 
if (localStorage.getItem("userName") === "janne" && localStorage.getItem("passWord") === "test") {
 // tömmer diven som har innehåll från logga in sidan (startsidan)
  secondroot.innerHTML = ""
  // knapp för att logga ut
  let logOut = document.createElement("button")
  logOut.innerText = "log Out";
  logOut.addEventListener("click", Btnclick)
  // när man trycker på log out knappen så tas användaren och lösenordet ut från localstorage, och går tillbaka till login sidan (första sidan)
  function Btnclick() {
  localStorage.removeItem("userName");
  localStorage.removeItem("passWord");
  Login()
  }
  // VYN för inloggade användare
  let welcome = document.createElement("h1")
  welcome.innerText = "Welcome, you are logged in, to log out - press the button down below";
  welcome.className += 'welcome';
  thirdroot.append(welcome)
  thirdroot.append(logOut)
  
}
// ser om "janne" och "test" finns i localstorage då man har skickat in dem från localsetitem genom Btnclick (logga in) knappen.
else if (localStorage.getItem("userName") === "user1" && localStorage.getItem("passWord") === "1234") {
// tömmer diven som har innehåll från logga in sidan (startsidan)
  secondroot.innerHTML = ""
  // knapp för att logga ut
  let logOut = document.createElement("button")
  logOut.innerText = "log Out";
  logOut.addEventListener("click", Btnclick)
  // när man trycker på log out knappen så tas användaren och lösenordet ut från localstorage, och går tillbaka till login sidan (första sidan)
  function Btnclick() {
  logOut.style.display = "none"
  localStorage.removeItem("userName");
  localStorage.removeItem("passWord");
  Login()
  
  }
  // VYN för inloggade användare
  let welcome = document.createElement("h1")
  welcome.innerText = "Welcome, you are logged in, to log out - press the button down below";
  welcome.className += 'welcome';
  thirdroot.append(welcome)
  thirdroot.append(logOut)
  
}

}