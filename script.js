// Function to save user information to local storage
function saveUserInfo() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    const userInfo = {
        name,
        phone,
        village,
        city
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

// Function to update the form fields with the saved user information
function updateForm() {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (storedUserInfo) {
        document.getElementById('name').value = storedUserInfo.name;
        document.getElementById('phone').value = storedUserInfo.phone;
        document.getElementById('village').value = storedUserInfo.village;
        document.getElementById('city').value = storedUserInfo.city;
    }
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save the current state of dark mode in local storage
    localStorage.setItem('darkModeEnabled', JSON.stringify(body.classList.contains('dark-theme')));
}

// Check if dark mode is enabled in local storage
const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
if (darkModeEnabled) {
    document.body.classList.add('dark-theme');
}

// Initial update of the form fields when the page loads
updateForm();

// Add event listener to the form for auto-save
const userInfoForm = document.getElementById('userInfoForm');
userInfoForm.addEventListener('input', saveUserInfo);
