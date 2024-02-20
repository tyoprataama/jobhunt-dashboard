import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface indexProps {}
const JobDetails: FC<indexProps> = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5 mt-7">
        <div className="col-span-2 space-y-5">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h1 className="text-2xl font-semibold">Responsibilities</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h1 className="text-2xl font-semibold">Who You Are</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="space-y-7">
          <div>
            <h1 className="text-2xl font-semibold mb-7">About this role</h1>
            <div className="p-3 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-3">1 of 10 capacity</p>
                <Progress value={20} className="h-2" />
                <Separator className="mt-3" />
              </div>
              <div className="flex justify-between mt-5 text-sm">
                <ul className="space-y-2 text-gray-500">
                  <li>Apply Before</li>
                  <li>Job Posted On</li>
                  <li>Job Type</li>
                  <li>Salary</li>
                </ul>
                <ul className="space-y-2 font-semibold text-end">
                  <li>12 March 2024</li>
                  <li>12 Feb 2024</li>
                  <li>Full-Time</li>
                  <li>$100-$1000</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-7">Categories</h1>
            <div className="space-x-5">
              {["Design", "UI"].map((items: string, i: number) => (
                <Badge
                  key={items + i}
                  variant="secondary"
                  className="py-2 px-4"
                >
                  {items}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-7">Required Skills</h1>
            <div className="space-x-5">
              {["Figma", "UX"].map((items: string, i: number) => (
                <Badge
                  key={items + i}
                  variant="secondary"
                  className="py-2 px-4"
                >
                  {items}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-5" />
      <div className="mt-7">
        <h1 className="text-2xl font-semibold">Perks and Benefits</h1>
        <p className="text-sm text-gray-500">
          This job comes with several perks and benefits
        </p>
        <div className="grid grid-cols-4 gap-5 mt-7">
          {[0, 1, 2].map((items: number, i: number) => (
            <div key={items} className="shadow-lg p-5 rounded-lg">
              <PartyPopper className="w-10 h-10 text-blue-500 mb-6" />
              <h2 className="text-lg font-semibold mb-3">Full Healthcare</h2>
              <p className="text-sm text-gray-500">
                We believe in thriving communities and that starts with our team
                being happy and healthy
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
