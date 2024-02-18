import { JOBTYPES } from "@/constant";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is required" })
    .min(8, "TItle must be at least 8 characters")
    .max(50, "Title must be less than 50 characters"),
  jobType: z.enum(JOBTYPES, { required_error: "Job type is required" }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  requiredSkills: z
    .string()
    .array()
    .max(5, "Required Skills must be less than 5 skills")
    .nonempty({ message: "Required Skills is must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, "Job Description must be at least 10 characters"),
  responsibility: z
    .string({ required_error: "Job Description is required" })
    .min(10, "Job Description must be at least 10 characters"),
  whoYouAre: z
    .string({ required_error: "Job Description is required" })
    .min(10, "Job Description must be at least 10 characters"),
  niceToHave: z
    .string({ required_error: "Job Description is required" })
    .min(10, "Job Description must be at least 10 characters"),
  benefits: z
		.object({
			benefit: z.string(),
			description: z.string(),
		})
		.array().max(3, "Benefits must be less than 3 benefits")
		.nonempty({ message: "Benefits must be at least 1 benefit" }),
});
