import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Products = () => {
const products = useLoaderData()
const [pages, setPages] = useState(1);
const [cardNumber, setCardNumber] = useState(4);

const lastPostIndex = pages * cardNumber;
const firstPostIndex = lastPostIndex - cardNumber;
const currentPost = products.slice(firstPostIndex, lastPostIndex)
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Products</h1>
            <div className='mx-36 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
                {
                    currentPost?.length && currentPost.map(product =>
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
            <Pagination totalCard={products.length} cardNumber={cardNumber} setPages={setPages}></Pagination>
        </div>
    );
};

export default Products;