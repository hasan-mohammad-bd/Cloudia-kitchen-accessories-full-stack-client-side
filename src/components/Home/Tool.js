import React from 'react';

const Tool = ({tool}) => {
    const {productName, price, quantity, img, description} = tool;
    return (
        <div>
            <h2>{productName}</h2>
            <h2>{price}</h2>
            <h2>{quantity}</h2>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default Tool;