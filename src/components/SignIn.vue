<template>
    <!-- Main container for the page -->
    <div class="main-container">
  
      <!-- Wrapper div for the content and header image -->
      <div class="content-wrapper">
  
        <!-- Header image -->
        <img class="header-image" alt="Header" :src="header" />
  
        <!-- Sign-up form container -->
        <div class="sign-up-form-container">
  
          <!-- Section containing the text prompting the user to sign-up -->
          <div class="sign-up-text-container">
            <p class="sign-up-text">Sign-up here to get started!</p>
          </div>
  
          <!-- Full Name input field section -->
          <div class="name-input-container">
            <label>Full Name:</label>
            <input v-model="fullName" type="text" placeholder="Enter your full name" class="input-field" />
          </div>
  
          <!-- Email input field section -->
          <div class="email-input-container">
            <label>Email:</label>
            <input v-model="email" type="email" placeholder="Enter your university email" class="input-field" />
          </div>
  
          <!-- Password input field section -->
          <div class="password-input-container">
            <label>Password:</label>
            <input v-model="password" type="password" placeholder="Enter a password" class="input-field" />
          </div>
  
          <!-- Confirm password section -->
          <div class="confirm-password-input-container">
            <div class="confirm-password-label">
              <label>Confirm Password:</label>
            </div>
            <input v-model="confirmPassword" type="password" placeholder="Re-enter your password" class="input-field" />
          </div>
  
          <!-- Text prompting users to log in if they already have an account -->
          <p class="login-prompt">Already have an account? Login here</p>
  
          <!-- Sign-up button wrapper -->
          <div class="sign-up-button-wrapper">
            <button class="sign-up-button" @click="handleSignUp">Sign Up</button>
          </div>
  
        </div>
  
        <!-- Footer section with text and small image -->
        <div class="footer">
          <div class="footer-text">2024 Study-Buddy App</div>
          <img class="footer-image" alt="Tempimageonpho" :src="tempImage" />
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpPage",
    data() {
      return {
        header: require('@/assets/header.jpg'),
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSignUp() {
        // Sign-up logic here
        if (this.password === this.confirmPassword) {
          console.log("Form submitted with:", this.fullName, this.email, this.password);
        } else {
          alert("Passwords do not match!");
        }
      }
    }
  };
  </script>
  
  <style>
  /* General Reset for Body */
  body, html {
    margin: 0;
    padding: 0;
    font-family: "Inter", Helvetica, sans-serif;
    box-sizing: border-box;
  }
  
  /* Main container for the page */
  .main-container {
    background-color: #cccccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }
  
  /* Wrapper div for content */
  .content-wrapper {
    background-color: #cccccc;
    width: 100%;
    max-width: 1200px; /* Limit the max width */
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    margin-top: 20px;
  }
  
  /* Header image */
  .header-image {
    width: 100%;
    max-height: 30vh; /* 30% of the viewport height */
    object-fit: cover;
    border-radius: 10px;
  }
  
  /* Sign-up form container */
  .sign-up-form-container {
    background-color: #fff6f6;
    border-radius: 30px;
    width: 100%;
    max-width: 600px; /* Max width of the form */
    padding: 30px;
    box-sizing: border-box;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Sign-up text */
  .sign-up-text-container {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .sign-up-text {
    font-size: 32px;
    font-weight: 600;
    color: #000;
    line-height: 1.4;
  }
  
  /* Input field styles */
  .input-field {
    background-color: #fff6f6;
    border: 1.53px solid #292929;
    border-radius: 27.51px;
    width: 100%;
    padding: 15px;
    font-size: 18px;
    margin-top: 15px;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  
  /* Label styles */
  .input-label {
    font-size: 22px;
    font-weight: 500;
    color: #000;
    margin-top: 20px;
    text-align: left;
  }
  
  /* Button styling */
  .sign-up-button {
    background-color: rgb(173, 7, 82);
    color: white;
    font-size: 24px;
    font-weight: 600;
    padding: 15px 32px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    width: 100%;
    margin-top: 30px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center;
  }
  
  .sign-up-button:hover {
    background-color: rgb(160, 6, 75);
    transform: scale(1.05);
  }
  
  .sign-up-button:active {
    background-color: rgb(255, 117, 179);
  }
  
  /* Footer section */
  .footer {
    background-color: #242526;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 10px;
  }
  
  .footer-text {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
  }
  
  /* Text prompting to log in */
  .login-prompt {
    font-size: 20px;
    text-align: center;
    color: #000;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .login-prompt:hover {
    color: #8e44ad; /* Hover effect color */
  }
  
  /* Responsive Design Tweaks */
  @media (max-width: 768px) {
    /* For smaller devices, adjust font sizes and layout */
    .sign-up-text {
      font-size: 28px;
    }
  
    .input-field {
      font-size: 16px;
      padding: 12px;
    }
  
    .input-label {
      font-size: 20px;
    }
  
    .sign-up-button {
      font-size: 20px;
      padding: 12px 24px;
    }
  
    .header-image {
      max-height: 25vh;
    }
  
    .sign-up-form-container {
      padding: 20px;
    }
  
    .footer {
      height: 80px;
    }
  
    .footer-text {
      font-size: 16px;
    }
  }
  
  @media (max-width: 480px) {
    /* For mobile devices, make more adjustments */
    .sign-up-text {
      font-size: 24px;
    }
  
    .input-field {
      font-size: 14px;
      padding: 10px;
    }
  
    .input-label {
      font-size: 18px;
    }
  
    .sign-up-button {
      font-size: 18px;
      padding: 10px 20px;
    }
  
    .header-image {
      max-height: 20vh;
    }
  
    .sign-up-form-container {
      padding: 15px;
    }
  
    .footer {
      height: 60px;
    }
  
    .footer-text {
      font-size: 14px;
    }
  }
  </style>
  