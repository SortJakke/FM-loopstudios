const body = document.querySelector("body")
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")

navToggle.addEventListener("click", () => {
  body.classList.toggle("no-scroll")
  navToggle.classList.toggle("nav-toggle--close")
  nav.classList.toggle("nav--visible")
})
