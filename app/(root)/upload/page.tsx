"use client";
import FileInput from "@/components/Form/FileInput";
import FormField from "@/components/Form/FormField";
import React, { ChangeEvent, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>

      {error && <div className="error">{error}</div>}

      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
        <FormField
          id="title"
          label="Title"
          placeholder="Enter clear and concise video title"
          value={formData.title}
          type="text"
          onChange={handleInputChange}
        />

        <FormField
          id="description"
          label="Description"
          placeholder="Enter clear and concise video description"
          value={formData.description}
          as="textarea"
          onChange={handleInputChange}
        />
        <FileInput />
        <FileInput />
        <FormField
          id="visibility"
          label="Visibility"
          placeholder="Select visibility"
          value={formData.visibility}
          as="select"
          onChange={handleInputChange}
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
      </form>
    </div>
  );
};

export default Page;
