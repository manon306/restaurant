// Initialize pre-existing user data only if localStorage is empty
const defaultUsers = [
    {
        first_name: "habiba",
        last_name: "ashraf",
        email: "test@gmail.com",
        password: "1234test"
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers)); // Store default users in localStorage
}

// Objects to store form data
const formData = {}; // Registration form data
const logedUser = {}; // Login form data

// Update form data on input change for registration
function updateFormData(event) {
    const { name, value } = event.target; // Get input name and value
    formData[name] = value.trim(); // Remove extra spaces and store
    console.log("Registration Data:", formData); // Log updated form data
}

// Validate and add user on registration form submission
function registerUser(event) {
    event.preventDefault(); // Prevent page reload

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []; // Get existing users
    const alert = document.querySelector('#signUp-alert'); // Select alert container

    // Check for empty fields
    if (
        !formData.first_name || 
        !formData.last_name || 
        !formData.email || 
        !formData.password
    ) {
        alert.innerHTML = `
            <div class="alert alert-danger p-2" role="alert">
                Inputs Cannot Be Empty. Please Fill All Fields.
            </div>
        `;
        console.log("Inputs Cannot Be Empty. Please Fill All Fields");
        return;
    }

    // Check if email already exists
    const emailExists = existingUsers.some(user => user.email === formData.email);

    if (emailExists) {
        alert.innerHTML = `
            <div class="alert alert-danger p-2" role="alert">
                Email Already Exists. Please Go to the Login Page.
            </div>
        `;
        console.log("Email Already Exists");
        return;
    }

    // Add new user and save to localStorage
    existingUsers.push(formData); // Add user to the array
    localStorage.setItem("users", JSON.stringify(existingUsers)); // Update localStorage

    // Show success message
    alert.innerHTML = `
        <div class="alert alert-success p-2" role="alert">
            Registration Successful! You Can Now Log In.
        </div>
    `;
    console.log("New User Added:", formData); // Log new user
}

// Update login data on input change
function logData(event) {
    const { name, value } = event.target; // Get input name and value
    logedUser[name] = value.trim(); // Remove extra spaces and store
    console.log("Login Data:", logedUser); // Log updated login data
}

// Handle login on form submission
function login(event) {
    event.preventDefault(); // Prevent form reload

    const alert = document.querySelector('#login-alert'); // Select alert container
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []; // Get saved users from localStorage

    // Validate credentials
    const userFound = savedUsers.some(user => 
        user.email === logedUser.email && user.password === logedUser.password
    );

    if (userFound) {
        // Redirect on successful login
        location.href = './r.html';
        console.log("Login Successful!");
    } else {
        // Show error message for invalid credentials
        alert.innerHTML = `
            <div class="alert alert-danger p-2" role="alert">
                Invalid email or password. Please try again.
            </div>
        `;
        console.log("Invalid email or password.");
    }
}