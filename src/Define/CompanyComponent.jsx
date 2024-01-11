import React from 'react'
import Form from '../Tools/Form'

const CompanyComponent = ({page}) => {
    const initialValues = {
        company: '',
        companyName: '',
        street: '',
        pobox: '',
        postalCode: '',
        city: '', // Updated to use a select box
        selectCountry: '',
        currency: 'inr',
      };
   
  return (


 <>
    {/* <div className='flex'>
  
    
    </div> */}
    <Form initialValues={initialValues} />
    </>
  )
}

export default CompanyComponent