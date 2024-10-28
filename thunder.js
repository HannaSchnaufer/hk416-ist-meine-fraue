console.log("OK");

const meticulous = "https://reqres.in/api/users";

async function hitAPI() {
  try {
    const api = await fetch(meticulous);
    const { data } = await api.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(users) {
  const container = document.getElementById("userData");
  container.innerHTML = ""; // Clear any previous data

  users.forEach((user) => { // Corrected here
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name}'s avatar">
      <p>Name: ${user.first_name} ${user.last_name}</p>
      <p>Email: ${user.email}</p>
    `;
    container.appendChild(userDiv);
  });
}

hitAPI();
