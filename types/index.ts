export interface IJobForm {
    title: string;
    description: string
}

export interface IJob extends IJobForm{
    id:number;
}

export type JobsProp = {
    jobs: IJob[]
}