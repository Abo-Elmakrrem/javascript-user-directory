const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const cityInput = document.getElementById("city-input");
const usersContainer = document.getElementById("users");
const showNextUserButton = document.getElementById("show-user");
const addUserButton = document.getElementById("add-user-button");
const spanUserAdded = document.getElementById("user-added");

function addNewUser() {
  console.log(nameInput.value, ageInput.value, cityInput.value);
  const newUserObject = { name: "", age: 0, city: "" };
  newUserObject.name = nameInput.value;
  newUserObject.age = ageInput.value;
  newUserObject.city = cityInput.value;
  users.push(newUserObject);
  console.log(newUserObject);
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  spanUserAdded.innerHTML = "user has been added";
}
addUserButton.addEventListener("click", addNewUser);
// array of users
const users = [
  {
    name: "ahmed",
    age: 33,
    city: "cairo",
  },
  {
    name: "mohamed",
    age: 40,
    city: "alex",
  },
  {
    name: "sara",
    age: 28,
    city: "cairo",
  },
];
let currentIndex = 0;
// show user function
function showUser() {
  const currentUser = users[currentIndex];
  if (currentIndex < users.length) {
    const userCard = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h3_City = document.createElement("h3");
    userCard.className = "users-styling";
    h2.textContent = currentUser.name;
    h3.textContent = currentUser.age;
    h3_City.textContent = currentUser.city;
    h2.className = "user-info";
    h3.className = "user-info";
    h3_City.className = "user-info";

    userCard.appendChild(h2);
    userCard.appendChild(h3);
    userCard.appendChild(h3_City);
    usersContainer.appendChild(userCard);
    currentIndex++;
  } else if (currentIndex === users.length) {
    const h1 = document.createElement("h1");
    h1.textContent = "there is no more users";
    h1.classList.add("users-styling");
    usersContainer.appendChild(h1);
    showNextUserButton.disabled = true;
    const spanMsg = document.createElement("span");
    spanMsg.textContent = "no clicks anymore";
    spanMsg.classList.add("users-styling");
    usersContainer.appendChild(spanMsg);
    showNextUserButton.innerHTML = "NO MORE!";
    showNextUserButton.classList.remove("button_show");
    showNextUserButton.classList.add("no-more");
  }
}
showNextUserButton.addEventListener("click", showUser);
