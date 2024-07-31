'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Invalid email address" }).min(5).max(255),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(500),
});

const ContactForm = () => {

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log(values);
    form.reset();
  };
  return (
    
        <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32" id="contact">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                  Get in touch with us for more information about Mloce or to schedule a campus visit.
                </p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="E.g. John Doe"
                              {...field}
                              className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
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
                            <Input
                              type="email"
                              placeholder="E.g. john.doe@gmail.com"
                              {...field}
                              className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              {...field}
                              className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Submit</Button>
                  </form>
                </Form>
              </div>
              <div className="relative max-sm:hidden">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl animate-gradient-x" />
                </div>
                <img
                  alt="Contact"
                  className="mx-auto aspect-video rounded-lg object-cover mix-blend-multiply"
                  height={400}
                  src="https://www.yashilmarketing.com/assets/img/contact.png"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
  )
};

export default ContactForm;