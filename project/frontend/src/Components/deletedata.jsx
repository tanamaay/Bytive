import React from "react";

const DeleteData = ({ onDelete, userId }) => {
  const handleDelete = () => {
    onDelete(userId); // Pass userId to the onDelete function
  };

  return (
    <i
      className="bi bi-trash"
      style={{ fontSize: "25px", cursor: "pointer" }} // Added cursor pointer for better UX
      onClick={handleDelete}
    ></i>
  );
};

export default DeleteData;
