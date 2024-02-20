import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
interface indexProps {}

const Settings: FC<indexProps> = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Tabs defaultValue="overview" className="mt-7">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview</TabsContent>
        <TabsContent value="socialLinks">Social Links</TabsContent>
        <TabsContent value="teams">Teams</TabsContent>
      </Tabs>
    </div>
  );
};
export default Settings;