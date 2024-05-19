import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const InstructorDashboard = ()  => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(navigate('/login'));
    localStorage.clear(); 
    setIsLoggedIn(false);
    
  };

  return(
    <div>
      <h1>welcome , {username ? username : 'Guest'}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
export default InstructorDashboard