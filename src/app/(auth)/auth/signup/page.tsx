"use client";
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
import { useToast } from "@/components/ui/use-toast";
import { signInFormSchema, signUpFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface indexProps {}
const SignUp: FC<indexProps> = ({}) => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });
  const { toast } = useToast();
  const route = useRouter();
  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    try {
      await fetch("/api/company/new-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await route.push("/auth/signin");
      toast({
        title: "Signup success 👍",
        description: "Please login to your account",
      });
    } catch {
      toast({
        title: "Error",
        description: "error happens, please try again",
      });
    }
  };
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="p-6 border border-gray-300 w-[400px] bg-slate-50 rounded-lg">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-gray-500">Please enter your details</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-5 mt-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pasword</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="************"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" mt-5">
                <Button className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer">
                  Signup
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-sm text-gray-500 mt-3 text-center">
            Have an account?{" "}
            <Link href="/auth/signin" className="text-blue-500 underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
