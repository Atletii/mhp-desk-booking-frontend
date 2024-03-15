import React from 'react';

const InputField = ({ label, type, id, placeholder, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2 text-start">{label}</label>
      <input type={type} id={id} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded-md" />
    </div>
  );
};

export default InputField;
