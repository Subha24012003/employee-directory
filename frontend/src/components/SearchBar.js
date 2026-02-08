/**
 * Search employees by Employee ID, name, or department
 */
export default function SearchBar({ onSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by Employee ID, Name, or Department"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
