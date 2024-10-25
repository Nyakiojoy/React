// import React from 'react';

type ShoeDetailsProps = {
  name: string;
  description: string;
  price: string;
};

const ShoeDetails = ({ name, description, price }: ShoeDetailsProps) => {
  return (
    <div className="shoe-details">
      <h1>{name}</h1>
      <p>{description}</p>
      <p className="price">Price: €{price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ShoeDetails;
