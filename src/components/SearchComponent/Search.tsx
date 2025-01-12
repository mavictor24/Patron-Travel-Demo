'use client';

import { FC } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import CustomSelect from '@/components/SearchComponent/CustomSelect';

type Props = {
  programDestinationFilter: string;
  setProgramDestinationFilter: (value: string) => void;
  // locationFilter: string;
  // setLocationFilter: (value: string) => void;
};

const Search: FC<Props> = ({
  programDestinationFilter,
  setProgramDestinationFilter,
  // locationFilter,
  // setLocationFilter,
}) => {
  const programDestinations = ['Sharm El-Sheikh', 'Dahab', 'Hurghada', 'Taba'];

  return (
    <div className="lg:w-full mx-auto w-[90%] lg:bg-transparent lg:dark:bg-transparent dark:bg-zinc-900 px-2 py-4 rounded-md ">
      <div className="relative flex gap-5 items-center justify-between">
        <div className="flex flex-wrap flex-grow gap-4">
          {/* Project Sector Select with Icon */}
          <div className="flex flex-col border-l-[1.5px] border-[#00000022] dark:border-zinc-700">
            <div className="pl-4 flex gap-x-4 items-center pb-1">
              <FaBuilding className="text-zinc-900 dark:text-gray-200" />
              <h3 className="text-zinc-950 dark:text-gray-200 font-medium">
                Program Destination
              </h3>
            </div>
            <div className="relative w-[19.4rem]">
              <CustomSelect
                options={programDestinations}
                value={programDestinationFilter}
                onChange={setProgramDestinationFilter}
                placeholder="Select project sector"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
