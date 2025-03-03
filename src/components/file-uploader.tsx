"use client";
import { CldUploadWidget } from "next-cloudinary";

interface FileUploaderProps {
  onUploadSuccess: (url: string) => void;
}

const FileUploader = ({ onUploadSuccess }: FileUploaderProps) => {
  const handleSuccess = (result: any) => {
    const url = result.info.secure_url;
    onUploadSuccess(url);
  };

  return (
    <CldUploadWidget
      uploadPreset="quiz_website"
      onSuccess={handleSuccess}
      
      options={{
        multiple: false,
        clientAllowedFormats: ["jpeg", "png", "jpg", "webp"],
      }}
    >
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};
export default FileUploader;
