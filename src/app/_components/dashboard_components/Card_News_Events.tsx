import { Card, Image } from "antd";
import React from "react";

interface CardProp {
  text: string;
  placeholder: string;
  title: string;
  extraLink?: boolean;
}

const Card_News_Events = ({
  text,
  placeholder,
  title,
  extraLink = false,
}: CardProp) => {
  return (
    <div>
      <Card
        title={title}
        extra={extraLink && <a href="#">View all</a>}
        bordered={false}
      >
        <Card bordered={false} style={{ width: "100%" }} className="mt-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                preview={false}
                src="https://via.placeholder.com/150"
                alt="news"
                className="max-h-[80px] w-full rounded-3xl object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="font-semibold">No Upcoming {placeholder}</h2>
              <p>{text}</p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default Card_News_Events;
