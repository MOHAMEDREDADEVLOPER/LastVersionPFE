import React from 'react';
import FilterCategorie from './FilterCategorie';
import FilterType from './FilterType';
import FilterVille from './FilterVille';
import FilterSecteur from './FilterSecteur';

export default function Filter() {
  return (
    <div className="px-6 py-6 max-w-7xl mt-3 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-lg bg-white  lg:backdrop-blur rounded-lg">
      <FilterCategorie />
      <FilterType />
      <FilterVille />
      <FilterSecteur />
      <button className="bg-neutral-100  border lg:backdrop-blur  border-gray-300 shadow-lg hover:bg-neutral-300 transition w-full lg:max-w-[162px] max-h-[84px] rounded-lg flex justify-center items-center text-white text-lg">
        {/* <img src='/images/magnifying-glass_4814875.png' alt='#' className='w-9 '/> */}
      <h2 className="text-sm font-semibold  text-gray-700">Rechercher</h2>
      </button>
    </div>
  );
}
