import React from 'react';
import Link from 'next/link';

import { fetchJob } from '@/app/api/route';

const  Page = async ({params}:{params: { id: number }}) => {

  const job = await fetchJob({id:params.id});

  return (
    <div className='flex h-screen items-center justify-center'>
        <div className="bg-white rounded-lg shadow-lg w-1/2 p-10 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-4">{job.title}</h2>
          <p className="text-gray-700 line-clamp-3 h-[70px] mb-4">{job.description}</p>
          
          <Link href="/" passHref>
              <button className='text-gray-500'>Go Back</button>
          </Link>
        </div>
    </div>
  );
}

export default Page
