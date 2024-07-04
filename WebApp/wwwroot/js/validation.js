document.addEventListener("DOMContentLoaded", function () {
    // Sign up form validation
    var signUpForm = document.querySelector('#signup-form');

    signUpForm.addEventListener('submit', function (event) {
        var firstName = document.getElementById('FirstName').value.trim();
        var lastName = document.getElementById('LastName').value.trim();
        var email = document.getElementById('Email').value.trim();
        var password = document.getElementById('Password').value.trim();
        var confirmPassword = document.getElementById('ConfirmPassword').value.trim();
        var termsAndConditions = document.getElementById('TermsAndConditions').checked;

        console.log("Validating sign-up form...");
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        console.log("Terms & Conditions:", termsAndConditions);

        var firstNameError = document.querySelector('#form-firstname span');
        var lastNameError = document.querySelector('#form-lastname span');
        var emailError = document.querySelector('#form-email span');
        var passwordError = document.querySelector('#form-password span');
        var confirmPasswordError = document.querySelector('#form-confirmpassword span');
        var termsAndConditionsError = document.querySelector('#termsAndConditionsError');

        var isValid = true;

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (firstName === '') {
            firstNameError.textContent = 'First name is required';
            isValid = false;
        } else {
            firstNameError.textContent = '';
        }

        if (lastName === '') {
            lastNameError.textContent = 'Last name is required';
            isValid = false;
        } else {
            lastNameError.textContent = '';
        }

        if (email === '') {
            emailError.textContent = 'Email address is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (password === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Invalid password';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (confirmPassword === '') {
            confirmPasswordError.textContent = 'Confirm password is required';
            isValid = false;
        } else if (confirmPassword !== password) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        if (!termsAndConditions) {
            termsAndConditionsError.textContent = 'Please agree to the Terms & Conditions';
            isValid = false;
        } else {
            termsAndConditionsError.textContent = '';
        }

        if (!isValid) {
            console.log("Sign-up form validation failed.");
            event.preventDefault();
        } else {
            console.log("Sign-up form validation successful.");
        }
    });
});






