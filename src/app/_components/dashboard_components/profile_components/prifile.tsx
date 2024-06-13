"use client";

import React, { useState } from "react";
import { Button, Input, Select, message, Form } from "antd";
import { supabase } from "~/utils/supabase/client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";

interface FormValuesProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  linkedIn: string;
  github: string;
  skills: string[];
}

const { TextArea } = Input;
const { Option } = Select;

const UserProfileForm = () => {
  const profileDataUpdate = api.profileUpdate.updateProfile.useMutation();
  const { data: sessionData } = useSession();
  const [uploading, setUploading] = useState(false);

  const onFinish = async (values: FormValuesProps) => {
    console.log("Form Data:", values);
    try {
      await profileDataUpdate.mutateAsync(values);
      await message.success("Profile updated successfully");
    } catch (error) {
      await message.error("Error updating profile");
    }
  };

  const { data: profileUrl } = supabase.storage
    .from("talent_imgs/profiles")
    .getPublicUrl(sessionData?.user.id ?? "default");

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];

      const { data: img, error: uploadError } = await supabase.storage
        .from(`talent_imgs/profiles`)
        .upload(
          sessionData?.user.id ? sessionData.user.id : "profile" + file?.name,
          file!,
        );
      if (img) {
        console.log(img, uploadError);
      }

      await message.success("Image updated successfully");
    } catch (error) {
      await message.error("Error uploading image or image exists.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full p-4">
      <Form onFinish={onFinish} layout="vertical">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              <h1>About</h1>
              <p>
                Tell us about yourself so the industry can know who you are.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/3">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "First Name is required" }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Last Name is required" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email address" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Phone Number is required" },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
              <div className="flex items-center gap-4">
                {profileUrl.publicUrl && (
                  <Image
                    src={profileUrl.publicUrl}
                    alt="profile image"
                    width={50}
                    height={50}
                    className="rounded-full border-2"
                  />
                )}
                <Form.Item label="Profile Picture">
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </Form.Item>
              </div>
              <Form.Item label="Bio" name="bio">
                <TextArea
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  placeholder="Bio"
                />
              </Form.Item>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              <h1>Social Profiles</h1>
              <p>
                Where can people on the internet find you? Fill in the gaps.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/3">
              <Form.Item
                label="LinkedIn"
                name="linkedIn"
                rules={[{ type: "url", message: "Invalid LinkedIn URL" }]}
              >
                <Input placeholder="Enter your LinkedIn profile link" />
              </Form.Item>
              <Form.Item
                label="Github"
                name="github"
                rules={[{ type: "url", message: "Invalid GitHub URL" }]}
              >
                <Input placeholder="Enter your GitHub profile link" />
              </Form.Item>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              <h1>Skills</h1>
              <p>
                This will help the industry hone in on your skills and strengths
              </p>
            </div>
            <div className="md:w-2/3">
              <Form.Item label="Skills" name="skills">
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Skills"
                >
                  {/* Options can be dynamically generated */}
                  <Option key="React">React</Option>
                  <Option key="Node.js">Node.js</Option>
                  <Option key="GraphQL">GraphQL</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            loading={uploading}
          >
            {uploading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserProfileForm;
