import { Card, Col, Image, Row, Button, Avatar } from "antd";
import Meta from "antd/es/card/Meta";

const CareerCard = () => {
  return (
    <div>
      <Card
        className="max-w-[300]"
        style={{ maxWidth: 300, margin: "auto" }}
        cover={<Image src="/hero.jpeg" alt="career image" />}
      >
        <Meta
          title="Cloud Computing"
          description="Build knowledge on AWS Cloud and exposes you to foundational cloud concepts, AWS services, security ..."
        />
        <Row gutter={16}>
          <Col span={12} className="flex items-center justify-center">
            <div className="ml-0">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            </div>
            <div>
              <h2 className="">Instructor</h2>
              <p>John Doe</p>
            </div>
          </Col>
          <Col span={12} className="flex items-center justify-center">
            <Button type="link" href="/foo">Learn More</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CareerCard;
