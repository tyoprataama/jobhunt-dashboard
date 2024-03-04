import OverviewForm from "@/components/forms/OverviewForm";
import SocialLinkForm from "@/components/forms/SocialLinkForm";
import TeamsForm from "@/components/forms/TeamsForm";
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
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialLinkForm />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Settings;
