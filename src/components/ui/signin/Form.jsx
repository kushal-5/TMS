import React from 'react';

const FormInput = ({
  src,
  alt,
  htmlFor,
  labelClassName,
  inputClassName,
  label,
  type,
  id,
  placeholder,
  onSubmit,
  value,
  onChange,
  className = "",
  required = true,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="w-full">
        {label && (
          <label 
            htmlFor={htmlFor} 
            className={`block ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <div className="relative flex w-full">
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={`w-full ${inputClassName} ${src ? 'pl-12' : 'pl-4'}`}
            placeholder={placeholder}
            required={required}
          />
          {src && (
            <img
              src={src}
              alt={alt || "input icon"}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default FormInput;