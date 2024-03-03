"use client";
import React, { FC, useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jobFormSchema } from "@/lib/formSchema";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FieldInput from "@/components/organism/FieldInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES, CATEGORIES_TYPES } from "@/constant";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputSkills from "@/components/organism/InputSkills";
import CKEditor from "@/components/organism/CKEditor";
import InputBenefits from "@/components/organism/InputBenefits";

interface indexProps {}
const CreateJob: FC<indexProps> = ({}) => {
  const router = useRouter();
  const navLink = () => router.push("/");
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="p-6 gap-3">
      <div className="flex w-full items-start font-semibold cursor-pointer">
        <ArrowLeftIcon
          onClick={navLink}
          className="w-5 h-5 hover:text-blue-500"
        />
        <span className="ml-2">Create job</span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldInput
            title="Basic Information"
            subTitle="List out your top perks and benefits"
          >
            <div></div>
          </FieldInput>

          <FieldInput
            title="Job Details"
            subTitle="List out your top perks and benefits"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormControl>
                    <Input placeholder="e.g.Software Engineer" {...field} />
                  </FormControl>
                  <FormDescription>At least 8 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Type of Employment"
            subTitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 text-gray-500"
                    >
                      {JOBTYPES.map((items: string, i: number) => (
                        <FormItem
                          key={i + 1}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={items} />
                          </FormControl>
                          <FormLabel className="font-normal">{items}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subTitle="Please specify the estimated salary range for the role.' You can leave this blank '."
          >
            <div className="flex w-[450px] flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-gray-500 px-4">to</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="$1000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Categories"
            subTitle="You can select multiple job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-gray-500">
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CATEGORIES_TYPES.map((items: string, i: number) => (
                        <SelectItem key={i + 1} value={items}>
                          {items}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Required Skills"
            subTitle="Add required skills for the job"
          >
            <InputSkills name="requiredSkill" form={form} label="Add Skills" />
          </FieldInput>

          <FieldInput
            title="Job Descriptions"
            subTitle="Job titles must be describe one position"
          >
            <CKEditor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Responsibilities"
            subTitle="Outline the core responsibilities of the position"
          >
            <CKEditor
              form={form}
              name="responsibility"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Who You Are"
            subTitle="Add your preferred qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Nice-to-Haves"
            subTitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHave"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Perks and Benefits"
            subTitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>
          <div className="flex justify-end">
            <Button type="submit" className="bg-blue-600 text-white">
              Do a Review
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateJob;
