import { NilaiPeserta } from '../../types/nilaiPeserta';

const packageData: NilaiPeserta[] = [
  {
    rank: 1,
    name: 'Parija Faiza',
    class: 'Pemrograman',
    modul: 'L1',
    point: '1.334 Point',
  },
  {
    rank: 2,
    name: 'John Doe',
    class: 'Pemrograman',
    modul: 'L1',
    point: '1.334 Point',
  },
  {
    rank: 3,
    name: 'Maria',
    class: 'Pemrograman',
    modul: 'L1',
    point: '1.334 Point',
  },
  {
    rank: 4,
    name: 'Alexa',
    class: 'Pemrograman',
    modul: 'L1',
    point: '1.334 Point',
  },
  {
    rank: 5,
    name: 'Jordan',
    class: 'Pemrograman',
    modul: 'L1',
    point: '1.334 Point',
  },
];

const TableThree = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        NILAI PESERTA
      </h4>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Rank
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Class
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Modul
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Point
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="text-black dark:text-white">
                    {packageItem.rank}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.class}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.modul}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm text-center font-medium bg-success text-success">
                    {packageItem.point}
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

export default TableThree;
