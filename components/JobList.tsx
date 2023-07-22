import { IJob } from "@/types";
import JobEdit from "./JobEdit";
import { useState } from "react";
import { deleteJob, fetchJobs } from "@/app/api/route";

type JobListProps = {
  setJobs: (arg: IJob[]) => void;
  jobs: IJob[];
};

const JobList = ({ jobs, setJobs }: JobListProps) => {
  const JobDefaultValues = {
    id: 0,
    title: "",
    description: "",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState<IJob>(JobDefaultValues);

  const handleDelete = (job: IJob) => {
    deleteJob(job).then((res) => {
      fetchJobs().then((response) => {
        setJobs(response.data as IJob[]);
      });
    });
  };

  return (
    <>
      <div className="flex flex-col mt-5">
        <hr />
        <h1 className="font-bold text-xl my-4">Job List</h1>
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jobs.map((job: IJob) => (
                    <tr key={job.title} className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                        {job.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {job.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 ">
                        <p className="line-clamp-1">{job.description}</p>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="text-green-500 hover:text-green-700"
                          onClick={() => {
                            setJob(job);
                            setIsOpen(true);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => {
                            handleDelete(job);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <JobEdit
        isOpen={isOpen}
        closeModal={setIsOpen}
        setJobs={setJobs}
        job={job}
      />
    </>
  );
};

export default JobList;
