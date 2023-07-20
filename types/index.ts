export interface JobProps {
    id:number;
    title: string;
    description: string
}
export interface JobsProps {
    jobs: JobProps[]
}