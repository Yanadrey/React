import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from './productsSlice';

const AddProductForm = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ id: uuidv4(), name: '', description: '', price: 0, available: false });

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct({ id: uuidv4(), name: '', description: '', price: 0, available: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product name" />
            <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;