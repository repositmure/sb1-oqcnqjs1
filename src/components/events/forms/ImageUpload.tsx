import React, { useState } from 'react';
import { Image, Upload } from 'lucide-react';

interface ImageUploadProps {
  defaultValue?: string;
}

export default function ImageUpload({ defaultValue }: ImageUploadProps) {
  const [preview, setPreview] = useState(defaultValue);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        <Image className="inline-block w-4 h-4 mr-2" />
        Event Image
      </label>
      
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
        <div className="space-y-1 text-center">
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="mx-auto h-32 w-auto rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={() => setPreview(undefined)}
                className="absolute top-0 right-0 -mt-2 -mr-2 p-1 bg-red-500 rounded-full text-white"
              >
                ×
              </button>
            </div>
          ) : (
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
          )}
          
          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-600">
              <span>Upload a file</span>
              <input
                type="file"
                name="imageUrl"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}