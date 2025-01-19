import CardDataStats from '../components/CardDataStats';
import TableThree from '../components/Tables/TableThree';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuUser } from 'react-icons/lu';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Dashboard() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });
  return (
    <>
      <section className="bg-gradient-to-b from-purple-400 to-purple-800 rounded-lg shadow-lg p-6 mb-5">
        <div className="flex justify-between items-center space-x-10">
          <div>
            <p className="text-base text-yellow-500 font-bold mb-4">
              PEMROGRAMAN
            </p>
            <h1 className="text-4xl font-semibold text-white">
              Pemrograman Frontend Modern dengan React dan Angular
            </h1>
            <p className="text-white text-sm my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              interdum dapibus mauris, ac ultrices libero lacinia ac. Duis
              sodales dignissim purus, eget mattis libero ultrices ut. Nullam
              eleifend molestie finibus. Vestibulum eu neque nec tellus lacinia
              feugiat sed quis mi.
            </p>
            <div className="flex justify-start items-start space-x-10 mt-4 lg:space-x-15">
              <div>
                <p className="flex items-center text-sm text-white mt-2">
                  <LuUser className="mr-2" /> <span>Pemateri: By Josep</span>
                </p>
              </div>
              <div>
                <p className="flex items-center text-sm text-white mt-2">
                  <FaRegCalendarAlt className="mr-2" /> <span>14-06-2025</span>
                </p>
              </div>
            </div>
          </div>
          <div className="self-end">
            <button className="bg-white text-black min-w-40 py-2 px-6 rounded hover:bg-gray-200">
              Mulai Learning
            </button>
          </div>
        </div>
      </section>

      {/* CARD */}
      <div className="mb-5">
        <h2 className="text-black font-bold">MODUL KOMPETENSI</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Materi Kompetensi"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          {/* img */}
          <p className="bg-green-500 h-full w-full rounded-md my-2 text-black text-center font-bold border-2 border-black">
            PEMROGRAMAN
          </p>
          {/* img */}
        </CardDataStats>
        <CardDataStats
          title="Materi Kompetensi"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          {/* img */}
          <p className="bg-red-500 h-full w-full rounded-md my-2 text-black text-center font-bold border-2 border-black">
            CREATIVE MARKETING
          </p>
          {/* img */}
        </CardDataStats>
        <CardDataStats
          title="Materi Kompetensi"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          {/* img */}
          <p className="bg-yellow-500 h-full w-full rounded-md my-2 text-black text-center font-bold border-2 border-black">
            MANAGEMENT SDM
          </p>
          {/* img */}
        </CardDataStats>
      </div>
      {/* CARD */}

      {/* TABLE */}
      <div className="mt-5 col-span-12 xl:col-span-8">
        <TableThree />
      </div>
      {/* TABLE */}
    </>
  );
}

export default Dashboard;
