import React from 'react';

type ProductsWrapperProps = {
  children: React.ReactNode;
};

const ProductsWrapper = ({ children }: ProductsWrapperProps) => {
  return <div className="products-wrapper">{children}</div>;
};

export default ProductsWrapper;
