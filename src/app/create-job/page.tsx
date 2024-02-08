import React, { FC } from "react";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jobFormSchema } from "@/lib/formSchema";

interface indexProps {}
const CreateJob: FC<indexProps> = ({}) => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: []
    }
  });
  const onSubmit = (data: any) => console.log(data);
  return <div>CreateJob</div>;
};

export default CreateJob;
