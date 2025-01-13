'use client';

import React from 'react';

const ProjectContent = ({ program }: { program: any }) => {
  return (
    <div className="lg:w-[80%] flex flex-col lg:gap-y-10 gap-y-5">
      <h2
        data-aos="fade-right"
        data-aos-duration="800"
        className="text-xl font-sans tracking-widest font-medium text-secondary uppercase"
      >
        Project Details
      </h2>
      {program.contentDetails?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col gap-y-5 lg:max-w-[90%]">
          {item.day && (
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="lg:text-5xl text-3xl"
            >
              {item.day}
            </h1>
          )}
          {item.details && (
            <h4
              data-aos="fade-right"
              data-aos-duration="800"
              className="scroll-m-20 text-xl tracking-tight capitalize dark:text-zinc-500 text-zinc-600"
            >
              {item.details}
            </h4>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectContent;
