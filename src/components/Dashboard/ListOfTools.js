import React from "react";

const ListOfTools = ({ tool, index,_id }) => {
  const { name, price, quantity, img, description } = tool;

  const handleDelete = () =>{
      
  } 
  return (
    <tr>
    <td>{index + 1}</td>
    <td>
      <div class="avatar">
        <div class="w-20 rounded">
          <img
            src={img}
            alt="kitchen tools"
          />
        </div>
      </div>
    </td>
    <td>{name}</td>
    <td>{quantity} pcs</td>
    <td>${price}</td>
    <td><button onClick={handleDelete} className="btn">Delete</button></td>
  </tr>
  );
};

export default ListOfTools;
