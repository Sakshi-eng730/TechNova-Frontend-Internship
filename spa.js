function showPage(pageId) {

    // Get all website sections
    const pages = document.querySelectorAll(".page");

    // Hide all sections
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected section
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}