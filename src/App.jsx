import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Welcome from './pages/Welcome';

import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Modul from './pages/modul/Modul';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <PageTitle title="Home" />
              <Welcome />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login" />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <PageTitle title="Register" />
              <Register />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Dashboard" />
                <Dashboard />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/modul"
          element={
            <>
              <PageTitle title="Modul" />
              <Modul />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar" />
              <Calendar />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
