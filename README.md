# Expatswap User Management Frontend

This repository contains the frontend implementation for the Expatswap User Management Module. It provides a user interface for creating, fetching, and managing users, with support for pagination and date filtering.

## Technologies Used

- React: JavaScript library for building user interfaces
- Vite: Next generation frontend tooling for modern web development
- Axios: Promise-based HTTP client for making requests to the backend API

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Chandrasura25/Expatswap-Frontend
    ```

2. Navigate to the project directory:

    ```bash
    cd expatswap-frontend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    This will start the development server and open the application in your default web browser. You can view the application at `http://localhost:3000`.

## Folder Structure

```
expatswap-user-management-frontend/
│
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages (React components)
│   ├── App.css           # Global styles
│   └── index.js          # Entry point
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation (you are here)
```

## Features

- **User Creation:** Allows users to create new user profiles by entering required information such as first name, last name, email, phone number, date of birth, and password.
- **User Fetching:** Fetches a list of users from the backend API and displays them in a paginated table.
- **Date Filtering:** Provides the ability to filter the list of users by a range of date of birth using date input fields.
- **Pagination:** Implements pagination controls to navigate through multiple pages of user data.

## Components
- **`UserForm`:** A form component for creating new user profiles.
- **`UsersTable`:** A table component for displaying the list of users with pagination and date filtering.

## Dependencies

- **axios:** Used for making HTTP requests to the backend API.
- **react-router-dom:** (optional) If you want to implement client-side routing for different pages or components.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.