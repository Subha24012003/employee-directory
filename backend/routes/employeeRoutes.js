const express = require("express");
const router = express.Router();
const employees = require("../data/employees");

/**
 * Get all employees
 */
router.get("/", (req, res) => {
  res.json(employees);
});

/**
 * Add a new employee
 */
router.post("/", (req, res) => {
  const { employeeId, name, role, department, gender, age } = req.body;

  // Check if employeeId already exists
  const exists = employees.find(
    emp => emp.employeeId === employeeId
  );

  if (exists) {
    return res
      .status(400)
      .json({ message: "Employee ID already exists" });
  }

  const newEmployee = {
    id: Date.now(),
    employeeId,
    name,
    role,
    department,
    gender,
    age
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});



/**
 * Update employee
 */
router.put("/:id", (req, res) => {
  const employeeIndex = employees.findIndex(
    emp => emp.id == req.params.id
  );

  if (employeeIndex !== -1) {
    employees[employeeIndex] = {
      ...employees[employeeIndex],
      name: req.body.name,
      role: req.body.role,
      department: req.body.department,
      gender: req.body.gender,
      age: req.body.age
    };

    res.json(employees[employeeIndex]);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});



module.exports = router;
