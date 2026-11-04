console.log("TechNova Bootstrap Website Loaded Successfully!");

const serviceButtons = document.querySelectorAll(".card .btn");

serviceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Learn More button clicked!");
    });
});