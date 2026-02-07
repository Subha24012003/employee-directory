import { useEffect, useState } from "react";

/**
 * Form to add or edit employee
 */
export default function EmployeeForm({ onSubmit, selectedEmployee }) {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    role: "",
    department: "",
    gender: "",
    age: ""
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        employeeId: selectedEmployee.employeeId,
        name: selectedEmployee.name,
        role: selectedEmployee.role,
        department: selectedEmployee.department,
        gender: selectedEmployee.gender,
        age: selectedEmployee.age
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      id: selectedEmployee?.id
    });

    if (!selectedEmployee) {
      setFormData({
        employeeId: "",
        name: "",
        role: "",
        department: "",
        gender: "",
        age: ""
      });
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        name="employeeId"
        placeholder="Employee ID (e.g. EMP001)"
        value={formData.employeeId}
        onChange={handleChange}
        required
        disabled={!!selectedEmployee}
      />

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {selectedEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}
