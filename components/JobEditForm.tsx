"use client";

import { fetchJobs, updateJob } from "@/app/api/route";
import { IJob } from "@/types";
import { useState } from "react";

type jobEditFormProps = {
  setJobs: (arg: IJob[] | undefined) => void;
  job: IJob;
  closeModal: (arg: boolean) => void;
};

const JobEditForm = ({ setJobs, job, closeModal }: jobEditFormProps) => {
  const [formData, setFormData] = useState(job);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateJob(formData).then((res) => {
      fetchJobs().then((response) => {
        setJobs(response.data as IJob[]);
      });

      if (!res === false) {
        closeModal(false);
      }
    });
  };

  return (
    <div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-500 font-bold my-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-500 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="text-white rounded-md px-[16px] py-[4px] bg-emerald-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobEditForm;
