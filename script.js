// Function to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const humburgMenu = document.querySelector('.humburg-menu');
    const navMenu = document.querySelector('.nav-menu');
    const searchIcon = document.querySelector('.search-icon');
    const closeSearch = document.querySelector('.close-search');
    const headerSearch = document.querySelector('.header-search');
    const headerSearchInput = document.querySelector('.header-search-input');

    // Toggle mobile menu
    if (humburgMenu && navMenu) {
        humburgMenu.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            humburgMenu.classList.toggle('w-open'); // Add/remove class for hamburger animation
        });
    }

    // Toggle search bar visibility
    if (searchIcon && closeSearch && headerSearch && headerSearchInput) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            headerSearch.style.display = 'flex';
            searchIcon.style.display = 'none';
            headerSearchInput.focus();
        });

        closeSearch.addEventListener('click', function(e) {
            e.preventDefault();
            headerSearch.style.display = 'none';
            searchIcon.style.display = 'block';
            headerSearchInput.value = ''; // Clear search input
        });
    }

    // Handle newsletter form submission (basic example)
    const newsletterForm = document.getElementById('wf-form-Contact-Form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const emailInput = newsletterForm.querySelector('#email');
            const policyCheckbox = newsletterForm.querySelector('#policy');
            const successMessage = newsletterForm.querySelector('.success-message');
            const errorMessage = newsletterForm.querySelector('.error-message');

            // Reset messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            if (emailInput.value && policyCheckbox.checked) {
                // Simulate successful submission
                successMessage.style.display = 'block';
                emailInput.value = ''; // Clear input
                policyCheckbox.checked = false; // Uncheck checkbox
            } else {
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Please enter a valid email and agree to the terms.';
            }
        });
    }
});
