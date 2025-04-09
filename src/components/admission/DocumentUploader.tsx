
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentUploaderProps {
  label: string;
  accept: string;
  maxSize: number; // in MB
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  icon?: React.ReactNode;
}

export const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  label,
  accept,
  maxSize,
  file,
  setFile,
  icon = <Upload className="h-4 w-4" />
}) => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    // Validate file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`);
      return;
    }
    
    setError(null);
    setFile(selectedFile);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      
      <div
        onClick={handleClick}
        className={cn(
          "border-2 border-dashed rounded-md p-4 cursor-pointer transition-colors",
          error ? "border-red-400 bg-red-50" : 
          file ? "border-green-400 bg-green-50" : 
          "border-gray-300 hover:border-school-blue hover:bg-blue-50"
        )}
      >
        <input
          type="file"
          ref={inputRef}
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
        
        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4">
          {file ? (
            <>
              <div className="bg-green-100 rounded-full p-2">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={handleRemove}
              >
                <X className="h-4 w-4 mr-1" /> Remove
              </Button>
            </>
          ) : (
            <>
              <div className="bg-blue-100 rounded-full p-2">
                {error ? <AlertCircle className="h-5 w-5 text-red-600" /> : icon}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {error || 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500">
                  {accept.replace(/\./g, '').replace(/,/g, ', ')} (max {maxSize}MB)
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
