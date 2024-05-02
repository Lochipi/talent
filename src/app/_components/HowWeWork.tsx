import { PiArrowBendDoubleUpLeft } from "react-icons/pi";
import { PiNotebookLight } from "react-icons/pi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { ImUserTie } from "react-icons/im";
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import Button from "./Button";


const HowWeWork = () => {
  const steps = [
    { icon: <PiArrowBendDoubleUpLeft />, title: "Application", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." },
    { icon: <PiNotebookLight />, title: "Selection", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." },
    { icon: <BiSolidShoppingBags />, title: "Training", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." },
    { icon: <ImUserTie />, title: "Mentorship", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." },
    { icon: <FaBookReader />, title: "Internship", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." },
    { icon: <FaUserGraduate />, title: "Employment", description: "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal." }
  ];

  return (
    <div className="min-h-[70vh] w-full bg-[#F8F8F8] py-3">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-semibold">How Does it Work?</h2>
        <p className="max-w-2xl text-center">
          This is a curated 6-9 Month Journey leading into the open talent
          marketplace to service the industry.
        </p>
      </div>
      <div className="flex items-center justify-center mb-0">
        <section className="body-font text-gray-600">
          <div className="container mx-auto flex flex-wrap px-5 py-24">
            {steps.map((step, index) => (
              <div key={index} className="relative mx-auto flex pb-6 pt-2 sm:items-center md:w-2/3">
                <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white sm:mt-0">
                  {index + 1}
                </div>
                <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
                  <div className="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-black">
                    {step.icon}
                  </div>
                  <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                    <h2 className="title-font mb-1 text-xl font-medium text-gray-900">
                      {step.title}
                    </h2>
                    <p className="leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center mb-0">
       <Button text="Learn More" url="/about" color="#46BD61" />
      </div>
    </div>
  );
};

export default HowWeWork;
