import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fetch data using axios inside the useEffect hook
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="user-list">
      <h2>List of Users</h2>
      <ul>
        {/* Map through the listOfUsers and display each user */}
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;