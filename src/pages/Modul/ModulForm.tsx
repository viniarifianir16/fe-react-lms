import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import { baseUrl } from '../../utils/Constants';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../stores/Auth';

const ModulForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const token = user?.token;
  const [moduleName, setModuleName] = useState('');
  const [presenters, setPresenters] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dateFinish, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setIsUpdateMode(true);
      fetchModuleData(id);
    }
  }, [id]);

  const fetchModuleData = async (moduleId: string) => {
    try {
      const response = await axios.get(`${baseUrl}/api/moduls/${moduleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const moduleData = response.data;
      setModuleName(moduleData.module_name);
      setPresenters(moduleData.presenters);
      setDescription(moduleData.description);
      setStartDate(moduleData.start_date);
      setEndDate(moduleData.date_finish);
      setStatus(moduleData.status);
    } catch (error) {
      Swal.fire(
        'Error',
        (error as any).response?.data?.message || 'Failed to fetch module data',
        'error'
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // console.log('Submitting with token:', token);
      await axios.post(
        `${baseUrl}/api/moduls`,
        {
          module_name: moduleName,
          presenters,
          description,
          start_date: startDate,
          date_finish: dateFinish,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire('Success!', 'Modul created successfully', 'success');
      navigate('/moduls');
    } catch (error) {
      Swal.fire(
        'Error',
        (error as any).response?.data?.message ||
          'An error occurred. Please try again.',
        'error'
      );
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // console.log('Updating with token:', token);
      await axios.put(
        `${baseUrl}/api/moduls/${id}`,
        {
          module_name: moduleName,
          presenters,
          description,
          start_date: startDate,
          date_finish: dateFinish,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire('Success!', 'Modul updated successfully', 'success');
      navigate('/moduls');
    } catch (error) {
      Swal.fire(
        'Error',
        (error as any).response?.data?.message ||
          'An error occurred. Please try again.',
        'error'
      );
    }
  };

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <>
      <Breadcrumb pageName="Modul" />

      <div>
        <div className="flex flex-col gap-9">
          {/* <!-- Modul Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {isUpdateMode ? 'Update Modul' : 'Create Modul'}
              </h3>
            </div>
            <form onSubmit={isUpdateMode ? handleUpdate : handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Judul <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="moduleName"
                    value={moduleName}
                    onChange={(e) => setModuleName(e.target.value)}
                    placeholder="masukkan judul modul"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pemateri <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="presenters"
                    value={presenters}
                    onChange={(e) => setPresenters(e.target.value)}
                    placeholder="Masukkan nama pemateri"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Deskripsi <span className="text-meta-1">*</span>
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                    placeholder="Masukkan deskripsi modul"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  ></textarea>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Tanggal Mulai
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="Pilih tanggal mulai"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Tanggal Selesai
                    </label>
                    <input
                      type="date"
                      id="dateFinish"
                      value={dateFinish}
                      onChange={(e) => setEndDate(e.target.value)}
                      placeholder="Pilih tanggal selesai"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    {' '}
                    Status{' '}
                  </label>

                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      id="status"
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                        changeTextColor();
                      }}
                      className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        isOptionSelected ? 'text-black dark:text-white' : ''
                      }`}
                      required
                    >
                      <option
                        value=""
                        disabled
                        className="text-body dark:text-bodydark"
                      >
                        Pilih status
                      </option>
                      <option
                        value="active"
                        className="text-body dark:text-bodydark"
                      >
                        Active
                      </option>
                      <option
                        value="inactive"
                        className="text-body dark:text-bodydark"
                      >
                        Inactive
                      </option>
                    </select>

                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  {isUpdateMode ? 'Update Modul' : 'Create Modul'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModulForm;
