import Link from "next/link";
import { FC } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organism/TabComponents/Applicants";
import JobDetails from "@/components/organism/TabComponents/JobDetails";

interface indexProps {}

const JobDetail: FC<indexProps> = () => {
  return (
    <div className="p-6">
      <div className="inline-flex gap-5 items-center mb-10">
        <Link href="/job-listing">
          <ArrowLeftIcon className="w-5 h-5 hover:text-blue-500" />
        </Link>
        <div>
          <h1 className="text-large font-semibold">Job Details</h1>
          <p className="text-sm text-gray-500">
            Design . Full Time . 1/10 Hired
          </p>
        </div>
      </div>
      <div>
        <Tabs defaultValue="applicants" className="">
          <TabsList>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
          </TabsList>
          <TabsContent value="applicants">
            <Applicants />
          </TabsContent>
          <TabsContent value="jobDetails">
            <JobDetails />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default JobDetail;
