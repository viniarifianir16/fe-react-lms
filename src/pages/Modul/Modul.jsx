import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableFour from '../../components/Tables/TableFour';

// @ts-ignore
const Modul = () => {
  return (
    <>
      <Breadcrumb pageName="Modul" />

      <div className="flex justify-between items-center space-x-10">
        <div className="mb-5">
          <h2 className="text-black font-bold">MODUL KOMPETENSI</h2>
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-2 text-center font-medium text-white text-sm hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>+</span>
          New Module
        </a>
      </div>

      {/* TABLE */}
      <div className="mt-5 col-span-12 xl:col-span-8">
        <TableFour moduls={[]} />
      </div>
      {/* TABLE */}
    </>
  );
};

export default Modul;
