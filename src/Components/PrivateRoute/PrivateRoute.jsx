import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);
    if(loading){
        return (
            <div className='w-full justify-center h-[400px] text-center py-[200px]'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/register"></Navigate>
};

export default PrivateRoute;