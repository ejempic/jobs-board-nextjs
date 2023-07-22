import { API_URL } from "@/constants";
import { IJob, IJobForm } from "@/types";
import axios from 'axios';

export async function fetchJobs() {
  const response = await axios.get(API_URL);

  if (response.status !== 200) {
    throw new Error('Failed to submit the form');
  }

  if (response.status !== 200) {
    throw new Error('Failed to submit the form');
  }

  return response.data;
}

export async function fetchJob({id}:{id:number}) {
  const response = await axios.get(API_URL + id);
 
  if (response.status !== 200) {
    throw new Error('Failed to submit the form');
  }

  return response.data;
}

export async function saveJob(formData:IJobForm){
  try {
    const response = await axios.post(API_URL, formData);

    if (response.status !== 201) {
      throw new Error('Failed to submit the form');
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err_res = error.response;

      alert(err_res?.data.message)
    } else {
      alert(error)
    }

    return false;
  }
}

export async function updateJob(formData:IJob){
  try {
    const response = await axios.put(API_URL+formData.id,formData);

    if (response.status !== 200) {
      throw new Error('Failed to submit the form');
    }

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err_res = error.response;

      alert(err_res?.data.message)
    } else {
      alert(error)
    }
    
    return false;
  }
}

export async function deleteJob(job:IJob){
  try {
    const response = await axios.delete(API_URL+job.id);

    if (response.status !== 200) {
      throw new Error('Failed to submit the form');
    }

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err_res = error.response;

      alert(err_res?.data.message)
    } else {
      alert(error)
    }
    
    return false;
  }
}