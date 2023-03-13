import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateInfo = () => {
    const previousInfo = useLoaderData();
    console.log(previousInfo)
    const navigate = useNavigate();
    console.log(previousInfo)

    const handleEdit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const info = {
            title: title,
        }
        console.log(info)

        fetch(`https://odvut-solution-server.vercel.app/editInfo/${previousInfo._id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(info)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Information Updated SuccessFully');
                    console.log(data)
                    navigate('/manageProducts')
                }
            })
    }
    return (
        <div className='lg:mx-60'>
            <h1 className='text-4xl font-bold text-center my-6'>Update Product Information</h1>
            <form onSubmit={handleEdit} className="border border-1 border-gray-500 p-4 px-6 py-12 ">
                <div className=''>
                    <div>
                        <label>
                            <h1 className=''>Name</h1>
                        </label>
                        <input type="text" name='title' defaultValue={previousInfo.title} required className='w-full 
                       my-3 p-2 bg-info border-none' />
                    </div>
                </div>
                <input type="submit" value="Update Patient Information" className='btn btn-info text-white w-full my-5 rounded-none' />
            </form>
        </div>
    );
};

export default UpdateInfo;