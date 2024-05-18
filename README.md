# React Registration Page

This project is a user registration page built with React. It includes form validation and interacts with a backend API to create users. The form collects user information such as full name, contact number, email, date of birth, and password.

 
## Features

- User registration form with validation
- Real-time error feedback using React Toastify
- Integration with backend API for user creation

## Technologies Used

- React
- Axios for HTTP requests
- React Toastify for notifications
- CSS for styling

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/hi-manss/user-registration-react-app.git
   cd registration-page
2. **Install dependencies:**

   ```sh
   npm install

3. **Run the application:**
   ```sh
   npm start

The application will be available at http://localhost:3000.

### **Usage**
- Fill in the registration form with your information.

- If any fields are invalid, error messages will be displayed in real-time.
- Once all fields are filled correctly, click the "Submit" button to register.
- If the registration is successful, a success message will be displayed.

    
## API Integration
- The registration form submits user data to a backend API endpoint for registration:

Endpoint: https://fullstack-test-navy.vercel.app/api/users/create

 Method: POST

 Payload:

    
        {
          "full_name": "John Doe",
          "contact_number": "1234567890",
          "email": "johndoe@example.com",
          "date_of_birth": {
            "day": "15",
            "month": "04",
            "year": "1990"
          },
          "password": "mysecretpassword"
        }
         
### **Usage**
  Fill in the registration form:

    Full Name
    Contact Number
    Email
    Date of Birth (Day, Month, Year)
    Password
    Confirm Password
    Submit the form:

- If the form is correctly filled, a success message will be shown.
- If there are any errors, they will be displayed on the form and a toast notification will be shown.
 
### Cancel the form:
 - Clears all the input fields and resets the form.
      

## Screenshots
![image](https://github.com/hi-manss/user-registration-react-app/assets/101518009/bc746194-ea7f-4486-a4af-4b80f5471866)
![image](https://github.com/hi-manss/user-registration-react-app/assets/101518009/72314ff7-d972-42f5-9e89-a98696a28dc5)

