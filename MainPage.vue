<template>
    <!-- Main container for the page -->
    <div class="main-page">
  
      <!-- Wrapper div for the content and header image -->
      <div class="div">
  
        <!-- Header image -->
        <img class="header" alt="Header" :src="header" />
  
        
  
  
        <!-- Sign-in form container -->
        <div class="sign-in-form">
  
          <!-- Section containing the text prompting the user to sign-in -->
          <div class="sign-in-text-frame">
            <p class="text-wrapper">Sign-in here to get started!</p>
          </div>
  
          <!-- Name input field section -->
          <div class="name-box">
            <p class="p">Please enter your full name</p>
          </div>
  
          <!-- Email input field section -->
          <div class="email-box">
            <p class="text-wrapper-2">Please enter your University Email</p>
          </div>
  
          <!-- Password input field section -->
          <div class="password-box">
            <div class="text-wrapper-3">Please enter a password</div>
          </div>
  
          <!-- Confirm password section -->
          <div class="overlap">
            <div class="confirming-password">
              <div class="text-wrapper-4">
                Please Re-enter your password
              </div>
            </div>
            <div class="confirm-password">Confirm&nbsp;&nbsp;Password:</div>
          </div>
  
          <!-- Label sections for each input field -->
          <div class="text-wrapper-5">Full name:</div>
          <div class="text-wrapper-6">Email:</div>
          <div class="text-wrapper-7">Password:</div>
  
          <!-- Text prompting users to log in if they already have an account -->
          <p class="text-wrapper-8">Already have an account? Login here</p>
  
          <!-- Sign-in button wrapper -->
          <div class="overlap-group">
            <button class="sign-in-button" @click="handleSignIn">Sign In</button>
          </div>
  
        </div>
  
        <!-- Footer section with text and small image -->
        <div class="overlap-2">
          <div class="text-wrapper-10">2024 Study-Buddy App</div>
          <img class="tempimageonpho" alt="Tempimageonpho" :src="tempImage" />
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainPage",
    data() {
      return {
        // Reference to the header image asset in the project
        header: require('@/assets/header.jpg'),
        // Placeholder for the temporary image (if used)
        // tempImage: require('@/assets/tempimageonpho4-1.jpg'),
      };
    },
  };
  </script>
  
  
  <style>
  .main-page {
    background-color: #cccccc;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .main-page .div {
    background-color: #cccccc;
    height: 2199.47px;
    overflow: hidden;
    position: relative;
    width: 2201px;
  }
  
  .main-page .header {
    height: 306px;
    left: 0;
    position: absolute;
    top: 0;
    width: 2201px;
  }
  
  
  
  
  .main-page .sign-in-form {
    background-color: #fff6f6;
    border-radius: 30.57px;
    height: 1570px;
    left: 567px;
    overflow: hidden;
    position: absolute;
    top: 357px;
    width: 1070px;
  }
  
  .main-page .sign-in-text-frame {
    height: 121px;
    left: 186px;
    position: absolute;
    top: 24px;
    width: 697px;
  }
  
  .main-page .text-wrapper {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 48.9px;
    font-weight: 600;
    left: 29px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 29px;
  }
  
  .main-page .name-box {
    background-color: #fff6f6;
    border: 1.53px solid;
    border-color: #292929;
    border-radius: 27.51px;
    height: 86px;
    left: 49px;
    overflow: hidden;
    position: absolute;
    top: 300px;
    width: 978px;
  }
  
  .main-page .p {
    color: #000000;
    font-family: "Inter-Thin", Helvetica;
    font-size: 36.7px;
    font-weight: 100;
    height: 44px;
    left: 261px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 18px;
    white-space: nowrap;
  }
  
  .main-page .email-box {
    background-color: #fff6f6;
    border: 1.53px solid;
    border-color: #1b1b1b;
    border-radius: 27.51px;
    height: 86px;
    left: 49px;
    overflow: hidden;
    position: absolute;
    top: 546px;
    width: 978px;
  }
  
  .main-page .text-wrapper-2 {
    color: #000000;
    font-family: "Inter-Thin", Helvetica;
    font-size: 36.7px;
    font-weight: 100;
    height: 44px;
    left: 205px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 18px;
    white-space: nowrap;
  }
  
  .main-page .password-box {
    background-color: #fff6f6;
    border: 1.53px solid;
    border-color: #282727;
    border-radius: 27.51px;
    height: 86px;
    left: 49px;
    overflow: hidden;
    position: absolute;
    top: 807px;
    width: 978px;
  }
  
  .main-page .text-wrapper-3 {
    color: #000000;
    font-family: "Inter-Thin", Helvetica;
    font-size: 36.7px;
    font-weight: 100;
    height: 44px;
    left: 284px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 18px;
    white-space: nowrap;
  }
  
  .main-page .overlap {
    height: 177px;
    left: 20px;
    position: absolute;
    top: 975px;
    width: 1007px;
  }
  
  .main-page .confirming-password {
    background-color: #fff6f6;
    border: 1.53px solid;
    border-color: #111010;
    border-radius: 27.51px;
    height: 86px;
    left: 29px;
    overflow: hidden;
    position: absolute;
    top: 92px;
    width: 978px;
  }
  
  .main-page .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-Thin", Helvetica;
    font-size: 36.7px;
    font-weight: 100;
    height: 44px;
    left: 228px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 18px;
    white-space: nowrap;
  }
  
  .main-page .confirm-password {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 48.9px;
    font-weight: 500;
    height: 105px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 514px;
  }
  
  .main-page .text-wrapper-5 {
    -webkit-text-stroke: 1.44px #000000;
    color: #1b1b1b;
    font-family: "Inter-Light", Helvetica;
    font-size: 48.9px;
    font-weight: 300;
    left: 47px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 217px;
    width: 274px;
  }
  
  .main-page .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 48.9px;
    font-weight: 500;
    height: 79px;
    left: -24px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 452px;
    width: 284px;
  }
  
  .main-page .overlap-group {
    position: absolute;
    top: 1230px;
    left: 204px;
    width: 662px;
    height: 151px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .main-page .sign-in-button {
    background-color: rgb(173, 7, 82);
    /* Green background  rgb(173,7,82)*/
    color: white;
    /* White text */
    font-family: "Inter", Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 600;
    padding: 15px 32px;
    /* Padding around text */
    border: none;
    /* Remove default border */
    border-radius: 50px;
    /* Rounded corners */
    cursor: pointer;
    /* Show pointer cursor on hover */
    transition: background-color 0.3s, transform 0.2s;
    /* Smooth transitions */
    text-align: center;
  }
  
  .main-page .sign-in-button:hover {
    background-color: rgb(173, 7, 82);
    /* Darker green when hovered */
    transform: scale(1.05);
    /* Slightly grow the button */
  }
  
  .main-page .sign-in-button:active {
    background-color: rgb(255, 117, 179);
    /* Even darker green when clicked */
  }
  
  .main-page .text-wrapper-7 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 48.9px;
    font-weight: 500;
    height: 89px;
    left: 24px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 715px;
    width: 290px;
  }
  
  .main-page .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 36.7px;
    font-weight: 400;
    height: 72px;
    left: 183px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    text-shadow: 0px 6.11px 6.11px #00000040;
    top: 1444px;
    width: 700px;
  }
  
  
  
  .main-page .text-wrapper-9 {
    color: #ffffff;
    font-family: "Inter-ExtraBold", Helvetica;
    font-size: 73.4px;
    font-weight: 800;
    height: 89px;
    left: 171px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 23px;
  }
  
  .main-page .overlap-2 {
    background-color: #242526;
    height: 196px;
    left: 3px;
    position: absolute;
    top: 2026px;
    width: 2204px;
  }
  
  .main-page .text-wrapper-10 {
    color: #ffffff;
    font-family: "Inter-Regular", Helvetica;
    font-size: 36.7px;
    font-weight: 400;
    height: 44px;
    left: 890px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 51px;
    white-space: nowrap;
  }
  
  .main-page .tempimageonpho {
    height: 18px;
    left: 862px;
    object-fit: cover;
    position: absolute;
    top: 70px;
    width: 23px;
  }
  </style>