// import React from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const AddProducts = () => { const navigate = useNavigate();
//     const handleAddPatient = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const phone = form.phone.value;
//         const address = form.address.value;
//         const disease = form.disease.value;
//         const condition = form.condition.value;

//         const detail = {
//             name: name,
//             email: email,
//             phone: phone,
//             address: address,
//             disease: disease,
//             condition: condition,
//         }


//         fetch('https://patient-care-app-server.vercel.app/details', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(detail)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.acknowledged) {
//                     toast('Patient details added successfully!');
//                     form.reset();
//                     navigate('/displayPatient')
//                 }
//                 console.log(data);
//             })
//             .catch(error => console.log(error))
//     }
//     return (
//         <div className="hero min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 <img src='{logo}' className="rounded-lg shadow- 2xl lg:w-1/2" alt='' />
//                 <div className='lg:ml-6 my-12 lg:w-1/2' >
//                     <h1 className='text-4xl font-bold text-center text-info my-6'>Enter Patient Details</h1>
//                     <div className='rounded-2xl shadow-xl bg-sky-50'>

//                         <form onSubmit={handleAddPatient} className="bg-light p-4 rounded-3 px-3 lg:px-12">
//                             <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
//                                 <div>
//                                     <label>
//                                         <h1 className=''>Patient Name</h1>
//                                     </label>
//                                     <input type="text" name='name' placeholder='Patient Name' required className='w-full my-3 p-2' />
//                                 </div>
//                                 <div>
//                                     <label>
//                                         <h1 className=''>Email</h1>
//                                     </label>
//                                     <input type="email" name='email' placeholder='Email' required className='w-full 
//                        my-3 p-2' />
//                                 </div>
//                                 <div>
//                                     <label>
//                                         <h1 className=''>Phone</h1>
//                                     </label>
//                                     <input type="text" name='phone' placeholder='Phone' required className='w-full 
//                        my-3 p-2' />
//                                 </div>
//                                 <div>
//                                     <label>
//                                         <h1 className=''>Address</h1>
//                                     </label>
//                                     <input type="text" name='address' placeholder='Address' required className='w-full 
//                        my-3 p-2' />
//                                 </div>
//                                 <div>
//                                     <label>
//                                         <h1 className=''>Disease Name</h1>
//                                     </label>
//                                     <input type="text" name='disease' placeholder='Disease Name' required className='w-full 
//                        my-3 p-2' />
//                                 </div>
//                                 <div>
//                                     <label>
//                                         <h1 className='mb-3'>Present Condition of Disease</h1>
//                                     </label>
//                                     <select className="w-full p-2" name='condition'>
//                                         <option disabled selected>Select The patients present condition</option>
//                                         <option>Severe</option>
//                                         <option>Moderate</option>
//                                         <option>Mild</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <input type="submit" value="Add Patient Details" className='btn btn-info text-white w-full my-5 rounded-none' />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default AddProducts;