import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./Components/Userlist";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const updateUser = (updatedUser) => {
    axios
      .put(`http://localhost:5000/users/${updatedUser._id}`, updatedUser)
      .then(() => {
        const updatedUsers = users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "red" }}>User Profiles</h1>
      <UserList users={users} onDelete={deleteUser} onUpdate={updateUser} />
    </div>
  );
};

export default App;
