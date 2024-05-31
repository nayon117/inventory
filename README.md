# Sale Order Management Application

## Overview
This application is a Single Page Application (SPA) designed for a consumer goods manufacturing company to manage their sale orders. The application allows users to login, view active and completed sale orders, and create or edit sale orders through a user-friendly form. The application is built using React and several supporting libraries to ensure optimal performance and a seamless user experience.

## Features
1. **Authentication**: Users must log in with a email and password to access the application.
2. **Dark Theme Toggle**: Users can switch between light and dark themes. The selected theme persists across sessions.
3. **Tabs for Sale Orders**: The application has separate tabs for viewing active and completed sale orders.
4. **Create Sale Order**: Users can create a new sale order using a form presented in a modal.
5. **Edit Sale Order**: Active sale orders can be edited using a form prefilled with the order details. Completed sale orders can also be viewed in a read-only mode.
6. **Validation**: The sale order form includes validation rules to ensure data integrity.
7. **State Management**: The application uses Tanstack React Query to manage server state and React Hook Form for form state management.
8. **UI Components**: The application uses Chakra UI for styling and Chakra MultiSelect for product selection.

## Tech Stack
- **React 18+**
- **React Router DOM**: For routing purposes.
- **Tanstack React Query**: For managing server state.
- **React Hook Form**: For managing form state.
- **Chakra-UI**: For component UI library and styling.
- **Chakra MultiSelect**: For multi-select dropdowns compatible with Chakra UI.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/inventory.git
    cd sale-order-management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```

The application will be accessible at `http://localhost:5173`.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Special thanks to the open-source community for providing the libraries and tools used in this project.
- The project was developed as part of an assignment .