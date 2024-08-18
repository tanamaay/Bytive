


import React, { useState } from "react";
import Favorites from "./Favorites";
import DeleteData from "./deletedata";
import EditUser from "./EditUser";

const UserData = ({ user, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={avatarUrl}
        className="card-img-top"
        alt={`${user.name}'s avatar`}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="card-text">
          <strong>Website:</strong>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
        <p className="card-text">
          <strong>Company:</strong> {user.company.name}
        </p>
        <div className="d-flex justify-content-between mt-3">
          <Favorites />
          <i
            className="bi bi-pencil-square"
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={handleEditClick}
          ></i>
          <DeleteData onDelete={onDelete} />
        </div>
      </div>
      {isEditing && (
        <EditUser
          user={user}
          onClose={handleClose}
          onSave={onUpdate}
        />
      )}
    </div>
  );
};

export default UserData;




