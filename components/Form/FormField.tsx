import React from "react";

const FormField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  as = "input",
  options,
}: FormFieldProps) => {
  const InputToRender = ({ type }: { type: string }) => {
    if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }
    if (type === "select") {
      return (
        <select id={id} name={id} value={value} onChange={onChange}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <InputToRender type={as} />
    </div>
  );
};

export default FormField;
