document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("login-page").style.display = "none";
  document.getElementById("dashboard-page").style.display = "flex";
});

document.getElementById("sip-link").addEventListener("click", function () {
  showContent("sip-content");
});

document
  .getElementById("dashboard-link")
  .addEventListener("click", function () {
    showContent("dashboard-content");
  });

document
  .getElementById("registration-link")
  .addEventListener("click", function () {
    showContent("registration-content");
  });

document
  .getElementById("statement-link")
  .addEventListener("click", function () {
    showContent("statement-content");
  });

document.getElementById("message-link").addEventListener("click", function () {
  showContent("message-content");
});

document
  .getElementById("evaluation-link")
  .addEventListener("click", function () {
    showContent("evaluation-content");
  });

document
  .getElementById("timetable-link")
  .addEventListener("click", function () {
    showContent("timetable-content");
  });

document.getElementById("awards-link").addEventListener("click", function () {
  showContent("awards-content");
});

function showContent(contentId) {
  const contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(contentId).style.display = "block";
}

function populateLecturers() {
  const courseCode = document.getElementById("course-code-select").value;
  const lecturers = {
    MED101: "Dr. Smith",
    MED102: "Dr. Johnson",
    MED103: "Dr. Williams",
    MED104: "Dr. Brown",
    MED105: "Dr. Jones",
    MED106: "Dr. Garcia",
    MED107: "Dr. Martinez",
    MED201: "Dr. Rodriguez",
    MED202: "Dr. Martinez",
    MED203: "Dr. Hernandez",
    MED204: "Dr. Lopez",
    MED205: "Dr. Gonzalez"
  };
  document.getElementById("course-name").value = courseCode;
  const lecturerSelect = document.getElementById("lecturer-select");
  lecturerSelect.innerHTML = `<option value="${lecturers[courseCode]}">${lecturers[courseCode]}</option>`;
}


