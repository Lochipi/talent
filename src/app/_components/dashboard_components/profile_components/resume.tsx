import { Button, Input, message } from "antd";
import { supabase } from "~/utils/supabase/client";

const ResumeUpload = () => {
  const handleFIleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select a file to upload.");
      }

      const file = event.target.files[0];

      if (!file) {
        throw new Error("You must select a file to upload.");
      }

      const { data } = await supabase.storage
        .from("talent_imgs/resumes")
        .upload("res" + file?.name, file);

      if (data) {
        console.log(data);
      }
      await message.success("resume updated successfully!");
    } catch (error) {
      await message.error("Resume update failed! Resume already exists!");
      console.log(error);
    }
  };
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
            <Input accept="pdf" type="file" onChange={handleFIleUpload} />
            <div className="mt-2 md:mt-4">
              <Button type="primary" className="btn btn-primary">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
