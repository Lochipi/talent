"use client";

import React, { useState } from "react";
import { Button, Input, Select, message } from "antd";
import { supabase } from "~/utils/supabase/client";
import Image from "next/image";

const LabeledInput = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="labeled-input">
      <label>{label}</label>
      {children}
    </div>
  );
};

const UserProfileForm = () => {
  // State management for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [skills, setSkills] = useState<string[]>(["React"]);

  const [uploading] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  //handle image upload to supabase.
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];

      if (!file) {
        throw new Error("You must select a file to upload.");
      }

      const { data: img, error: uploadError } = await supabase.storage
        .from("talent_imgs/profiles")
        .upload("profile" + file?.name, file);
      if (img) {
        console.log(img);
      }

      const { data: img_download } = supabase.storage
        .from("talent_imgs/profiles")
        .getPublicUrl(`profile + ${img?.path}`);
      setProfileImage(img_download.publicUrl);

      if (uploadError) {
        throw uploadError;
      }

      await message.success("Image updated successfully");
    } catch (error) {
      await message.error("Error uploading image or image exists.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", {
      firstName,
      lastName,
      email,
      phoneNumber,
      bio,
      linkedin,
      github,
      skills,
    });
  };

  // Handle skills change
  const handleSkillsChange = (value: string[]) => {
    setSkills(value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2 md:gap-4">
            <div className="flex-1/3">
              <h1>About</h1>
              <p>
                Tell us about yourself so the industry can know who you are.
              </p>
            </div>
            <div className="flex-2/3">
              <div className="flex gap-2">
                <LabeledInput label="First Name">
                  <Input
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </LabeledInput>
                <LabeledInput label="Last Name">
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </LabeledInput>
              </div>
              <div className="flex gap-2">
                <LabeledInput label="Email">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </LabeledInput>
                <LabeledInput label="Phone Number">
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </LabeledInput>
              </div>
              <div className="mt-2 flex flex-col gap-3">
                <div>
                  <Image
                    src={profileImage}
                    alt="profile image"
                    width={70}
                    height={70}
                    className="mt-2 rounded-full md:mt-4 border-2"
                  />
                </div>
                <LabeledInput label="Profile Picture">
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </LabeledInput>
                <LabeledInput label="Bio">
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                  />
                </LabeledInput>
              </div>
            </div>
          </div>

          <hr className="my-2" />

          {/* social profiles */}
          <div className="flex w-full gap-2 md:gap-4">
            <div className="flex-1/3 flex flex-col">
              <h1>Social profiles</h1>
              <p>
                Where can people on the internet find you? Fill in the gaps..
              </p>
            </div>
            <div className="flex-2/3">
              <div className="mt-2 flex gap-2">
                <LabeledInput label="LinkedIn">
                  <Input
                    placeholder="Enter your LinkedIn profile link"
                    value={linkedin}
                    required
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </LabeledInput>
                <LabeledInput label="Github">
                  <Input
                    placeholder="Enter your Github profile link"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    required
                  />
                </LabeledInput>
              </div>
            </div>
          </div>

          <hr className="my-2" />

          {/* skills */}
          <div className="flex w-full gap-2 md:gap-4">
            <div className="flex-1/3 flex flex-col">
              <h1>Skills</h1>
              <p>
                This will help the industry hone in on your skills and strengths
              </p>
            </div>
            <div className="flex-2/3">
              <div className="mt-2 flex flex-col gap-2">
                <LabeledInput label="Learnt a new skill? Add it to your list of skills. Type it down below">
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Skills"
                    value={skills}
                    onChange={handleSkillsChange}
                  >
                    {skills.map((skill) => (
                      <Select.Option key={skill} value={skill}>
                        {skill}
                      </Select.Option>
                    ))}
                  </Select>
                </LabeledInput>
                <div className="flex flex-col gap-2">
                  {skills.length > 0 ? (
                    <span className="flex gap-2">
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </span>
                  ) : (
                    <p>No skills added yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:mt-6">
          <Button type="primary" shape="round" htmlType="submit">
            {uploading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
