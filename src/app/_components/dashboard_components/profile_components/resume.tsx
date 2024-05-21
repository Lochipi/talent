import { Button, Input } from "antd";
import React from "react";

const ResumeUpload = () => {
  return (
    <div className="flex w-full gap-2 md:gap-6">
      <div className="flex-1/3">
        <h1>Resume Or CV</h1>
        <p>Upload your up-to date resume. Must be PDF and less than 6Mb</p>
      </div>
      <div className="flex-2/3">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label>Resume</label>
            <Input type="file" />

            <div className="mt-2 md:mt-4">
              <Button type="primary" className="btn btn-primary">Upload</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
