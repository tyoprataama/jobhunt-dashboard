import { EnumValues } from "zod";

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
