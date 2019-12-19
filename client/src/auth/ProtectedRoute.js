import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AxiosContext } from '../providers/AxiosProvider'

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    const { token } = useContext(AxiosContext)
    return (
        token ?
            <Route {...rest} component={Component} />
            : <Redirect to='/Articles' />
    );
};

export default ProtectedRoute;