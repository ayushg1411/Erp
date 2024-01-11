import React from 'react'
import Form from '../Tools/Form'

const StorageComponent = ({page}) => {
      
  const initialValues = {
    "Storage Location": '',
    "Description": '',
    "Plant": '',
  // Added field
  };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} />
    </>
  )
}

export default StorageComponent