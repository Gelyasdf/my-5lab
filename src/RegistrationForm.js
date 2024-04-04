import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './RegistrationForm.css'; // Импортируем файл стилей

function RegistrationForm() {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Здесь можно обработать данные формы
    setIsSubmitted(true);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <button className='submit-button' type="submit">Submit</button>
      {isSubmitted && <p className="submit-message">Form submitted successfully!</p>}
    </form>
  );
}

export default RegistrationForm;