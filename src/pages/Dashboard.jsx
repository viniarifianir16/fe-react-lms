import { useAuthStore } from '../stores/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
