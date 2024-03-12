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
import { signInFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface indexProps {}
const SignIn: FC<indexProps> = ({}) => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
    const authenticated = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (authenticated?.error) {
      toast({
        title: "Error 👺",
        description: "Email or password is invalid",
      });
    }
    await router.push("/");
    console.log(authenticated);
  };
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="p-6 border border-gray-300 bg-slate-50 rounded-lg w-[400px]">
          <h1 className="text-2xl font-semibold">Login to your account</h1>
          <p className="text-sm text-gray-500">
            Please enter your email and password
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-5 mt-5">
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
                  Signin
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-sm text-gray-500 mt-3 text-center">
            Dont have an account yet?{" "}
            <Link href="/auth/signup" className="text-blue-500 underline">
              Signup here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
