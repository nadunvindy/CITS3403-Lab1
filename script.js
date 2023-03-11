const darkmode = document.querySelector(".darkmode");
const body = document.querySelector("body");
const tabledatath = document.getElementsByTagName("th");
const tabledatatr = document.getElementsByTagName("tr");
const tabledatatd = document.getElementsByTagName("td");
const propic = document.querySelector("#propic");

let isDark = false;

darkmode.addEventListener("click", () => {
  console.log(isDark);
  if (isDark == false) {
    isDark = true;
    body.style.backgroundColor = "black";
    body.style.color = "white";
    darkmode.style.backgroundColor = "black";
    darkmode.style.color = "white";
    darkmode.style.borderColor = "white";
    for (div of tabledatatd) {
      div.style.borderColor = "white";
    }
    for (div of tabledatath) {
      div.style.borderColor = "white";
    }
    for (div of tabledatatr) {
      div.style.borderColor = "white";
    }
    propic.src = "./giphy.gif";
    darkmode.textContent = ("Light Mode")
  } else if (isDark == true) {
    isDark = false;
    body.style.backgroundColor = "lightblue";
    body.style.color = "black";
    darkmode.style.backgroundColor = "lightblue";
    darkmode.style.color = "black";
    darkmode.style.borderColor = "black";
    for (div of tabledatatd) {
      div.style.borderColor = "black";
    }
    for (div of tabledatath) {
      div.style.borderColor = "black";
    }
    for (div of tabledatatr) {
      div.style.borderColor = "black";
    }
    propic.src = "./giphy1.gif";
    darkmode.textContent = ("Dark Mode")
  }
});
