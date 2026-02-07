const API_URL = "http://localhost:5000/api/employees";

/**
 * Fetch all employees
 */
export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

/**
 * Add new employee
 */
export const addEmployee = async (employeeData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeData)
  });
  return response.json();
};

/**
 * Update existing employee
 */
export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeData)
  });
  return response.json();
};
/**
 * Delete employee
 */
export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  return response.json();
};
