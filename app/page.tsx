import Swiper from '@/components/Swiper'
import { fetchJobs } from './api/route';
import JobForm from '@/components/JobForm';

export default async function Home() {
  
  const jobs = await fetchJobs();

  return (
    <div className='lg:w-[1020px] w-full mx-auto px-5'>
      <h1 className='font-bold text-4xl mt-5 px-5'>Jobs Board</h1>
      <Swiper jobs={jobs.data} />
      <div className='p-5'>
        <JobForm />
      </div>
    </div>
  )
}
