import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Row, Col, Icon } from "antd";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Row align="middle">
 
 <Typography.Title style={{
        fontWeight:'bold'
      }} level={3}  >Orders</Typography.Title>

 <Col>
 <ShoppingCartOutlined
       style={{
         color: "green",
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
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>$ {value}</span>,
          },

          {
            title: "  Quantity",
            dataIndex: "quantity",
            //render: (value) => <span> {value}  pc</span>,
          },

          {
            title: "DiscountPercentage",
            dataIndex: "discountPercentage",
            render: (value) => <span> {value} %</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>$ {value} </span>,
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => <span>$ {value} </span>,
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
export default Orders;
