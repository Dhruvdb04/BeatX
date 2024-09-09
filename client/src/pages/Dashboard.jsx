import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/common/common.css';



function Dashboard() {
  const navigate = useNavigate();
  
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;

  const logout = ()=>{
    console.log("logout clicked")
    localStorage.removeItem('accessToken')
    navigate('/');
    // toast.success("logged out")
  }

  return (
    <div>

      {
        isLoggedIn && (
          <button onClick={logout} className='w-fit inputField flexbox bg-red-500/85 font-medium text-[rgb(255,247,247)]'>
            Logout
          </button>
        )
      }

      <section>
        Dashboard
      </section>

    </div>
  )
}

export default Dashboard