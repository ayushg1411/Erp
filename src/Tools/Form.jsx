import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = ({initialValues}) => {

const validationSchema = Yup.object().shape(
    Object.keys(initialValues).reduce((acc, key) => {
      return {
        ...acc,
        [key]: Yup.string().required(`${key} is required`),
      };
    }, {})
  );

  const countryList = ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5', 'Country 6', 'Country 7', 'Country 8', 'Country 9', 'Country 10'];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        // // Assuming your API endpoint is 'https://api.example.com/sales'
        // const response = await axios.post('https://api.example.com/sales', values);
        // console.log('API response:', response.data);
        // // Add any additional logic here, e.g., redirect, show success message, etc.
        console.log(values);
        //   window.location.reload();
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors, e.g., show error message to the user
      }
    },
  });


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextField = form.elements[index + 1];

      // Check if the current field is filled before moving to the next one
      if (e.target.value.trim() !== '') {
        nextField && nextField.focus();
      }
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const form = e.target.form;
        const index = Array.from(form).indexOf(e.target);
        const nextField = form.elements[index - 1];
  
        // Check if the current field is filled before moving to the next one
        if (e.target.value.trim() !== '') {
          nextField && nextField.focus();
        }
      }
  };

  return (
   
  
           <div className="w-full bg-slate-200 mx-auto mt-1 p-1 rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit} className=" form-tab-css">
        {Object.keys(initialValues).map((fieldName) => (
          <div key={fieldName}  className="div-label-field">
            <label className="label-css">{fieldName}</label>
            {fieldName === 'selectCountry' ? ( // Render select box for 'city' field
              <select
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
                className={`input-tag-css ${
                  formik.touched[fieldName] && formik.errors[fieldName] ? ' custom-border' : ''
                }`}
              >
                <option value="" label="Select a country" />
                {countryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            ) : ( // Render regular input for other fields
              <input
                type="text"
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
                className={` input-tag-css
                  ${
                    formik.touched[fieldName] && formik.errors[fieldName] ?   'custom-border' : ''
                  }`}
              />
            )}
          
          </div>
        ))}

        <div className=''>
        <button>submit</button>
        </div>
      </form>
    </div>


  

   
  );
};

export default Form;
