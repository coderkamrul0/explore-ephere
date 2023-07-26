import React from 'react';
import Details from '@/components/DestionationDetetailsCompo/Details/Details';
import PopularTour from '@/components/DestionationDetetailsCompo/PopularTour/PopularTour';
import Adventure from '@/components/DestionationDetetailsCompo/Adventure/Adventure';

const page = () => {
    return (
      <div className="">
        <Details></Details>
        <PopularTour></PopularTour>
        <Adventure></Adventure>
      </div>
    );
};

export default page;