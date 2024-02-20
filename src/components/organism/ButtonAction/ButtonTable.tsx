"use client";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface indexProps {
  url: string;
}
const ButtonTable: FC<indexProps> = ({ url }) => {
  const route = useRouter();
  return (
    <Button onClick={() => route.push(url)} size="icon" variant={"outline"}>
      <MoreVertical className="w-4 h-4" />
    </Button>
  );
};

export default ButtonTable;
