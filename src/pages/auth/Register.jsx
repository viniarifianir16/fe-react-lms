import { baseUrl } from '../../utils/Constants';
import axios from 'axios';
import { useRef } from 'react';
import Swal from 'sweetalert2';

export default function Register() {
  const inputRef = useRef(null);

  const submitRegister = async (e) => {
    e.preventDefault();
    const {
      username: { value: username },
      email: { value: email },
      password: { value: password },
      password_confirmation: { value: password_confirmation },
    } = inputRef.current;

    try {
      await axios.post(`${baseUrl}/api/register`, {
        username,
        email,
        password,
        password_confirmation,
      });
      Swal.fire({
        title: 'Success!',
        text: 'Register Success, you can login with this email',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text:
          err.response?.data?.message || 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
    inputRef.current.reset();
  };

  return (
    <form onSubmit={submitRegister} ref={inputRef}>
      <input name="username" type="text" placeholder="Username" />
      <input name="email" type="text" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input
        name="password_confirmation"
        type="password"
        placeholder="Password Confirmation"
      />
      <button type="submit">Register</button>
    </form>
  );
}
