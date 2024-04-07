document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");

  // Function to toggle navigation list visibility
  function toggleNavList() {
    navList.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  }

  // Toggle navigation list visibility when menu toggle is clicked
  navToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up

    toggleNavList();
  });

  // Hide navigation list when clicking outside of it
  document.body.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
      navList.classList.remove("active");
      document.body.classList.remove("nav-open");
    }
  });
});
