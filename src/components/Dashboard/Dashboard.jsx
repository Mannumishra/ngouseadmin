
import React from 'react';
import PersonalDetails from './PersonalDetails';


function Dashboard() {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <div className="dashboard">
        {/* <Card/>
        <Table/> */}
        <PersonalDetails/>
      </div>
    
    </>
  );
}

export default Dashboard;
