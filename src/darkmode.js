//hele scriptet bliver exporteret med export variablen
export function darkMode () {
  //referencer
  // const root = document.documentElement; svarer til det samme som den nederunder html
  const root = document.querySelector("html");
  const btn = document.querySelector("#toggle-btn");

  //toggle funktionalitet
  function toggleTheme() {
    root.classList.toggle("dark"); //hiver fat i html root referencen
  }

  btn.addEventListener("click", toggleTheme);

}