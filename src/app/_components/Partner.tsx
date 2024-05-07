import { Image } from "antd";
import React from "react";
import Button from "./Button";

const Partner = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="gap -6 container flex flex-col px-2 md:px-4">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_750px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <Image
              alt="Partners"
              className="mx-auto aspect-[13/9] overflow-hidden rounded-3xl object-cover object-center sm:w-full"
              height={350}
              src="/hero.jpeg"
              width={550}
            />
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3">
                <h1 className="text-xl font-semibold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                  Want to grow your impact as a Partner?
                </h1>
                <p className="max-w-[700px] lg:text-base/relaxed xl:text-xl/relaxed">
                  At Industry Talent, we believe in the power of collaboration.
                  Together, we can shape the future of our industry and empower
                  the next generation of talent. Join hands with us through our
                  versatile partnership opportunities:
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button text="Partner With Us" url="/#" color="#46BD61" />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-blue-700">20+</h1>
                <h2 className="text-xl font-semibold">Partners</h2>
              </div>
              <Image
                alt="Partner"
                className="mx-auto rounded-xl"
                height={50}
                src="/hero.jpeg"
                width={100}
              />
              <Image
                alt="Partner"
                className="mx-auto rounded-xl"
                height={50}
                src="/hero.jpeg"
                width={100}
              />
              <Image
                alt="Partner"
                className="mx-auto rounded-xl"
                height={50}
                src="/hero.jpeg"
                width={100}
              />
              <Image
                alt="Partner"
                className="mx-auto rounded-xl"
                height={50}
                src="/hero.jpeg"
                width={100}
              />
              <Image
                alt="Partner"
                className="mx-auto rounded-xl"
                height={50}
                src="/hero.jpeg"
                width={100}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
