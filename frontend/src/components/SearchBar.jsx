const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar usuario"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
    />
  )
}

export default SearchBar
