import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableFour from '../../components/Tables/TableFour';

const Modul = () => {
  return (
    <>
      <Breadcrumb pageName="Modul" />

      {/* TABLE */}
      <div className="mt-5 col-span-12 xl:col-span-8">
        <TableFour moduls={[]} />
      </div>
      {/* TABLE */}
    </>
  );
};

export default Modul;
