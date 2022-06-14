// navbar working

window.addEventListener("resize", function () {
  addRequiredClass();
});
function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

window.onload = addRequiredClass;

let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".nav-list");

let bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  if (!isActive) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
    isActive = true;
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(-0deg)";
    isActive = false;
  }
});

// navbar end

// Join form working
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxxHowTfXQWHUxg_C7HPON7GBn1TVIW0QxFkvpBbC2G93Z-Pv0wKOzM3Z_Dqz3vRTzE/exec";
// const form = document.forms["google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) =>
//       alert("Your Registration is Successful! We Will Contact You Soon.")
//     )
//     .catch((error) => console.error("Error!", error.message));
// });

// Dark mode functionality
const moonPath =
  "M14.5 27.5C14.5 42.6878 27.5 53 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14.5 12.3122 14.5 27.5Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = true;

// Here we setup the timeline

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  //add different animation to timeline
  timeline
    .add({
      targets: ".moon",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=400"
    )
    .add(
      {
        targets: "body, .rights,.nav-list",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
      },
      "-=750"
    )
    .add(
      {
        targets: "h1,h2,h3,h4,h5,h6,p,a,span, .hamburger",
        color: toggle ? "rgb(0,0,0)" : " rgb(255,255,255)",
      },
      "-=750"
    );

  // Every time we click on sun, i want toggle to switch
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
