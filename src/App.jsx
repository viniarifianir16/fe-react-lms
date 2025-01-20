import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Welcome from './pages/Welcome';

import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import Modul from './pages/Modul/Modul';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ModulForm from './pages/Modul/ModulForm';

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
          path="/signin"
          element={
            <>
              <PageTitle title="Sign In" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Sign Up" />
              <SignUp />
            </>
          }
        />

        {/* Dashboard */}
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

        {/* Modul */}
        <Route
          path="/moduls"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Modul" />
                <Modul />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/modulsform"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Modul Form" />
                <ModulForm />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/modulsform/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Modul Form" />
                <ModulForm />
              </ProtectedRoute>
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
