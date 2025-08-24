const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

let theme = document.getElementById("theme");
let SearchBarContainer = document.querySelector(".search-bar-container");
let nav = document.querySelector(".nav");
let moonIcon = document.querySelector("#moon-icon");
let sunIcon = document.querySelector("#sun-icon");
let body = document.querySelector("#body");
let homeLink = document.getElementById("home");
let aboutLink = document.getElementById("about");
let isdarktheme = true;
theme.addEventListener("click", () => {
  if (isdarktheme) {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";

    homeLink.style.color = "white";
    aboutLink.style.color = "white";

    body.style.backgroundColor = "black";
    body.style.transition = "all 0.3s ease-in-out";

    SearchBarContainer.style.transition = "all 0.3s ease-in-out";
    SearchBarContainer.style.backgroundColor = "black";
    SearchBarContainer.style.color = "white";

    nav.style.backgroundColor = "black";
    nav.style.color = "white";
    nav.style.transition = "all 0.3s ease-in-out";

    isdarktheme = false;
  } else {

    moonIcon.style.display = "none";
    sunIcon.style.display = "block";

    homeLink.style.color = "black";
    aboutLink.style.color = "black";

    body.style.backgroundColor = "white";
    body.style.transition = "all 0.3s ease-in-out";

    SearchBarContainer.style.backgroundColor = "white";
    SearchBarContainer.style.color = "black";

    nav.style.backgroundColor = "white";
    nav.style.color = "black";

    isdarktheme = true;
  }
});

let userName = document.getElementById("userName");
let password = document.getElementById("pass");
let emailadd = document.getElementById("email");
let form = document.getElementById("form");
let phoneNum = document.getElementById("phone");
let errorcontainer = document.getElementById("topMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let phone = phoneNum.value;
  let username = userName.value;
  let pass = password.value;
  let email = emailadd.value;

  console.log(username);

  if (username.length <= 4) {
    errorcontainer.style.display = "block"
    errorcontainer.innerText = "user name must be greater than 4 letter"
    errorcontainer.style.color = "white"
    errorcontainer.style.backgroundColor = "red"

  } else if (!email.includes("@")) {
    errorcontainer.style.display = "block"
    errorcontainer.innerText = "enter a valid email"
    errorcontainer.style.color = "white"
    errorcontainer.style.backgroundColor = "red"
  } else if (pass.length <= 8) {
    errorcontainer.style.display = "block"
    errorcontainer.innerText = "password must be greater than 8 letter"
    errorcontainer.style.color = "white"
    errorcontainer.style.backgroundColor = "red"
  } else if (pass.length > 8 && username.length > 4 && email.includes("@")) {
    errorcontainer.style.display = "block"
    errorcontainer.style.left = "50px";
    errorcontainer.style.fontWeight = "bold";
    errorcontainer.innerText = "Successfully signed in!"
    errorcontainer.style.color = "white"
    errorcontainer.style.backgroundColor = "green"
    userName.value = "";
    password.value = "";
    emailadd.value = "";
    phoneNum.value = "";
  } else {
    errorcontainer.style.display = "none"
  }

  setTimeout(() => {
    let topMessage = document.getElementById("topMessage");
    topMessage.style.display = "none";
  }, 3000);
  topMessage.style.transition = "top 0.3s ease-in-out";
})

function homepage() {
  window.location.href = "./index.html";
}

function aboutpage() {
  window.location.href = "./pages/about-page.html";
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

let openBtn = document.getElementById("open-btn");
let 
