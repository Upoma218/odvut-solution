import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(1);
    const [cardNumber, setCardNumber] = useState(4); 
    const [searchQuery, setSearchQuery] = useState('');
    
    const lastPostIndex = pages * cardNumber;
    const firstPostIndex = lastPostIndex - cardNumber;
    const currentPost = products.slice(firstPostIndex, lastPostIndex)

    useEffect(() => {
        fetch('https://odvut-solution-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter products based on search query
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Products</h1>
            <form onSubmit={handleSearch} className='flex justify-center items-center'>
                <input
                    type="text"
                    placeholder="Search products"
                    className="bg-white p-1 text-black border-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input type="submit" value="Search" className='btn btn-sm rounded-none text-white' />
            </form>
            <div className='mx-36 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
                {
                    currentPost?.length && currentPost.map(product =>
                        <div key={product._id} className="card shadow-xl bg-white">
                            <figure className="px-4 pt-4">
                                <img src={product.image} alt="Shoes" className='w-32 h-48' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.title}</h2>
                            </div>
                        </div>)
                }
            </div>
            <Pagination totalCard={products.length} cardNumber={cardNumber} setPages={setPages}></Pagination>
        </div>
    );
};

export default Products;
