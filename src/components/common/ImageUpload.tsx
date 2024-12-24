import { FC, useState } from 'react';
import { CldUploadWidget, CldUploadWidgetProps } from 'next-cloudinary';

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload: CldUploadWidgetProps['onUpload'] = (error, result) => {
    if (error) {
      console.error('Upload error:', error);
      return;
    }

    setImageUrl(result.info.secure_url);
    onImageUpload(result.info.secure_url);
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset="your-upload-preset"
        onUpload={handleUpload}
      >
        {({ open }) => (
          <button type="button" onClick={() => open?.()}>
            Upload Image
          </button>
        )}
      </CldUploadWidget>

      {imageUrl && (
        <div>
          <p>Image uploaded successfully:</p>
          <img src={imageUrl} alt="Uploaded" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
