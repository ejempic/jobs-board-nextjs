import Swiper from '@/components/Swiper'
import { fetchJobs } from './api/route';

export default async function Home() {
  
  const jobs = await fetchJobs();

  return (
    <div>
      <Swiper jobs={jobs.data} />
    </div>
  )
}
