import React, { ReactNode } from 'react';

interface CardDataProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  children: ReactNode;
}

const Separator = () => {
  return <div className="h-px bg-gray-300 my-2" />;
};

const CardDataStats: React.FC<CardDataProps> = ({
  title,
  text1,
  text2,
  text3,
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
          <p className="text-xs font-medium">{text1}</p>
          <Separator />
          <p className="text-xs font-medium">{text2}</p>
          <Separator />
          <p className="text-xs font-medium">{text3}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
