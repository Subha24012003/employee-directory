Employee Directory – Full Stack Application

A full-stack Employee Directory web application that allows users to manage employee records efficiently.
The application supports adding, viewing, searching, editing, and deleting employees, with Employee Id as the primary identifier to avoid duplicate issues.

 Features

 View a list of all employees

 Search employees by Employee ID (primary), name, or department

 Add new employees

 Edit existing employee details

 Delete employees with confirmation

 Mandatory unique Employee ID

 Responsive and professional UI (Green & White theme)

 Clean code structure following best practices

Tech Stack

Frontend

React.js

JavaScript (ES6+)

HTML5 & CSS3

Fetch API

Backend

Node.js

Express.js

In-memory data storage (can be extended to a database)

RESTful APIs

PROJECT STRUCTURE
employee-directory/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmployeeCard.js
│   │   │   ├── EmployeeForm.js
│   │   │   ├── EmployeeList.js
│   │   │   └── SearchBar.js
│   │   │
│   │   ├── pages/
│   │   │   └── Home.js
│   │   │
│   │   ├── services/
│   │   │   └── employeeService.js
│   │   │
│   │   ├── assets/
│   │   │   └── styles.css
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── data/
│   │   └── employees.js
│   ├── index.js
│   └── package.json
│
└── README.md

Search Behavior

Primary Search: Employee ID (recommended)

Secondary Search: Name or Department

This ensures accurate results even when multiple employees share the same name.

Backend API Endpoints
Method	Endpoint	         Description
GET	    /api/employees	     Fetch all employees
POST	/api/employees	    Add a new employee
PUT	    /api/employees/:id	Update employee details
DELETE	/api/employees/:id	Delete an employee

Design & Best Practices Followed

Component-based architecture

Separation of concerns (UI, services, routes)

Reusable and maintainable code

Controlled forms using React hooks

RESTful API design

User-friendly confirmations for delete actions

Future Enhancements

Database integration (MongoDB / PostgreSQL)

Authentication & role-based access

Pagination & sorting

Export employee data (CSV / Excel)

Deployment to cloud platforms