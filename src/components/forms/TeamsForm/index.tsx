import FieldInput from "@/components/organism/FieldInput";
import { FC } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import DialogAddTeam from "./DialogAddTeam";

interface indexProps {}
const TeamsForm: FC<indexProps> = () => {
  return (
    <FieldInput
      title="Basic Information"
      subTitle="List out your top perks and benefits"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold">3 Members</h3>
          <DialogAddTeam />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3 shadow text-center">
              <div
                key={i}
                className="bg-gray-300 w-10 h-10 rounded-full mx-auto"
              />
              <div className="font-semibold mt-4">John</div>
              <div className="text-sm text-gray-500">CEO</div>
              <div className="inline-flex mt-5 gap-3 text-gray-500">
                <FaInstagram className="w-5 h-5" />
                <FaLinkedin className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamsForm;
