import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const navigate = useNavigate()
    const {productName, price, quantity, img, description, _id} = tool;
    return (
        <div>
            <h2>{productName}</h2>
            <h2>{price}</h2>
            <h2>{quantity}</h2>
            <img src={img} alt="" />
            <p>{description}</p>
            <button onClick={()=>{navigate(`/purchase/${_id}`)}} className='btn'>Buy Now</button>
        </div>
    );
};

export default Tool;