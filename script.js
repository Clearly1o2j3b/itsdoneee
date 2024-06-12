document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const bearId = document.getElementById("bear-id").value;
  const password = document.getElementById("password").value;

  if (bearId === "kelvinbaidoo03@gmail.com" && password === "Hulkmode777") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "flex";
    document.getElementById("dashboard-content").style.display = "block";
  } else {
    alert("Invalid Bear ID or Password");
  }
});

document
  .getElementById("dashboard-link")
  .addEventListener("click", function () {
    showSection("dashboard-content");
  });

document
  .getElementById("registration-link")
  .addEventListener("click", function () {
    showSection("registration-content");
  });

document
  .getElementById("statement-link")
  .addEventListener("click", function () {
    showSection("statement-content");
  });

document.getElementById("sip-link").addEventListener("click", function () {
  showSection("sip-content");
});

document.getElementById("message-link").addEventListener("click", function () {
  showSection("message-content");
});

document
  .getElementById("evaluation-link")
  .addEventListener("click", function () {
    showSection("evaluation-content");
  });

document
  .getElementById("timetable-link")
  .addEventListener("click", function () {
    showSection("timetable-content");
  });

function showSection(sectionId) {
  const sections = document.getElementsByClassName("content-section");
  for (const section of sections) {
    section.style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
}
