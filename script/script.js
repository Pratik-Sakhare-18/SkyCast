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
        about.style.color = "white";
        document.body.style.color = "white";
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
        about.style.color = "black";
        nav.style.backgroundColor = "white";
        isdarktheme = true;
    }
});


let loginpage = () => {
   window.location.href = "./login-page.html";
};
