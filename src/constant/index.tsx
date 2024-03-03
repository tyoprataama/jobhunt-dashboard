import { EnumValues } from "zod";

export interface locationOpt {
  id: string;
  label: string;
}

export const JOBTYPES: EnumValues = [
  "Full-time",
  "Part-time",
  "Remote",
  "Internship",
];
export const CATEGORIES_TYPES: EnumValues = [
  "Design",
  "Sales",
  "Business",
  "Marketing",
  "Human Resource",
  "Finance",
  "Engineering",
  "Technology",
];

export const JOB_LIST_COL: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
  "Actions",
];

export const JOB_LIST_DATA = [
  {
    roles: "Software Developer",
    status: "Live",
    datePosted: "18 Feb 2024",
    dueDate: "18 Mar 2024",
    jobType: "Full-Time",
    applicants: 5,
    needs: 10,
  },
];

export const JOB_DETAIL_COL: string[] = ["Name", "Applied Date", "Action"];

export const JOB_DETAIL_DATA = [
  {
    name: "John Doe",
    appliedDate: "18 Feb 2024",
  },
];

export const LOCATION_OPT: locationOpt[] = [
  {
    id: "Indonesia",
    label: "Indonesia ",
  },
  {
    id: "Malaysia",
    label: "Malaysia ",
  },
  {
    id: "Singapore",
    label: "Singapore ",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
];

export const EMPLOYEE_OPT:string[] = ["1-10", "11-50", "51-100", "100+"];
export const INDUSTRY_OPT:string[] = ["Software", "Design", "Marketing", "Business"];