"use client";

import { fetchJobs, saveJob } from "@/app/api/route";
import { IJob } from "@/types";
import { useState } from "react";

type jobFormProps = {
  setJobs: (arg: IJob[]) => void;
};

const JobAddForm = ({ setJobs }: jobFormProps) => {
  const JobDefaultValues = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(JobDefaultValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    saveJob(formData).then((res) => {
      fetchJobs().then((response) => {
        setJobs(response.data as IJob[]);
      });

      if (!res === false) {
        setFormData(JobDefaultValues);
      }
    });
  };

  return (
    <div>
      <hr />
      <h1 className="font-bold text-xl my-4">Add new Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-bold mb-2">
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
            className="block text-white font-bold mb-2"
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

export default JobAddForm;
