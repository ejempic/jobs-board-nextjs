"use client";

import { useState, useEffect } from "react";

import Slider from "@/components/Slider";
import JobForm from "@/components/JobForm";
import JobList from "@/components/JobList";

import { IJob } from "@/types";
import { fetchJobs } from "./api/route";

export default function Home() {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    const query = fetchJobs();
    query.then((response) => {
      setJobs(response.data as IJob[]);
    });
  }, []);

  return (
    <div className="lg:w-[1020px] w-full mx-auto px-5">
      <h1 className="font-bold text-4xl mt-5 px-5">Jobs Board</h1>
      <Slider jobs={jobs} />
      <div className="p-5">
        <JobForm setJobs={setJobs} />
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
