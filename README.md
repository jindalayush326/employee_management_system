## Employee Management Dashboard
The Employee Management Dashboard is a React.js web application that allows users to manage employee data, view statistics, and perform CRUD operations. It features a dashboard displaying employee stats, department-wise breakdowns, and recent joiners.

# Features

* Dashboard
    View total number of employees.
    See department-wise employee counts.
    List of recently joined employees.
    Visualize data using charts (e.g., bar chart for department counts).

* Employee Management
    Employee List: View a list of all employees.
    Employee Details: View detailed information about a specific employee.
    Add New Employee: Add a new employee to the system.
    Edit Employee: Edit an existing employee's details.
    Delete Employee: Remove an employee from the system.

* Additional Features
    Form validation for adding/editing employees.
    Responsive design using Material-UI.
    State management using React Hooks and Context API.
    Mock API integration using JSON Server.

# Prerequisites
Ensure you have the following installed on your system:

Node.js (version 14 or above) and npm
Git (optional but recommended)
JSON Server (for the mock API)

# Setup Instructions
1. Clone the Repository
git clone https://github.com/jindalayush326/employee_management_system.git
cd employee-management-dashboard

2. Install Dependencies

npm install
This will install all required dependencies, including React, Material-UI, Axios, and Chart.js.

3. Set Up JSON Server
Create a db.json file in the root of your project and populate it with initial mock data:



Run the following command to start the mock API:


npx json-server --watch db.json --port 5000
The JSON Server will be available at http://localhost:5000.

# Run Instructions
1. Start the React App

npm start
This will start the development server, and the application will be available at http://localhost:3000.

2. Start the Mock API
Ensure the mock API (JSON Server) is running on http://localhost:5000.

# Technologies Used
React.js: For building the user interface.
Material-UI: For responsive and modern UI components.
Axios: For handling HTTP requests to the mock API.
Chart.js: For data visualization.
JSON Server: For simulating a backend API.

# Routes Overview
Route	                    Description
/	                    Dashboard with stats and charts
/employees	            List of all employees
/employees/add	        Add a new employee
/employees/:id	        Employee details
/employees/:id/edit	    Edit an employee

# How to Use
Dashboard:

View total employees, department-wise counts, and recent joiners.
Use the "View Employee List" button to navigate to the Employee List.

Employee Management:

Add, view, edit, and delete employees from the list.

Charts and Visualization:

View department-wise breakdown using bar charts on the dashboard.

# Issues and Contributions
If you encounter any issues or bugs, feel free to open an issue on the repository. Contributions are also welcome through pull requests!

# License
This project is open source and available under the MIT License.
