//redirect pra página inicial no click da logo
function redirectHome() {
    window.open("../index.html", "_blank");
  }


  //night/day
  const button = document.getElementById("button");
  const link = document.getElementById("css");

  button.addEventListener("click", () => {
    const icon = button.querySelector("i");
    if (link.getAttribute("href") === "../css/login.css") {
      link.setAttribute("href", "../css/login-dark.css");
      icon.classList.replace("fa-moon", "fa-sun");
      icon.style.transform = "rotate(360deg)";
    } else {
      link.setAttribute("href", "../css/login.css");
      icon.classList.replace("fa-sun", "fa-moon");
      icon.style.transform = "rotate(0deg)";
    }
  });