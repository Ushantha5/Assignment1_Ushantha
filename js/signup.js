const form = document.getElementById("signup");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;
  dfw;

  // Name validation
  const name = document.getElementById("Name");
  const nameError = document.getElementById("nameError");
  // const nameRegex = https://regex-vis.com/?r=%2F%5Ehttps%3F%3A%5C%2F%5C%2F%28www%5C.%29%3F%5B-a-zA-Z0-9%40%3A%25._%5C%2B%7E%23%3D%5D%7B2%2C256%7D%5C.%5Ba-z%5D%7B2%2C6%7D%5Cb%28%5B-a-zA-Z0-9%40%3A%25_%5C%2B.%7E%23%28%29%3F%26%2F%2F%3D%5D*%29%24%2F;
  if (name.value.trim() === "") {
    nameError.innerText = "Name is required";
    nameError.style.display = "block";
    isValid = false;
  } else if (!nameRegex.test(name.value.trim())) {
    nameError.innerText =
      "Name must be at least 4 letters and contain only alphabets";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // If valid, show alert
  if (isValid) {
    alert("registered successfully!");
    form.reset();
  }
});
