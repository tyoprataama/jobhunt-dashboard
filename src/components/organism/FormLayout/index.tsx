import { Separator } from "@/components/ui/separator";
import React, { FC, ReactNode } from "react";

interface indexProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}
const FormLayout: FC<indexProps> = (props) => {
  const { children, title, subTitle } = props;
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <h1 className="font-semibold text-base">{title}</h1>
          <p className="text-gray-500 text-sm">{subTitle}</p>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FormLayout;
