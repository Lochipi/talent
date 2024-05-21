"use client";

import React from "react";
import { Button, Input, Select } from "antd";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("Form submitted");
}
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
                  <Input placeholder="First Name" />
                </LabeledInput>
                <LabeledInput label="Last Name">
                  <Input placeholder="Last Name" />
                </LabeledInput>
              </div>
              <div className="flex gap-2">
                <LabeledInput label="Email">
                  <Input placeholder="Email" />
                </LabeledInput>
                <LabeledInput label="Phone Number">
                  <Input placeholder="Phone Number" />
                </LabeledInput>
              </div>
              <div className="mt-2 flex flex-col gap-3">
                <LabeledInput label="Profile Picture">
                  <Input type="file" />
                </LabeledInput>
                <LabeledInput label="Bio">
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder="Bio"
                    // value=""
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
                  <Input placeholder="https:.." />
                </LabeledInput>
                <LabeledInput label="Github">
                  <Input placeholder="https:.." />
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
                <LabeledInput label="Learnt a new skill? Add it to your list of skills">
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Skills"
                    value={["test", "test2", "test3"]}
                    // onChange={handleChange}
                  >
                    {/* {skills.map((skill) => (
                      <Select.Option key={skill} value={skill}>
                        {skill}
                      </Select.Option>
                    ))} */}
                  </Select>
                </LabeledInput>
                <div className="flex flex-col gap-2">
                  <h1>Your Skills here</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <hr />

      <div className="mt-2 flex justify-center md:mt-6">
        <Button type="primary">Save changes</Button>
      </div>
    </div>
  );
};

export default UserProfileForm;
