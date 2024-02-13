import { Separator } from "@/components/ui/separator";
import React, { FC, ReactNode } from "react";

interface indexProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}
const FieldInput: FC<indexProps> = (props) => {
  const { title, subTitle, children } = props;
  return (
    <>
      <div className="flex flex-row items-start p-3">
        <div className="flex flex-col w-[35%] px-2">
          <h1 className="text-base font-semibold">{title}</h1>
          <p className="text-sm text-gray-400 mb-4">{subTitle}</p>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
