import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';

// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import PageComponent from './PageComponent';

const App = () => {
  const [data, setCheckData] = useState([]);

const [dataFetched, setDataFetched] = useState(false);

useEffect(() => {
  const fetchCheckData = async () => {
    try {
      if (!dataFetched) { // Check if data has not been fetched yet
        const response = await axios.get(
          `http://localhost:3002/api/user/getSides/get`
        );
        setCheckData(response.data.side);
        console.log(response.data.side);
        setDataFetched(true); // Set dataFetched to true after successful fetch
      }
    } catch (error) {
      console.error("Error fetching check data:", error);
    }
  };

  fetchCheckData();
}, [dataFetched]); 
  return (
    <Router>
      <div className="flex">
      <div className=''>
      <Sidebar data={data} />
      </div>
        <div className="w-auto ">
          <Routes>
            {data.map((section) =>
              section.checks.map((page) => (
                <Route
                  key={page._id}
                  path={`/${section.name.toLowerCase()}/${page.tcode}`}
                  element ={<PageComponent page={page}/>}
                  
                />
                
              ))
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
