import React from 'react';
import ProductsWrapper from './components/productsWrapper';
import ShoeType from './components/shoeType';
import ShoeDetails from './components/shoeDetails';
import './App.css'
import images from './assets';

const App: React.FC = () => {
  return (
    <div>
      <ProductsWrapper>
        <ShoeType imageSrc={images.prodImage} />
        <ShoeDetails
          name="Awesome Sneakers"
          description="Comfortable and stylish sneakers for all-day wear."
          price="45.95"
        />
      </ProductsWrapper>
    </div>
  );
};

export default App;
