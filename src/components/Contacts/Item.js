import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <div className="edit">
        <Link to={`/edit/${item.id}`}>Edit</Link>
        <span className="deleteBtn" onClick={() => handleDelete(item.id)}>
          x
        </span>
      </div>
    </li>
  );
}

export default Item;
