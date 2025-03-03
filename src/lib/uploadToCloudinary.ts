export const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();  
    formData.append("file", file);  
    formData.append("upload_preset",'quiz_website');
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error("Image upload failed.");
      }
  
      const data = await response.json();
      console.log(data)
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw new Error("Image upload failed.");
    }
  };
  