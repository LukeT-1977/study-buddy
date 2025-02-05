// src/main-page.js (or any other name you prefer)

export const greetUser = (userName) => {
  alert(`Hello, ${userName}! Welcome to Study Buddy Finder!`);
};

export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const handleSignIn = (fullName, email, password, confirmPassword, users) => {
  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Validate email
  if (!validateEmail(email)) {
    alert("Please enter a valid email!");
    return;
  }

  // Create a new user object
  const newUser = {
    fullName,
    email,
    password,
  };

  // Add new user to the users array
  users.push(newUser);

  // Greet the user
  greetUser(fullName);

  // Optionally, log the users array to the console
  console.log(users);
};
