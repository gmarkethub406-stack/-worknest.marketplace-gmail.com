document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("jobSearch");

  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        searchJobs();
      }
    });
  }
});

function searchJobs() {
  const searchInput = document.getElementById("jobSearch");

  if (!searchInput) {
    return;
  }

  const search = searchInput.value.trim();

  if (search === "") {
    alert("Please enter a job, skill or service to search.");
    return;
  }

  window.location.href =
    "jobs.html?search=" + encodeURIComponent(search);
}

function showMessage(message) {
  alert(message);
}
