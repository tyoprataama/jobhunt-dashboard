import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React, { FC } from "react";

interface indexProps {}
const Mainbar: FC<indexProps> = () => {
  return (
    <div className="py-4 px-6 min-h-screen">
      <div className="flex justify-between border-b">
        <div className="flex flex-col">
          <h1 className="text-lg">Company</h1>
          <h2 className="text-base font-semibold pb-4">Twitter</h2>
        </div>
        <Button className="bg-indigo-700 rounded-none py-3 px-6">
          <PlusIcon className="mr-2 w-4 h-4" /> Post a Job
        </Button>
      </div>
      <div className="py-6">
        <h1 className="text-2xl font-semibold">Good Morning, Charles</h1>
        <p className="text-slate-400 font-semibold">
          Here is your job listing statistic report from July 19 - July 25.
        </p>
      </div>
    </div>
  );
};

export default Mainbar;
