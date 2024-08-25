import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCrud = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ title: '', price: 0, description: '', image: '' });
    const [editing, setEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    // Fetch 
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Create 
    const createProduct = async () => {
        try {
            const response = await axios.post('https://fakestoreapi.com/products', product);
            setProducts([...products, response.data]);
            setProduct({ title: '', price: 0, description: '', image: '' });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    // Update 
    const updateProduct = async () => {
        try {
            const response = await axios.put(`https://fakestoreapi.com/products/${currentId}`, product);
            setProducts(products.map(item => item.id === currentId ? response.data : item));
            setEditing(false);
            setProduct({ title: '', price: 0, description: '', image: '' });
            setCurrentId(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete 
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Handle 
    const handleEdit = (product) => {
        setEditing(true);
        setCurrentId(product.id);
        setProduct({ title: product.title, price: product.price, description: product.description, image: product.image });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">CRUD App with Fake Store API</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={product.title}
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
                    className="border p-2 mb-2 w-full"
                />
                <textarea
                    placeholder="Description"
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={(e) => setProduct({ ...product, image: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <button
                    onClick={editing ? updateProduct : createProduct}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    {editing ? 'Update' : 'Create'}
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <img src={product.image} alt={product.title} className="w-auto  h-48 object-fit rounded-t-lg mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                        <p className="text-gray-700 mb-2">${product.price}</p>
                        <p className="text-gray-600">{product.description}</p>
                        <div className="mt-4">
                            <button
                                onClick={() => handleEdit(product)}
                                className="bg-yellow-500 text-white p-2 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCrud;
