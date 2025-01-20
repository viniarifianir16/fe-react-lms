// @ts-nocheck
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/Auth';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();

  useEffect(() => {
    const loginRoutesList = ['/signin', '/signup'];
    const privateRouteList = ['/dashboard', '/moduls', '/settings'];

    if (user) {
      // If user is logged in and trying to access login routes, redirect to dashboard
      if (loginRoutesList.includes(location.pathname)) {
        navigate('/dashboard');
      }
    } else {
      // If user is not logged in and trying to access private routes, redirect to login page
      if (privateRouteList.includes(location.pathname)) {
        navigate('/signin');
      }
    }
  }, [user, location.pathname, navigate]);

  // If the user is not authenticated, return null or a loading state
  if (!user) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
