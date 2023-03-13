import React, { useContext, useState } from 'react';

import { BsPersonCircle } from "react-icons/bs";
import { Link} from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
  
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="normal-case no-underline text-2xl font-bold">Odvut Solution</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    {
                        isAdmin &&
                        <>
                            <li><Link to='/addProducts'>Add products</Link></li>
                            <li><Link to='/manageProducts'>Manage Products</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="flex-none gap-2">
                

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="rounded-full">
                            {
                                user?.uid && <img src={user.photoURL} alt="" />
                            }
                            :
                            <BsPersonCircle className="text-4xl rounded-full"></BsPersonCircle>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            !user?.uid ? <>
                                <li><Link to='/register' className='no-underlinene'>Register</Link></li>
                                <li><Link to='/login' className='no-underlinene'>Login</Link></li></>
                                :
                                <li onClick={handleLogOut}><Link className='no-underlinene'>Logout</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;