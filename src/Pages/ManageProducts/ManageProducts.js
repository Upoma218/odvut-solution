import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteProducts, setDeleteProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully');
                        const remaining = deleteProducts.filter(dPatient => dPatient._id !== id);
                        setDeleteProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-white my-6'>Manage All Products</h1>
            <div className="overflow-x-auto border-1 lg:px-12" >
                <table className="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length && products.map(product =>
                                <tr key={product._id}>
                                    <td>{product.title}</td>
                                    <td><div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td><Link to={`/editInfo/${product._id}`}><button className="btn btn-sm btn-info text-white">Edit</button></Link></td>
                                    <td><button onClick={() => { handleDelete(product._id) }} className="btn btn-sm btn-error text-white">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;