import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imageBB_key;

    const navigate = useNavigate();
    const navigation = useNavigation();

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        title: data.title,
                        image: imgData.data.url
                    }


                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Product added successfully`);
                            navigate('/products')
                        })
                }
            })
    }

    if(navigation.state === 'loading'){
        return <button className="btn text-white btn-circle btn-lg loading"></button>
    }


    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-white my-6'>Add Products</h1>
            <div className='lg:w-3/4 lg:mx-44'>
                <div className='p-7 rounded-2xl bg-white lg:mx-auto'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("title", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Enter Your Product Name' />
                            {errors.title && <p className='text-red-600 py-3'>{errors.title.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs mt-5">
                            <label className="label"> <span className="label-text"></span></label>
                            <input type='file' {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered border-dashed w-full min-w-xs p-2" placeholder='Upload Your Photo' />
                            {errors.image && <p className='text-red-600 py-3'>{errors.image.message}</p>}
                        </div>
                        <input className='btn text-white mt-5 w-full' value="Add Product" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;