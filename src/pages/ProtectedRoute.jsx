import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();

  useEffect(() => {
    const loginRoutesList = ['/login', '/register'];
    const privateRouteList = ['/dashboard'];

    if (user) {
      // If user is logged in and trying to access login routes, redirect to home
      if (loginRoutesList.includes(location.pathname)) {
        navigate('/dashboard');
      }
    } else {
      // If user is not logged in and trying to access private routes, redirect to login
      if (privateRouteList.includes(location.pathname)) {
        navigate('/');
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
