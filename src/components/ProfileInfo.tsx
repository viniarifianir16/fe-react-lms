import { useAuthStore } from '../stores/Auth';
import UserOne from '../images/user/user-01.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ProfileInfo = () => {
  const { user } = useAuthStore();
  return (
    <div className="hidden lg:block bg-white p-5 mb-6 overflow-y-auto">
      <div className="sticky top-0">
        <div className="flex flex-col items-center">
          <img
            src={UserOne}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-lg text-black font-bold">
            Selamat Datang, {user?.name}
          </h2>
          <p className="text-sm text-bodydark2">Di LMS by Adhivasindo</p>
        </div>

        <div className="bg-purple-950 p-3 rounded-lg mt-6">
          <div className="flex justify-center items-center mb-4 space-x-4">
            <button className="text-white text-lg font-semibold">
              <FaAngleLeft />
            </button>
            <span className="text-white text-sm font-medium">April 2025</span>
            <button className="text-white text-lg font-semibold">
              <FaAngleRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-md"
              >
                <span className="text-xs text-black p-1">{day}</span>
                <div
                  className={`w-6 h-6 text-xs flex items-center justify-center bg-white rounded-md border-2 border-black ${
                    day === 'We'
                      ? 'bg-purple-800 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-bold text-black mb-3 dark:text-white">
            Jadwal Pemateri
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-sm bg-purple-600"></span>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-sm font-bold text-black">
                    Storytelling dalam Pemasaran
                  </p>
                  <p className="text-xs text-bodydark2">
                    09:00 - 11:00 with Mr. Jam
                  </p>
                </div>
                <FaAngleRight />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-sm bg-red-400"></span>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-sm font-bold text-black">
                    Pemrograman Frontend Modern
                  </p>
                  <p className="text-xs text-bodydark2">
                    12:00 - 14:00 with Mr. Firman
                  </p>
                </div>
                <FaAngleRight />
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-sm bg-yellow-300"></span>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-sm font-bold text-black">
                    Pengembangan API
                  </p>
                  <p className="text-xs text-bodydark2">
                    14:30 - 15:30 with Mr. Parija
                  </p>
                </div>
                <FaAngleRight />
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-blue-800 p-3 rounded-lg mt-6 h-40">Image</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
