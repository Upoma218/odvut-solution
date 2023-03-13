import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Products</h1>
            <div className='mx-36 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
                {
                    products?.length && products.map(product =>
                        <div key={product._id} className="card shadow-xl bg-white">
                            <figure className="px-4 pt-4">
                                <img src={product.image} alt="Shoes"className='w-32 h-48' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-secondary">{product.title}</h2>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Products;