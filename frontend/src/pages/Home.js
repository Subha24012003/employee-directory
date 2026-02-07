import { deleteEmployee } from "../services/employeeService";
import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee
} from "../services/employeeService";

import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleSubmit = async (employeeData) => {
    if (employeeData.id) {
      await updateEmployee(employeeData.id, employeeData);
    } else {
      await addEmployee(employeeData);
    }
    fetchEmployees();
    setSelectedEmployee(null);
  };
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if (confirmDelete) {
    await deleteEmployee(id);
    fetchEmployees();
  }
};


  const filteredEmployees = employees.filter((emp) => {
  const term = searchTerm.trim().toLowerCase();

  // If search box is empty, show all
  if (!term) return true;

  // Priority: Employee ID
  if (emp.employeeId.toLowerCase().includes(term)) {
    return true;
  }

  // Secondary search
  return (
    emp.name.toLowerCase().includes(term) ||
    emp.department.toLowerCase().includes(term)
  );
});


  return (
  <div className="app-container">
    <h2>Employee Directory</h2>

    <p style={{ textAlign: "center", color: "#555", fontSize: "14px" }}>
      Search using Employee ID for best results
    </p>

    <SearchBar onSearch={setSearchTerm} />

    <EmployeeForm
      onSubmit={handleSubmit}
      selectedEmployee={selectedEmployee}
    />

    <EmployeeList
  employees={filteredEmployees}
  onEdit={setSelectedEmployee}
  onDelete={handleDelete}
/>

  </div>
);


}
