// // PageComponent.jsx
// import React from 'react';

// const PageComponent = ({ page }) => {
//     console.log(page);
//   return (
//     <div className='bg-gray-300'>
//       <h1 className='text-4xl m-1'>{page.name}</h1>
//       <p  className='text-4xl m-1'>ID: {page._id}</p>
//       <p  className='text-4xl m-1'>TCode: {page.create}</p>
//       <p  className='text-4xl m-1'>Create :{
//         page.create==true? (<h1>yes</h1>): ( <h1>no</h1> )
//      }
//       </p>
//       {/* Add other relevant information */}
//     </div>
//   );
// };

// export default PageComponent;


// PageComponent.jsx
import React from 'react';
import CreditControlComponent from './Define/CreditControlComponent';
import CompanyComponent from './Define/CompanyComponent';
import ControlBar from './Tools/ControlBar';
import StorageComponent from './Define/StorageComponent';
// Import other components as needed

const PageComponent = ({ page }) => {
  const renderPageContent = () => {
    switch (page.name) {
      case 'CREDIT_CONTROL':
        return <CreditControlComponent page={page} />;
      case 'COMPANY':
        return <CompanyComponent page={page} />;
     case 'STORAGE_POINT':
            return <StorageComponent page={page} />;
      default:
        return <div>No content found for {page.name}</div>;
    }
  };

  return (
    <div >
        <ControlBar controls={page} />
        {renderPageContent()}
    </div>
  );
};

export default PageComponent;
