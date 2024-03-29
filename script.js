document.addEventListener("DOMContentLoaded", function () {
    let dayNight = document.querySelector(".dayNight");
    let formSection = document.querySelector(".formSection");
    let banner = document.querySelector(".banner");

    dayNight.addEventListener("click", () => {
        formSection.classList.toggle("night");
        banner.classList.toggle("night");
    });
    let typing = new Typed("#text", {
        strings: ["Anime here!", "Shows here!"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
    });

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const confirmPassword = document.getElementById("confirm-password");
    const submit = document.getElementById("btn");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateInputs()) {
            // Save information to localStorage
            saveInformation(username.value, email.value, password.value);
    
            // Display the "Saved" popup
            displayPopup('Saved');
    
            // Log to console for debugging
            console.log('Saved to localStorage');
    
            // Reload the page
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    });

    username.addEventListener('input', () => resetStyles(username));
    email.addEventListener('input', () => resetStyles(email));
    password.addEventListener('input', () => resetStyles(password));
    confirmPassword.addEventListener('input', () => resetStyles(confirmPassword));

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue === '' || !isValidEmail(emailValue)) {
            setError(email, 'Please enter a valid email address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else {
            setSuccess(password);
        }

        if (confirmPasswordValue === '' || confirmPasswordValue !== passwordValue) {
            setError(confirmPassword, 'Passwords do not match');
        } else {
            setSuccess(confirmPassword);
        }

        return !document.querySelectorAll('.error').length; // Return true if no errors
    }

    // Rest of your code...

    function isValidEmail(email) {
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;

        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        inputControl.classList.remove('error');
        inputControl.classList.add('success');
    }

    const resetStyles = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';

        inputControl.classList.remove('error', 'success');
    }

    // Submit button click event
    
    const saveInformation = (username, email, password) => {
        // Save information to localStorage
        console.log('Saving information to localStorage...')
        const userInfo = { username, email, password };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    const displayPopup = (message) => {
        // You can replace this with your custom popup/modal logic
        console.log('Displaying popup...');
        alert(message);
    }

    
});
