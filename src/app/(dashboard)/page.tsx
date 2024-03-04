import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1>Hello next</h1>
      <Button>Click me</Button>
    </main>
  );
}
