const url = `http://jobs-board-api.test/api/v1/jobs/`;

export async function fetchJobs() {
  const response = await fetch(url);

  return await response.json();
}

export async function fetchJob({id}:{id:number}) {
  const response = await fetch(url + id);
 
  const result = await response.json();

  return result.data;
}