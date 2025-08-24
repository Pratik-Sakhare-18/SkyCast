const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

let theme = document.querySelector("#theme");
let nav = document.querySelector(".nav");
let about = document.querySelector("#about");
let login = document.querySelector("#login");
let sunIcon = document.querySelector("#sun-icon");
let moonIcon = document.querySelector("#moon-icon");
let searchResultContainer = document.querySelector(".search-results-main-container");
let mainContainerSignIn = document.querySelector(".main-container-sign-in");
let isdarktheme = true;
theme.addEventListener("click", () => {
  if (isdarktheme) {
    document.body.style.backgroundColor = "#191919";
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    nav.style.backgroundColor = "#191919";
    theme.style.backgroundColor = "#c0c0c0ff";
    nav.style.transition = "background-color 0.3s ease-in-out";
    login.style.backgroundColor = "#c0c0c0ff";
    about.style.transition = "color 0.3s ease-in-out";
    login.style.transition = "color 0.3s ease-in-out";
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    searchResultContainer.style.color = "white";
    document.body.style.color = "white";
    mainContainerSignIn.style.backgroundColor = "#191919";
    mainContainerSignIn.style.transition = "background-color 0.3s ease-in-out";
    isdarktheme = false;

  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#191919";
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    theme.style.backgroundColor = "white";
    about.style.transition = "color 0.3s ease-in-out";
    login.style.transition = "color 0.3s ease-in-out";
    login.style.backgroundColor = "white";
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    searchResultContainer.style.backgroundColor = "white";
    searchResultContainer.style.color = "black";
    searchResultContainer.style.transition = "color 0.3s ease-in-out";
    about.style.color = "black";
    nav.style.backgroundColor = "white";
    isdarktheme = true;
  }
});

let loginpage = () => {
  window.location.href = "./login-page.html";
};

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

let hoverbox = document.querySelector(".hover-box");
hoverbox.addEventListener("mousemove", (e) => {
  hoverbox.style.left = `${e.pageX}px`
  hoverbox.style.top = `${e.pageY}px`
})

