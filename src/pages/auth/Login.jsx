import { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/Constants';
import { useAuthStore } from '../../stores/auth';

export default function Login() {
  const inputRef = useRef(null);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = inputRef.current;

    if (!email || !password) {
      Swal.fire('Error', 'Username and password are required', 'error');
      return;
    }

    try {
      let res = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });
      // console.log('Response from server:', res.data);

      if (res && res.data) {
        let {
          token,
          user: { email, name },
        } = res.data;
        localStorage.setItem('token', token);
        login({ token, email, name });
        Swal.fire('Success!', 'Login Successful', 'success');
        navigate('/dashboard');
      } else {
        Swal.fire('Error', 'Invalid response from server', 'error');
      }
    } catch (error) {
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Invalid username or password',
        'error'
      );
    }

    if (inputRef.current) {
      inputRef.current.reset();
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <form onSubmit={submitLogin} ref={inputRef} className="text-center">
      <input name="email" type="text" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
