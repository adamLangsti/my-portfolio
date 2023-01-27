// Skills, Experience, Education tabs
let tabLinks = document.getElementsByClassName('tab-links');
// Contents under these tags, web development, school education, and working experience.
let tabContents = document.getElementsByClassName('tab-contents');

// Loop over tablinks (skills, experience, education) and tab contents -
// removing the active link when clicked.
const openTab = (tabName) => {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    // Add active link to the current target that is clicked
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
};

// Javscript for opening and closing meny on smaller screens
const sidemenu = document.getElementById('sidemenu');

const openMenu = () => {
    sidemenu.style.right = '0';
};
const closeMenu = () => {
    sidemenu.style.right = '-200px';
};

// Form validation regex
// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };

// const form = document.querySelector('form');
// const nameInput = document.querySelector('input[name="name"]');
// const emailInput = document.querySelector("input[name='email']");
// const thankYou = document.querySelector('.thank-you');
// const textArea = document.querySelector('textarea');

// let isFormValid = false;
// let isValidationON = false;

// const inputs = [nameInput, emailInput, textArea];

// // Helper function for nameInput and emailInput
// const resetInput = (element) => {
//     element.classList.remove('invalid');
//     element.nextElementSibling.classList.add('hidden');
// };
// // Helper function for invalidate input
// const invalidateInput = (element) => {
//     element.classList.add('invalid');
//     element.nextElementSibling.classList.remove('hidden');
// };

// const validateInputs = () => {
//     if (!isValidationON) return;

//     isFormValid = true;
//     resetInput(nameInput);
//     resetInput(emailInput);

//     if (!nameInput.value) {
//         isFormValid = false;
//         invalidateInput(nameInput);
//     }

//     if (!validateEmail(emailInput.value)) {
//         isFormValid = false;
//         invalidateInput(emailInput);
//     }

//     if (!textArea.value) {
//         isFormValid = false;
//         invalidateInput(textArea);
//     }
// };

// form.addEventListener('submit', (event) => {
//     // event.preventDefault();
//     isValidationON = true;
//     validateInputs();
//     if (isFormValid) {
//         form.remove();
//         // form.reset();
//         thankYou.classList.remove('hidden');
//     }
// });

// inputs.forEach((input) => {
//     input.addEventListener('input', (event) => {
//         validateInputs();
//     });
// });
