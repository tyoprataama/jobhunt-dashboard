import ButtonTable from "@/components/organism/ButtonAction/ButtonTable";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_LIST_COL, JOB_LIST_DATA } from "@/constant";
import { FC } from "react";
import moment from "moment";
import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import { Job } from "@prisma/client";
import { dateFormating } from "@/lib/utils";

interface indexProps {}
const getJobList = async () => {
  const session = await getServerSession(authOpt);
  const jobs = prisma.job.findMany({
    where: {
      companyId: session?.user.id!!,
    },
  });
  return jobs;
};
const JobListing: FC<indexProps> = async ({}) => {
  const jobs = await getJobList();
  return (
    <div className="p-6">
      <div className="text-lg font-semibold">Job Listing</div>
      <div className="mt-10">
        <Table>
          <TableCaption>A list of your Job.</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_LIST_COL.map((items: string, i: number) => (
                <TableCell key={items + i}>{items}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((items: Job, i: number) => (
              <TableRow key={items.roles + i}>
                <TableCell>{items.roles}</TableCell>
                <TableCell>
                  {moment(items.datePosted).isBefore(items.dueDate) ? (
                    <Badge variant={"outline"}>Live</Badge>
                  ) : (
                    <Badge variant={"destructive"}>Expired</Badge>
                  )}
                </TableCell>
                <TableCell>{dateFormating(items.datePosted)}</TableCell>
                <TableCell>{dateFormating(items.dueDate)}</TableCell>
                <TableCell>{items.jobType}</TableCell>
                <TableCell>{items.applicants}</TableCell>
                <TableCell>
                  {items.applicants}/{items.needs}
                </TableCell>
                <TableCell className="cursor-pointer">
                  <ButtonTable url="/job-detail/1" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default JobListing;
