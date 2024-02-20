import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_DETAIL_COL, JOB_DETAIL_DATA } from "@/constant";
import { FC } from "react";
import ButtonTable from "../ButtonAction/ButtonTable";
interface indexProps {}

const Applicants: FC<indexProps> = ({}) => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your Applicants.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_DETAIL_COL.map((items: string, i: number) => (
              <TableCell key={items + i}>{items}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_DETAIL_DATA.map((items: any, i: number) => (
            <TableRow key={items + 1}>
              <TableCell>{items.name}</TableCell>
              <TableCell>{items.appliedDate}</TableCell>
              <TableCell>
                <ButtonTable url="/job-detail/1" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Applicants;
