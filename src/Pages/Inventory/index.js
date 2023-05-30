import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { Row, Col, Icon } from "antd";
import { PlayCircleFilled, ShoppingOutlined } from "@ant-design/icons";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Row align="middle">
 
        <Typography.Title  style={{
        fontWeight:'bold'
      }} level={3}  >Inventory</Typography.Title>
     
        <Col>
        <ShoppingOutlined
              style={{
                color: "blue",
              //  backgroundColor: "rgba(0,0,255,0.25)",
             //  borderRadius: 10,
                fontSize: 35,
                padding: 5,
               
              verticalAlign: "middle",
              margin: "15px ",
              paddingTop:20
              }}
            />
          
        </Col>
      </Row>

      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar size={50} src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>$ {value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },

          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "DiscountPercentage",
            dataIndex: "discountPercentage",
            render: (value) => <span> {value} %</span>,
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;
