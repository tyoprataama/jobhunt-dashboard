"use client";
import React, { FC } from "react";
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
import { JOBTYPES } from "@/constant";

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
          ></FieldInput>

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
                      className="flex flex-col space-y-1"
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
        </form>
      </Form>
    </div>
  );
};

export default CreateJob;
