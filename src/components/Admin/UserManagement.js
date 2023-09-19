import React, { useState } from 'react';
import MaintenanceMenu from './MaintenanceMenu';



function UserManagement() {
  const [currentView, setCurrentView] = useState('maintenance');

  const handleHomeClick = () => {
    setCurrentView('maintenance');
  };

  const handleLogoutClick = () => {
   
    alert('Logged out');
  };

  const handleUserManagementClick = () => {
    setCurrentView('userManagement');
  };

  const handleMembershipManagementClick = () => {
    setCurrentView('membershipManagement');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={() => setCurrentView('maintenance')}>Maintenance Menu</button>
      {currentView === 'maintenance' && (
        <MaintenanceMenu
          onHomeClick={handleHomeClick}
          onLogoutClick={handleLogoutClick}
          onUserManagementClick={handleUserManagementClick}
          onMembershipManagementClick={handleMembershipManagementClick}
        />
      )}
      {currentView === 'userManagement' && <UserManagement />}
      {currentView === 'membershipManagement' && <MembershipManagement />}
    </div>
  );
}

export default UserManagement;