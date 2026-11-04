const animateBtn = document.getElementById("animateBtn");
const message = document.getElementById("message");

animateBtn.addEventListener("click", function () {
    message.textContent = "Great! Animation started successfully.";

    message.classList.remove("animate-again");

    // Restart the animation
    void message.offsetWidth;

    message.classList.add("animate-again");
});

// Reveal cards when they enter the screen
const cards = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    cards.forEach(function (card) {
        observer.observe(card);
    });
} else {
    cards.forEach(function (card) {
        card.classList.add("visible");
    });
}