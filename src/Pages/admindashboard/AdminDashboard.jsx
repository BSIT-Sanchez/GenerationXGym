import { useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handler = () => {
    setToggle(!toggle);
  };
  
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(navigate('/login'));
    localStorage.clear(); 
    setIsLoggedIn(false);
    
  };
  return (
    <div className="relative flex h-screen justify-center items-center bg-bgButton">
    
      <div>
        <img src="/images/profile.jpg" alt="profile" className="h-10 w-10 rounded-full cursor-pointer" onClick={handler}/>
      </div>
      {
        toggle && (
          <div className="absolute  top-[210px] bg-fontColor h-[60px] w-[200px] rounded-md flex justify-center items-center gap-2 ">
            <Link to="https://bsit-sanchez.github.io/adminDashboard/dashboard.html" className="hover:bg-[#a7f3d0] transition-all duration-300 ease-in-out p-1 rounded-sm">Admin Dashboard</Link>
            <button onClick={handleLogout} className="hover:bg-[#dc2626] transition-all duration-300 ease-in-out p-1 rounded-sm">logout</button> 
          </div>
        )
      }
      
    </div>
    
  )
}

export default AdminDashboard