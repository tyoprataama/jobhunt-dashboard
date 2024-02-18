import { Separator } from "@/components/ui/separator";
import React, { FC, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegTimesCircle } from "react-icons/fa";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import DialogAdd from "./DialogAdd";
import { PartyPopper, X } from "lucide-react";

interface indexProps {
  form: any;
}
const InputBenefits: FC<indexProps> = (props) => {
  const { form } = props;
  const [benefits, setBenefits] = useState<any[]>([]);
  const handleDelete = (items: any) => {
    const deleteBenefit = benefits.filter((value) => items !== value);
    setBenefits(deleteBenefit);
    form.setValue("benefits", deleteBenefit);
  };
  const updateBenefits = (items: any) => {
    const newValue: any[] = [...benefits, items];
    setBenefits(newValue);
    form.setValue("benefits", newValue);
  };
  return (
    <div className="block">
      <DialogAdd updateBenefits={updateBenefits} />
      <div className="grid grid-cols-3 gap-4 mt-5">
        {benefits.map((items: any, i: number) => (
          <Card key={i} className={cn("w-[200px]")}>
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription>
                  <PartyPopper className="w-7 h-7 text-blue-500" />
                </CardDescription>
                <X
                  onClick={() => handleDelete(items)}
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font">{items.benefit}</CardTitle>
              <p className="text-gray-500">{items.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputBenefits;
