import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

interface ProductSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProductSelect: React.FC<ProductSelectProps> = ({ value, onChange }) => {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
    >
      <FormControl sx={{ my: 2 }}>
        <InputLabel id="product-select-label">Choose a product</InputLabel>
        <Select
          labelId="product-select-label"
          id="product-select"
          value={value}
          label="Choose a product"
          onChange={(e) => onChange(e.target.value as string)}
        >
          <MenuItem value="carbonmonoxide">Carbon Monoxide</MenuItem>
          <MenuItem value="methane">Methane</MenuItem>
          <MenuItem value="ozone">Ozone</MenuItem>
        </Select>
      </FormControl>
    </motion.div>
  );
};

export default ProductSelect;