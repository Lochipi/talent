import CourseCard from "~/app/_components/dashboard_components/CourseCard";
import Banner from "~/app/_components/dashboard_components/sidebar/Banner";
import Card_News_Events from "~/app/_components/dashboard_components/Card_News_Events";
import { getServerAuthSession } from "~/server/auth";
import Survey from "~/app/_components/dashboard_components/Survey";
import { IoHomeOutline } from "react-icons/io5";
import { Avatar } from "antd";

const page = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="min-h-screen min-w-full">
      <div className="mb-2 flex items-center justify-between px-2 py-4 shadow-lg">
        <div className="px-2">
          <IoHomeOutline size={25} />
        </div>
        <div>
          <Avatar
            size={40}
            src={session?.user.image}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex min-w-full gap-3 px-4">
        <div className="flex-1/3">
          <Banner />
          <div className="mt-2 flex flex-col gap-2 md:mt-4">
            <Card_News_Events
              title="Event"
              text="All your upcoming events will appear here."
              placeholder="Events"
            />
            <Card_News_Events
              title="News"
              text="All your upcoming news will appear here."
              placeholder="News"
              extraLink={true}
            />
          </div>
        </div>
        <div className="flex-2/3">
          <div className="flex flex-col gap-4">
            <CourseCard />
            <Survey />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
