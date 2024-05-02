import { Image } from "antd";
import React from "react";
import Button from "./Button";

const Event = () => {
  return (
    <div>
      <section className="w-full py-12 shadow-2xl rounded-3xl md:py-8 lg:py-16 xl:py-24 md:mt-8">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3">
                <h1 className="text-lg font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  De<span className="text-green-600 font-semibold">cO</span>dE 2.0
                </h1>
                <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The annual Safaricom Engineering Summit “De<span className="text-green-600 font-semibold">cO</span>dE 2.0”, an
                  esteemed event that promises to be a nexus of innovation and
                  collaboration in the realm of engineering and technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
              <Button text="Book Your Slot" url="/#" color="#46BD61" />
              </div>
            </div>
            <Image
              alt="Partners"
              className="mx-auto aspect-[13/9] overflow-hidden rounded-3xl object-cover object-center sm:w-full"
              height={450}
              src="/hero.jpeg"
              width={650}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
