import { Image } from "antd";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl pt-12 md:pt-0 font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Building the Future Together.
                </h1>
                <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We collaborate with industry-leading companies to deliver
                  exceptional solutions for our customers.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button text="Partner With Us" url="/about" color="#ffffff" />
                <Button text="How we Work" url="/about" color="#46BD61" />
              </div>
            </div>
            <Image
              alt="Partners"
              className="mx-auto aspect-[13/9] overflow-hidden rounded-3xl object-cover object-center sm:w-full"
              style={{ maxWidth: "100%", height: "auto" }}
              src="/hero.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
