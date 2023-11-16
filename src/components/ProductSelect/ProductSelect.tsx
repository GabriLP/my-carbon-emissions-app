import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface ProductSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ value, onChange }) => {
  return (
    <FormControl sx={{ my: 2 }}>
      <InputLabel id="product-select-label">Choose a product</InputLabel>
      <Select
        labelId="product-select-label"
        id="product-select"
        value={value}
        label="Choose a product"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="carbonmonoxide">Carbon Monoxide</MenuItem>
        <MenuItem value="methane">Methane</MenuItem>
        <MenuItem value="ozone">Ozone</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProductSelect;