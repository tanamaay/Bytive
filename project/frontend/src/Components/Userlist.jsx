
import React from "react";
import UserData from "./Userdata";
import Loaders from "./loaders";

const UserList = ({ users, onDelete, onUpdate }) => {
  if (!users.length) return <Loaders />;

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserData
          key={user.id}
          user={user}
          onDelete={() => onDelete(user.id)}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default UserList;
