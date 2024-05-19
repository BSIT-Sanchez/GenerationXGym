import  { GrMenu }  from 'react-icons/gr'
import { useState} from "react";
import AdminSidebar from "../Components/AdminSideBar/AdminSidebar";
import MobileSidebar from '../Components/AdminSideBar/MobileSidebar';
import {useNavigate} from 'react-router-dom'


const AdminDashboard = ({children}) => {
  const navigate = useNavigate();
  const [isopen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const toggleSidebar  = () => {
    setIsOpen(!isopen);
  }
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(navigate('/login'));
    localStorage.clear(); 
    setIsLoggedIn(false);
    
  };
  return(
    <div className="h-screen bg-bgHeader grid grid-cols-1  md:grid-cols-12">
      <AdminSidebar isOpen ={isopen}/>
      

      <div className={`${isopen ? 'col-span-10 bg-bgHeader' : 'bg-bgHeader col-span-12 fixed top-0 left-0 w-full'}`}>
        <div className="bg-fontColor shadow-lg rounded-sm p-3 relative">
          <div className="container mx-auto">
              <GrMenu onClick={toggleSidebar} className="cursor-pointer text-bgButton font-[900] text-[20px]"/>
          </div>
          <MobileSidebar isOpen ={isopen}/>

        </div>
        <div> 
          <div>dfuigdugfugfugfuigdfuiui</div>
          <button onClick={handleLogout}>logout</button>
        </div>
      

      </div>


      

    </div>
  )
}
export default AdminDashboard