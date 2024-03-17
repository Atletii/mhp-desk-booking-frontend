const ComboBox = ({ options, selected, onSelect }) => {
  return (
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="block appearance-none w-full border border-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
    </div>
  );
};

export default ComboBox;
