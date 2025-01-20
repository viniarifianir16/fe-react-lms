import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { baseUrl } from '../../utils/Constants';
import { IoIosAdd } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../stores/Auth';

interface Modul {
  id: string | number;
  module_name: string;
  presenters: string;
  description: string;
  start_date: string;
  end_date: string;
  status: string;
}

const TableFour = ({ moduls }: { moduls: Modul[] }) => {
  const { user } = useAuthStore();
  const token = user?.token;
  const [data, setData] = useState<Modul[]>(moduls || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/moduls`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id: string | number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${baseUrl}/api/moduls/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(data.filter((item) => item.id !== id));
        Swal.fire('Deleted!', 'Modul has been deleted.', 'success');
      } catch (error) {
        Swal.fire(
          'Error',
          (error as any).response?.data?.message || 'Failed to delete modul',
          'error'
        );
      }
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.module_name.localeCompare(b.module_name);
      } else {
        return b.module_name.localeCompare(a.module_name);
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Filter data
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Modul Kompetensi
        </h4>
        <a
          href="/modulsform"
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-5 py-2 text-center font-medium text-white text-sm hover:bg-opacity-90"
        >
          <span>
            <IoIosAdd />
          </span>
          New Modul
        </a>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari modul..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white"
        />
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-10 py-4 px-4 font-medium text-black dark:text-white">
                No
              </th>
              <th
                className="min-w-fit py-4 px-4 font-medium text-black dark:text-white"
                onClick={handleSort}
              >
                Modul
              </th>
              <th className="min-w-fit py-4 px-4 font-medium text-black dark:text-white">
                Pemateri
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Deskripsi
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Period
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={item.id}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                  <h5 className="text-black dark:text-white">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </h5>
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
                  <p className="text-black dark:text-white">
                    {item.start_date} - {item.end_date}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium capitalize ${
                      item.status === 'active'
                        ? 'bg-success text-success'
                        : item.status === 'inactive'
                          ? 'bg-danger text-danger'
                          : 'bg-warning text-warning'
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <a
                      href={`/modulsform/${item.id}`}
                      className="hover:text-primary"
                    >
                      <FaEdit />
                    </a>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="hover:text-primary"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-end gap-5">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="rounded-md bg-gray-300 px-4 py-2 text-sm hover:bg-gray-400 disabled:opacity-50 dark:bg-strokedark dark:text-white dark:hover:bg-meta-4"
        >
          Previous
        </button>
        <span className="text-sm  text-black dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="rounded-md bg-gray-300 px-4 py-2 text-sm hover:bg-gray-400 disabled:opacity-50 dark:bg-strokedark dark:text-white dark:hover:bg-meta-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

TableFour.propTypes = {
  moduls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      module_name: PropTypes.string.isRequired,
      presenters: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableFour;
