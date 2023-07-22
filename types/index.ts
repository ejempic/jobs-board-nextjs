export interface IJobForm {
    title: string;
    description: string
}

export interface IJob extends IJobForm{
    id:number;
}

export type JobsProp = {
    map(arg0: (job: IJob) => import("react").JSX.Element): import("react").ReactNode;
    jobs: IJob[]
}