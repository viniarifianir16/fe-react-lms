import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import { baseUrl } from '../../utils/Constants';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../stores/Auth';

const ModulDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const token = user?.token;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [presenter, setPresenter] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeFinish, setTimeFinish] = useState('');
  const [dateStart, setStartDate] = useState('');
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
      setTitle(moduleData.title);
      setContent(moduleData.content);
      setPresenter(moduleData.presenter);
      setTimeStart(moduleData.time_start);
      setTimeFinish(moduleData.time_finish);
      setStartDate(moduleData.date_start);
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

  const Separator = () => {
    return <div className="h-px bg-gray-300 my-2" />;
  };

  return (
    <>
      <Breadcrumb pageName="Modul" />

      <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-5 py-4 text-center">
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {title}
            </h3>
            <p className="font-medium">with {presenter}</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  30
                </span>
                <span className="text-sm">Peserta</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  5
                </span>
                <span className="text-sm">Materi</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              {/* <h4 className="font-semibold text-black dark:text-white">
                Deskripsi
              </h4> */}
              <p className="mt-4.5">
                {timeStart} - {timeFinish}
              </p>
            </div>

            <div className="mx-auto max-w-180">
              {/* <h4 className="font-semibold text-black dark:text-white">
                Deskripsi
              </h4> */}
              <Separator />
              <p className="mt-4.5">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModulDetail;
