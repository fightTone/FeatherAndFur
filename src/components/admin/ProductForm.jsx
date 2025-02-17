import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { theme } from '../../styles/theme';
import { Upload, Plus } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const ProductForm = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = theme.colors[isDarkMode ? 'dark' : 'light'];
  const { addProduct } = useContent();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageUrl = image ? URL.createObjectURL(image) : null;
    addProduct({ ...formData, image: imageUrl });
    setFormData({ title: '', price: '', description: '' });
    setImage(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="Product Title"
          className={`w-full p-2 rounded-md ${currentTheme.card.base}`}
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          type="text"
          placeholder="Price"
          className={`w-full p-2 rounded-md ${currentTheme.card.base}`}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
          className={`w-full p-2 rounded-md ${currentTheme.card.base}`}
        />
        <div className="flex items-center space-x-4">
          <label
            className={`
              flex flex-col items-center justify-center w-full h-32
              border-2 border-dashed rounded-lg cursor-pointer
              hover:bg-gray-700 transition-colors
              ${currentTheme.card.base}
            `}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-400" />
              <p className={`text-sm ${currentTheme.text.secondary}`}>
                Upload product image
              </p>
            </div>
            <input type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-primary-accent text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
