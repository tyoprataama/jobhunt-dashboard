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

interface indexProps {}
const JobListing: FC<indexProps> = ({}) => {
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
            {JOB_LIST_DATA.map((items: any, i: number) => (
              <TableRow key={items + 1}>
                <TableCell>{items.roles}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>{items.status}</Badge>
                </TableCell>
                <TableCell>{items.datePosted}</TableCell>
                <TableCell>{items.dueDate}</TableCell>
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
