import './App.css';
import { Router,Route,Switch } from 'react';


import Index from './components/common/Header';
import AdminDashboard from './components/Admin/AdminDashboard';
// import UserDashboard from './components/user/Userdashboard';
import VendorDashboard from './components/Vendor/VendorDashboard';
import AdminLoginPage from './components/Admin/Adminloginpage'; 
import UserLoginPage from './components/user/UserLogin'; 
import VendorLoginPage from './components/Vendor/VendorLogin';


function App() {

  return (
<Router>
      <Switch> 
       
     <Route path="/" exact component={Index} /> 
     <Route path="/admin" component={AdminLoginPage} />
    <Route path="/user" component={UserLoginPage} />
   <Route path="/vendor" component={VendorLoginPage} /> 
    <Route path="/admin-dashboard" component={AdminDashboard} /> 
    {/* <Route path="/user-dashboard" component={UserDashboard} />  */}
    <Route path="/vendor-dashboard" component={VendorDashboard} /> 
  

      </Switch>
    </Router>
  );
}

export default App;
