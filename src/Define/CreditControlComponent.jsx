import React from 'react'
import Form from '../Tools/Form'

const CreditControlComponent = ({page}) => {
        const initialValues = {
          "Credit Control Area": '',
          "Currency": '',
          "Update": '',
          "Rep group": '',
          "Fy Variant": '',
          "Risk Category": '',
          "Credit Limit": '',
        
          "All coCodes": '', // Added field
        };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues}  />
    </>
  )
}

export default CreditControlComponent