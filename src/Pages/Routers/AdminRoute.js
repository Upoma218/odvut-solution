import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = () => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading) {
        return Children
    }
    if(user && isAdmin) {
        return <p className='p-12 text-center font-bold text-4xl text-primary'>'Loading.....'</p>
    }
    return (
        <Navigate to='/login' state={{from:location}} replace>
        </Navigate>
    );
};

export default AdminRoute;