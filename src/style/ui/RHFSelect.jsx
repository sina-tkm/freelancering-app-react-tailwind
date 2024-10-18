function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className='mb-2 text-secondary-700  block'>
        {label}
        {required && <span className='text-error'>*</span>}
      </label>
      <select {...register(name)} id={name} className='textField__input'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
