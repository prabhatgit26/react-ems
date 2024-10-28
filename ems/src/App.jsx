import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == 'admin@ems.com' && password == '123') {
      console.log("This is Admin", user);
      setUser('admin');
    }else if(email == 'employee@example.com' && password == '123'){
      console.log("This is User", user);
      setUser('employee')
    }
    else{
      alert("Invalid Credentials");
    }
  }
  

  return <>
  {!user ? <Login handleLogin={handleLogin} /> : ''}
  {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
  {/* <EmployeeDashboard /> */}
  {/* <AdminDashboard /> */}


  </>;
};

export default App;
