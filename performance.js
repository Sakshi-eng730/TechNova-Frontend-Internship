function checkPerformance() {

    const status = document.getElementById("status");

    const navigation =
        performance.getEntriesByType("navigation")[0];

    if (navigation) {

        const loadTime =
            navigation.loadEventEnd - navigation.startTime;

        status.textContent =
            "Page load time: " +
            (loadTime > 0 ? loadTime.toFixed(2) + " ms" :
            "Not available yet");

    } else {

        status.textContent =
            "Performance information is unavailable.";

    }
}