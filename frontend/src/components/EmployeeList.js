import EmployeeCard from "./EmployeeCard";

/**
 * Displays list of employees
 */
export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div>
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
