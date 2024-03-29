Hosted Link:::::::   https://yt-codepen-clone-e325a.web.app

### App Component (App.js)
**Imports:**
The code starts with importing necessary dependencies and components from React, React Router, Firebase, and custom components.

**Functionality:**
- The App component is a functional component that serves as the main entry point of the application.
- It utilizes React hooks such as useState, useEffect, and useNavigate.
- `useEffect` handles authentication state changes with Firebase's `onAuthStateChanged` method, redirecting users based on their authentication status.
- Another `useEffect` fetches projects data from Firestore and updates the Redux store accordingly.
- The component renders a loading spinner while data is being fetched.
- React Router (Routes, Route, Navigate) is used for navigation.

  <img width="1440" alt="Screenshot 2024-02-09 at 9 33 06 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/27be3737-15b6-4203-8c00-872ff343d8cc">

**Documentation:**
The App component initializes the application, manages authentication state, fetches project data, and handles navigation.
It uses Firebase for authentication and Firestore for storing project data.
Redux is used for state management, with actions like SET_USER and SET_PROJECTS.
The component renders different routes for different parts of the application, such as the home page and new project creation page.

### Home Component (Home.js)
**Functionality:**
- The Home component represents the main dashboard of the application.
- It contains a sidebar menu, a search bar, and displays project information.
- Conditional rendering is used to display different content based on whether the user is authenticated or not.
- React Router is utilized for nested routing within the component.

<img width="1440" alt="Screenshot 2024-02-09 at 9 34 36 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/67ec4045-b290-41d4-a440-e6c697eaf834">

**Documentation:**
Home is a functional component that displays the main dashboard of the application.
It includes a sidebar menu for navigation and a search bar for filtering projects.
The component dynamically adjusts its layout based on the sidebar menu's state.
User authentication is checked to display different content for authenticated and unauthenticated users.
React Router is used for nested routing within the component to render different sections.

### SignUp Component (SignUp.js)
**Functionality:**
- The SignUp component provides functionality for user registration and authentication.
- It includes input fields for email and password, with validation.
- Users can register with email/password or sign in with Google.
- Error messages are displayed for invalid credentials.

<img width="1440" alt="Screenshot 2024-02-09 at 9 34 52 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/e8364232-90ab-412f-8840-100121027121">

**Documentation:**
SignUp is a functional component responsible for user registration and authentication.
It includes input fields for email and password, with validation for email format.
Users can register with email/password, and their credentials are stored securely in Firebase Authentication.
Alternatively, users can sign in with Google using OAuth authentication.
Error messages are displayed for various authentication errors, such as invalid email/password or account already exists.

### Projects Component
**Functionality:**
- The Projects component displays a list of projects fetched from the Redux store.
- It utilizes Redux's useSelector hook to retrieve user and projects data from the store.
- Projects are mapped and rendered using the ProjectCard component.

<img width="1440" alt="Screenshot 2024-02-09 at 9 37 32 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/ebf17e12-5457-4962-91a7-c8d003b8fcff">

### ProjectCard Component
**Functionality:**
- The ProjectCard component renders individual project cards.
- It receives project data, user information, and an index as props.
- Each card includes an iframe to display the project output and the user's profile picture or email initial.

### NewProject Component
**Functionality:**
- The NewProject component represents the page for creating a new project.
- It includes sections for HTML, CSS, and JavaScript coding.
- Users can write code in each section, and the output is displayed in real-time in an iframe.
- The component allows users to save their projects to Firestore.
- An alert message is displayed upon successful project saving.

**Header Section:**
- The header section includes the project title, which can be edited by clicking on it.
- Users can save the project using the "Save" button.
- User profile details are displayed on the right side of the header.

**Coding Section:**
- The coding section utilizes react-split-pane for horizontal and vertical splitting.
- Each section (HTML, CSS, JavaScript) includes a code editor powered by @uiw/react-codemirror.
- Users can write code in each section, and changes are reflected in real-time.
- The result of the code execution is displayed in an iframe below the coding sections.

**Save Functionality:**
- The `saveProgram` function is called when the user clicks the "Save" button.
- It generates a unique ID for the project, constructs the project document, and saves it to Firestore.
- An alert message is displayed upon successful project saving.

### Firebase Configuration
**Initialization:**
- Firebase is initialized using the `initializeApp` function from the Firebase SDK.
- The configuration object is provided with environment variables for security.

**Authentication and Firestore:**
- Authentication and Firestore instances are obtained using the `getAuth` and `getFirestore` functions, respectively.
- These instances are exported to be used throughout the application.

### UserProfileDetails Component
**Functionality:**
- The UserProfileDetails component displays the user's profile information, including their photo or email initial.
- It also provides a dropdown menu for additional actions like navigation and sign out.
- The menu items are dynamically generated based on the Menus array.

<img width="1440" alt="Screenshot 2024-02-09 at 9 41 54 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/cd3d5e91-7f2c-457d-9e2a-5c4ec48cc0a5">

**Documentation:**
The UserProfileDetails component provides a user-friendly interface for managing user profile details.
It offers functionalities such as displaying user profile information and providing a dropdown menu for additional actions.

### UserAuthInput Component
**Functionality:**
- The UserAuthInput component renders an input field for user authentication.
- It supports email and password input fields and provides an option to toggle password visibility.
- Email validation is performed dynamically, and the input field's border color changes accordingly.

<img width="1440" alt="Screenshot 2024-02-09 at 9 42 10 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/d01a7649-33e4-437c-aac9-f00908751ec9">

**Documentation:**
UserAuthInput provides a reusable input field component for user authentication purposes.
It supports dynamic email validation and password visibility toggling, enhancing user experience and security.

<img width="1440" alt="Screenshot 2024-02-09 at 9 42 19 PM" src="https://github.com/AnkitKumar1303/CodePen_Clone_APP/assets/42855900/7f195a08-0341-409b-82b7-507666150838">
