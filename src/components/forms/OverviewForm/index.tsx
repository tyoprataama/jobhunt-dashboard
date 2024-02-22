"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { z } from "zod";
import FieldInput from "@/components/organism/FieldInput";
import { overviewSchema } from "@/lib/formSchema";

interface indexProps {}

const OverviewForm: FC<indexProps> = () => {
  const form = useForm<z.infer<typeof overviewSchema>>({
    resolver: zodResolver(overviewSchema),
  });
  const onSubmit = (data: z.infer<typeof overviewSchema>) => console.log(data);
  return (
    <div className="mt-5">
      <FieldInput
        title="Basic Information"
        subTitle="This is company information that you can update anytime"
      >
        <></>
      </FieldInput>
    </div>
  );
};

export default OverviewForm;
