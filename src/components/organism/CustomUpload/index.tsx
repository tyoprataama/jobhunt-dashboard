import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";

interface indexProps {
  form: any;
  name: string;
}
const CustomUpload: FC<indexProps> = (props) => {
  const { form, name } = props;
  const [previewImg, setPreviewImg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      form.setValue(name, e.target.files[0]);
    }
  };
  const handleUploadFile = () => {
    inputRef.current?.click();
  };
  return (
    <div className="inline-flex items-center gap-8">
      <div>
        {previewImg !== "" && (
          <Image width={120} height={120} src={previewImg} alt={previewImg} />
        )}
      </div>
      <div
        className="flex flex-col items-center justify-center py-6 px-10 border-2 cursor-pointer border-blue-600 border-dashed w-max rounded-lg"
        onClick={handleUploadFile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-blue-600 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5m10.5-11.25h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
          />
        </svg>
        <div className="text-center">
          <span className="text-blue-600 font-medium">Click to replace</span>{" "}
          <span className="text-gray-500">or drag and drop</span>
        </div>
        <div className=" text-gray-600 text-sm">
          PNG, JPG, JPEG up (max. 400 x 400px)
        </div>
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpg, image/jpeg"
        />
      </div>
    </div>
  );
};

export default CustomUpload;
