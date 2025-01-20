import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/Constants';
import { useAuthStore } from '../stores/Auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { user } = useAuthStore();
  const token = user?.token;
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `${baseUrl}/api/change-password`,
        {
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: newPasswordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire('Success!', 'Password change successfully', 'success');
      navigate('/dashboard');
    } catch (error) {
      Swal.fire(
        'Error',
        (error as any).response?.data?.message ||
          'An error occurred. Please try again.',
        'error'
      );
    }
  };
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className="">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Change Password
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Old Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Enter old password"
                      required
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      New Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      New Password Confirm
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      value={newPasswordConfirmation}
                      onChange={(e) =>
                        setNewPasswordConfirmation(e.target.value)
                      }
                      placeholder="Confirm new password"
                      required
                    />
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
