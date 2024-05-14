import { Card } from "antd";
import Image from "antd/lib/image";
import { getServerAuthSession } from "~/server/auth";

const Banner = async () => {
  const session = await getServerAuthSession();

  return (
    <Card className="min-h-[200] max-w-[300] p-8 md:p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-xl">
            Hello, {session?.user?.name},
          </h1>
          <p>
            Welcome to Industry Talent! Where you get to discover, develop and
            transform your digital skills.
          </p>
        </div>
        <div>
          <Image
            preview={false}
            width={80}
            height={80}
            src="/hero.jpeg"
            alt="Illustration of a person learning"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default Banner;
