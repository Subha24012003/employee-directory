/**
 * Displays employee information in a card
 */
export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="employee-card">
      <div className="employee-info">
        <h4>{employee.name}</h4>

        <p><strong>Employee ID:</strong> {employee.employeeId}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Gender:</strong> {employee.gender}</p>
        <p><strong>Age:</strong> {employee.age}</p>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onEdit(employee)}>Edit</button>

        <button
          style={{ backgroundColor: "#d32f2f" }}
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
