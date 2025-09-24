const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

let body = document.querySelector("#body");
let homeLink = document.getElementById("home");
let aboutLink = document.getElementById("about");
let searchRContainer = document.querySelector(".search-results-container");
let degcontainer = document.querySelector(".deg-cel-container")
let kpcontainer = document.querySelector(".kp-hover-container")
let humiditycontainer = document.querySelector(".humidity-container")
let mon = document.querySelector("#mon")
let tue = document.querySelector("#tue")
let wed = document.querySelector("#wed")
let thu = document.querySelector("#thu")
let fri = document.querySelector("#fri")
let sat = document.querySelector("#sat")
let sun = document.querySelector("#sun")
let rigntcontainer = document.querySelector(".right-container")
let des = document.querySelector(".Partly-cloudy")
let searchbar = document.querySelector(".search-bar")
let locatemebtn = document.querySelector("#locate-me-btn")
let nav = document.querySelector(".nav");
let SearchBarContainer = document.querySelector(".search-bar-container");

let isdarktheme = true;

document.querySelectorAll(".theme-toggle-button").forEach(themeBtn => {
  themeBtn.addEventListener("click", () => {
    const moonIcons = document.querySelectorAll("#moon-icon");
    const sunIcons = document.querySelectorAll("#sun-icon");

    if (isdarktheme) {
      moonIcons.forEach(icon => icon.style.display = "block");
      sunIcons.forEach(icon => icon.style.display = "none");

      homeLink.style.color = "white";
      aboutLink.style.color = "white";

      body.style.backgroundColor = "black";
      body.style.transition = "all 0.3s ease-in-out";

      SearchBarContainer.style.transition = "all 0.3s ease-in-out";
      SearchBarContainer.style.backgroundColor = "black";
      SearchBarContainer.style.color = "white";

      searchRContainer.style.backgroundColor = "black"
      degcontainer.style.backgroundColor = "black"
      degcontainer.style.color = "white";

      kpcontainer.style.backgroundColor = "black"
      kpcontainer.style.color = "white";

      humiditycontainer.style.backgroundColor = "black"
      humiditycontainer.style.color = "white";

      mon.style.backgroundColor = "black"
      mon.style.color = "white";

      tue.style.backgroundColor = "black"
      tue.style.color = "white";

      wed.style.backgroundColor = "black"
      wed.style.color = "white";

      thu.style.backgroundColor = "black"
      thu.style.color = "white";

      fri.style.backgroundColor = "black"
      fri.style.color = "white";

      sat.style.backgroundColor = "black"
      sat.style.color = "white";

      sun.style.backgroundColor = "black"
      sun.style.color = "white";

      rigntcontainer.style.backgroundColor = "black"
      rigntcontainer.style.color = "white";

      des.style.backgroundColor = "black"
      des.style.color = "white";

      searchbar.style.backgroundColor = "black"
      searchbar.style.color = "white";

      locatemebtn.style.backgroundColor = "black"
      locatemebtn.style.color = "white";

      nav.style.backgroundColor = "black";
      nav.style.color = "white";
      nav.style.transition = "all 0.3s ease-in-out";

      isdarktheme = false;
    } else {

      moonIcons.forEach(icon => icon.style.display = "none");
      sunIcons.forEach(icon => icon.style.display = "block");

      homeLink.style.color = "black";
      aboutLink.style.color = "black";

      body.style.backgroundColor = "white";
      body.style.transition = "all 0.3s ease-in-out";

      SearchBarContainer.style.backgroundColor = "white";
      SearchBarContainer.style.color = "black";

      nav.style.backgroundColor = "white";
      nav.style.color = "black";

      searchRContainer.style.backgroundColor = "white"
      degcontainer.style.backgroundColor = "white"
      degcontainer.style.color = "black";

      kpcontainer.style.backgroundColor = "white"
      kpcontainer.style.color = "black";

      humiditycontainer.style.backgroundColor = "white"
      humiditycontainer.style.color = "black";

      mon.style.backgroundColor = "white"
      mon.style.color = "black";

      tue.style.backgroundColor = "white"
      tue.style.color = "black";

      wed.style.backgroundColor = "white"
      wed.style.color = "black";

      thu.style.backgroundColor = "white"
      thu.style.color = "black";

      fri.style.backgroundColor = "white"
      fri.style.color = "black";

      sat.style.backgroundColor = "white"
      sat.style.color = "black";

      sun.style.backgroundColor = "white"
      sun.style.color = "black";

      rigntcontainer.style.backgroundColor = "white"
      rigntcontainer.style.color = "black";

      des.style.backgroundColor = "white"
      des.style.color = "black";

      searchbar.style.backgroundColor = "white"
      searchbar.style.color = "black";

      locatemebtn.style.backgroundColor = "white"
      locatemebtn.style.color = "black";

      isdarktheme = true;
    }
  });
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
  } else if(pass == " "){
     errorcontainer.style.display = "block"
    errorcontainer.innerText = "Enter A Password"
    errorcontainer.style.color = "white"
    errorcontainer.style.backgroundColor = "red"
  }else if (pass.length <= 8) {
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
