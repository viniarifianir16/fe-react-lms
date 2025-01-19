import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { baseUrl } from '../../utils/Constants';

// @ts-ignore
const TableFour = ({ moduls }) => {
  const [data, setData] = useState(moduls || []);

  // Show Data
  const fetchData = async () => {
    console.log('Fetching from:', `${baseUrl}/api/moduls`);
    try {
      const response = await axios.get(`${baseUrl}/api/moduls`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Modul
      </h4>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-10 py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                No
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Modul
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Pemateri
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Deskripsi
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Period
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => (
                <tr key={item.id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="text-black dark:text-white">{index + 1}</h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="font-medium text-black dark:text-white">
                      {item.module_name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.presenters}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.description}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {item.start_date} - {item.end_date}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success">
                      {item.status}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Validasi properti (prop types)
TableFour.propTypes = {
  moduls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      module_name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableFour;
