import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  children: ReactNode;
}

const Separator = () => {
  return <div className="h-px bg-gray-300 my-2" />;
};

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  text1,
  text2,
  text3,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-4 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-30 w-full items-center justify-center rounded-md bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-sm font-bold text-black mb-3 dark:text-white">
            {title}
          </h4>
          <p className="text-sm font-medium">{text1}</p>
          <Separator />
          <p className="text-sm font-medium">{text2}</p>
          <Separator />
          <p className="text-sm font-medium">{text3}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
