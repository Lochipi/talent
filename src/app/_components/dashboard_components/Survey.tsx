import { Card, Image } from "antd";
import React from "react";

const Survey = () => {
  return (
    <div>
      <Card title="Surveys" bordered={false}>
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
              <p>
                There are currently no surveys available at this time. Please
                check back later.
              </p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default Survey;
