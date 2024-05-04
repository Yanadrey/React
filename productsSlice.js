import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProductById: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            state.products = state.products.map(product =>
                product.id === id ? { ...product, ...updatedProduct } : product
            );
        },
        toggleAvailability: (state, action) => {
            const id = action.payload;
            state.products = state.products.map(product =>
                product.id === id ? { ...product, available: !product.available } : product
            );
        },
    },
});

export const { addProduct, deleteProductById, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;