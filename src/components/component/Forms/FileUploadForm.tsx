"use client";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuizForm } from "@/lib/schema/FormSchema";

const FileUploadForm = () => {
  const form = useQuizForm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    // Update form value directly
    form.setValue("file", file); // Assuming "file" is the name of the field in useForm
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="p-4 md:p-6 w-full">
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={form.handleSubmit(() => handleFileUpload())}
        >
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-center">Choose file to upload</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".csv"
                      {...field}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {selectedFile && (
              <Button type="button" onClick={handleFileUpload} className="mt-2">
                Upload
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FileUploadForm;
