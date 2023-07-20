export interface IJob {
    id:number;
    title: string;
    description: string
}
export type JobsProp = {
    jobs: IJob[]
}