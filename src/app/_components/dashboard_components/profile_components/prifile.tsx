"use client";

import React, { useState } from "react";
import { Button, Input, Select, message } from "antd";
import { supabase } from "~/utils/supabase/client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "~/lib/types";
import { z } from "zod";

type FormValues = z.infer<typeof schema>;

const LabeledInput = ({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) => {
  return (
    <div className="labeled-input">
      <label>{label}</label>
      {children}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

const UserProfileForm = () => {
  const { data: sessionData } = useSession();

  const [uploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      names: {
        firstName: "",
        lastName: "",
      },
      email: "",
      phoneNumber: 0,
      bio: "",
      socials: {
        linkedin: "",
        github: "",
      },
      skills: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form Submitted", data);
    // Handle form submission logic here

    reset();
  };

  const { data: profileUrl } = supabase.storage
    .from("talent_imgs/profiles")
    .getPublicUrl(sessionData?.user.id ?? "default");

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
        .from(`talent_imgs/profiles`)
        .upload(
          sessionData?.user.id ? sessionData.user.id : "profile" + file.name,
          file,
        );
      if (img) {
        console.log(img, uploadError);
      }

      await message.success("Image updated successfully");
    } catch (error) {
      await message.error("Error uploading image or image exists.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                <LabeledInput
                  label="First Name"
                  error={errors.names?.firstName?.message}
                >
                  <Input
                    placeholder="First Name"
                    type="text"
                    id="firstname"
                    {...register("names.firstName")}
                  />
                </LabeledInput>
                <LabeledInput
                  label="Last Name"
                  error={errors.names?.lastName?.message}
                >
                  <Input
                    placeholder="Last Name"
                    type="text"
                    id="lastname"
                    {...register("names.lastName")}
                  />
                </LabeledInput>
              </div>
              <div className="flex gap-2">
                <LabeledInput label="Email" error={errors.email?.message}>
                  <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    {...register("email")}
                  />
                </LabeledInput>
                <LabeledInput
                  label="Phone Number"
                  error={errors.phoneNumber?.message}
                >
                  <Input
                    placeholder="Phone Number"
                    type="number"
                    id="phoneNumber"
                    {...(register("phoneNumber"), { valueAsNumber: true })}
                  />
                </LabeledInput>
              </div>
              <div className="mt-2 flex flex-col gap-3">
                <div>
                  <Image
                    src={profileUrl.publicUrl}
                    alt="profile image"
                    width={50}
                    height={50}
                    className="mt-2 rounded-full border-2 md:mt-4"
                  />
                </div>
                <LabeledInput label="Profile Picture">
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </LabeledInput>
                <LabeledInput label="Bio" error={errors.bio?.message}>
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder="Bio"
                    id="bio"
                    {...register("bio")}
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
                <LabeledInput
                  label="LinkedIn"
                  error={errors.socials?.linkedin?.message}
                >
                  <Input
                    placeholder="Enter your LinkedIn profile link"
                    id="linkedin"
                    {...register("socials.linkedin")}
                  />
                </LabeledInput>
                <LabeledInput
                  label="Github"
                  error={errors.socials?.github?.message}
                >
                  <Input
                    placeholder="Enter your Github profile link"
                    id="github"
                    {...register("socials.github")}
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
                  <Controller
                    name="skills"
                    control={control}
                    render={({ field }) => (
                      <Select
                        mode="tags"
                        style={{ width: "100%" }}
                        placeholder="Skills"
                        id="skills"
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />
                </LabeledInput>
                <div className="flex flex-col gap-2">
                  {/* Display added skills here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:mt-6">
          <Button
            disabled={isSubmitting}
            type="primary"
            shape="round"
            htmlType="submit"
          >
            {uploading ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
