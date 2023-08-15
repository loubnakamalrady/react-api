import React from 'react';
import UserList from './userList';

const App = () => {
  return (
    <div className="app">
      {/* Page title */}
      <h1>User List</h1>

      {/* Component for displaying the list of users */}
      <UserList />
    </div>
  );
};

export default App;