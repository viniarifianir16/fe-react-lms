import React, { ReactNode } from 'react';

interface CardDataProps {
  title: string;
  status: string;
  detail: string;
  children: ReactNode;
}

const CardDataModul: React.FC<CardDataProps> = ({
  title,
  status,
  detail,
  children,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-4 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-20 w-full items-center justify-center rounded-md bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-sm font-bold text-black mb-3 dark:text-white">
            {title}
          </h4>
          <p className="text-sm font-medium">{status}</p>
          <a href={detail}>Detail</a>
        </div>
      </div>
    </div>
  );
};

export default CardDataModul;
