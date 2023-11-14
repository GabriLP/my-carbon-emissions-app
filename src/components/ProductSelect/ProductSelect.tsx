import React from 'react';

interface ProductSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="product-select">Choose a product:</label>
      <select id="product-select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="carbonmonoxide">Carbon Monoxide</option>
        <option value="methane">Methane</option>
        <option value="ozone">Ozone</option>
        <option value="nitrogendioxide">Nitrogen Dioxide</option>
      </select>
    </div>
  );
};

export default ProductSelect;