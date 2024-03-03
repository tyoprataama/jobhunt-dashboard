import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaRegTimesCircle } from "react-icons/fa";
import { jobFormSchema } from "@/lib/formSchema";
import { PlusIcon } from "lucide-react";
import React, { FC, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface indexProps {
  form: any;
  label: any;
  name: string;
}
const InputSkills: FC<indexProps> = (props) => {
  const { form, label, name } = props;
  const [isHide, setHide] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const value = inputRef.current?.value;
    if (value === "") return;
    if (values.length >= 5) return alert("Max 5 skills allowed");
    const newValues: any = [...values, value];
    setValues(newValues);
    form.setValue("requiredSkills", newValues);
  };
  const handleDelete = (items: string) => {
    const skills: any = values.filter((value: string) => items !== value);
    setValues(skills);
    form.setValue("requiredSkills", skills);
  };
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={name == 'techStack' ? 'hidden' : 'block'}>{label}</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2 text-gray-500"
                onClick={() => setHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" /> {label}
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input ref={inputRef} className="w-[246px]" />
                  <Button type="button" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((items: string, i: number) => (
                  <Badge variant={"outline"} key={i}>
                    {items}
                    <FaRegTimesCircle
                      className="w-4 h-4 ml-2 cursor-pointer text-red-500"
                      onClick={() => handleDelete(items)}
                    />
                  </Badge>
                ))}
              </div>
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputSkills;
