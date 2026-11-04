function showName() {

    const name = document.getElementById("userName").value.trim();

    const result = document.getElementById("result");

    if (name === "") {
        result.style.color = "red";
        result.textContent = "Please enter your name!";
    } else {
        result.style.color = "green";
        result.textContent = "Welcome to TechNova, " + name + "!";
    }
}