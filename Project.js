document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutDropdown = document.getElementById("aboutDropdown");

    const companyHistoryBtn = document.getElementById("companyHistoryBtn");
    const companyHistoryDropdown = document.getElementById("companyHistoryDropdown");

    // Toggle About dropdown
    aboutBtn.addEventListener("click", function (event) {
        event.preventDefault();
        aboutDropdown.classList.toggle("active");

        // Close Company History dropdown when About dropdown is toggled
        if (!aboutDropdown.classList.contains("active")) {
            companyHistoryDropdown.classList.remove("active");
        }
    });

    // Toggle Company History dropdown
    companyHistoryBtn.addEventListener("click", function (event) {
        event.preventDefault();
        companyHistoryDropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            aboutDropdown.classList.remove("active");
            companyHistoryDropdown.classList.remove("active");
        }
        if (!event.target.closest(".nested-dropdown")) {
            companyHistoryDropdown.classList.remove("active");
        }
    });
});
