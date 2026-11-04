async function getUsers() {

    const userList = document.getElementById("userList");
    const message = document.getElementById("message");

    message.textContent = "Loading users...";
    userList.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }

        const users = await response.json();

        message.textContent = "Users loaded successfully!";

        users.forEach(function(user) {

            const card = document.createElement("div");

            card.className = "user-card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            userList.appendChild(card);

        });

    } catch (error) {

        message.textContent =
            "Error loading users. Please check your internet connection.";

        console.error(error);

    }
}