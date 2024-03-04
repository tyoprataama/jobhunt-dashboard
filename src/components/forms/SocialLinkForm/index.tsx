"use client";
import FieldInput from "@/components/organism/FieldInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { socialLinkSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface indexProps {}

const SocialLinkForm: FC<indexProps> = () => {
  const form = useForm<z.infer<typeof socialLinkSchema>>({
    resolver: zodResolver(socialLinkSchema),
  });
  const onSubmit = (data: z.infer<typeof socialLinkSchema>) =>
    console.log(data);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FieldInput
          title="Basic Information"
          subTitle="Add elsewhere links to your company profile. You can add only username without full https links."
        >
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourfacebook.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourinstagram.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourtwitter.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourlinkedin.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="youtube"
              render={({ field }) => (
                <FormItem className="w-[450px]">
                  <FormLabel>Youtube</FormLabel>
                  <FormControl>
                    <Input placeholder="https://youryoutube.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FieldInput>
        <div className="flex justify-end">
          <Button size={"lg"} className="bg-blue-500 text-white">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default SocialLinkForm;
