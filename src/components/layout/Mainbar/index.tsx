"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface indexProps {}
const Mainbar: FC<indexProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const name = session?.user?.name;
  const displayName = name?.split(" ")[1] || name?.split(" ")[0];
  console.log(session);

  const navLink = () => router.push("/create-job");
  return (
    <div className="py-4 px-6">
      <div className="flex justify-between border-b">
        <div className="flex flex-col">
          <h1 className="text-lg">Company</h1>
          <h2 className="text-base font-semibold pb-4">{displayName}</h2>
        </div>
        <Button
          onClick={navLink}
          className="bg-blue-600 hover:bg-blue-800 rounded-lg py-3 px-6 cursor-pointer"
        >
          <PlusIcon className="mr-2 w-4 h-4" /> Post a Job
        </Button>
      </div>
    </div>
  );
};

export default Mainbar;
