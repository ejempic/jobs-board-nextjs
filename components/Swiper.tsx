'use client'

import {useState} from 'react';
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

import { IJob, JobsProp } from '@/types';
import JobDetail from './JobDetail';

const Slider = ({jobs}:JobsProp) => {

  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState<IJob>()
  
  return (
    <div>
      
    <Swiper modules={[Virtual]} spaceBetween={1} slidesPerView={4} virtual 
        breakpoints={{
        '480': {
          slidesPerView: 1,
        },
        '1020': {
          slidesPerView: 4,
        },
      }}>
      {jobs.map((job:IJob) => (
        <SwiperSlide key={job.title} virtualIndex={job.title}>
          <div className="bg-white rounded-lg shadow-lg p-8 m-5">
            <h2 className="text-xl font-bold text-gray-800 mb-4 line-clamp-1">{job.title}</h2>
              <p className="text-gray-700 line-clamp-3 h-[70px] mb-4">{job.description}</p>
              <div className='flex justify-between'>
                <button type="button" className="text-gray-500 font-semibold" onClick={() => {
                  setJob(job)
                  setIsOpen(true)
                }}> show more </button>
                <Link href={{
                  pathname: `/jobs/${job.id}`}}
                  className="text-white rounded-md px-[16px] py-[4px] bg-emerald-600">Apply</Link>
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <JobDetail isOpen={isOpen} closeModal={()=> setIsOpen(false)} job={job} />
    </div>
  );
};

export default Slider