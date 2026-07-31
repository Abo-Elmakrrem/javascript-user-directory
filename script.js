const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const cityInput = document.getElementById("city-input");
const usersContainer = document.getElementById("users");
const showNextUserButton = document.getElementById("show-user");
const addUserButton = document.getElementById("add-user-button");
const spanUserAdded = document.getElementById("user-added");
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

// adding new user function
function addNewUser() {
  const nameValue = nameInput.value.trim();
  const ageValue = Number(ageInput.value);
  const cityValue = cityInput.value.trim();
  if (!nameValue) {
    spanUserAdded.innerHTML = "Error please enter a valid name";
    return;
  }
  if (isNaN(ageValue)) {
    spanUserAdded.innerHTML = "Error please enter a valid age";
    return;
  } else if (ageValue <= 0) {
    spanUserAdded.innerHTML = "Error please enter a valid age";
    return;
  }
  if (!cityValue) {
    spanUserAdded.innerHTML = "Error please enter a valid city";
    return;
  }
  const newUserObject = { name: nameValue, age: ageValue, city: cityValue };

  users.push(newUserObject);
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  spanUserAdded.innerHTML = "user has been added";
  console.log(users);
  console.log(typeof ageValue);
}
addUserButton.addEventListener("click", addNewUser);

// show user function
let currentIndex = 0;
function showUser() {
  const currentUser = users[currentIndex];
  if (currentIndex < users.length) {
    const userCard = document.createElement("div");
    const nameHeader = document.createElement("h2");
    const ageHeader = document.createElement("h3");
    const cityHeader = document.createElement("h3");
    const deleteButton = document.createElement("button");
    userCard.className = "users-styling";
    nameHeader.textContent = currentUser.name;
    ageHeader.textContent = currentUser.age;
    cityHeader.textContent = currentUser.city;
    deleteButton.textContent = "delete user";
    nameHeader.className = "user-info";
    ageHeader.className = "user-info";
    cityHeader.className = "user-info";
    deleteButton.className = "no-more";
    deleteButton.addEventListener("click", function () {
      deleteButton.parentElement.remove();
      const userIndex = users.findIndex((user) => user === currentUser);
      users.splice(userIndex, 1);
      console.log(users, "inside the delete function");
    });
    // console.log(users, "show user fun");
    userCard.appendChild(nameHeader);
    userCard.appendChild(ageHeader);
    userCard.appendChild(cityHeader);
    userCard.appendChild(deleteButton);
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
