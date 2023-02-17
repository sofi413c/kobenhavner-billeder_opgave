import "./style.css";

const btn = document.querySelector("button");
const heading = document.querySelector("h1");

function klikket() {
  heading.classList.toggle("min-klasse");
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("dark");
}

btn.addEventListener("click", klikket);
