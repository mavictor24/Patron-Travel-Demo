import React from 'react';
import { contactData } from '@/Data/Data';

const PatronInfo = () => {
  return (
    <div className="grid grid-cols-1 text-center md:px-0 md:grid-cols-2 relative">
      {contactData.map((item, index) => (
        <div
          key={index}
          data-aos="fade-right"
          data-aos-duration="800"
          className={`overflow-hidden bg-white dark:bg-zinc-950 border dark:border-zinc-900 rounded-3xl flex items-center justify-center ${index === 1 ? 'absolute lg:right-3 right-2 -bottom-32 w-52 h-36' : 'w-80 -mt-12'} `}
        >
          <div className="p-6">
            <div className="flex items-center justify-center">{item.icon}</div>
            <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-gray-100">
              {item.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatronInfo;
