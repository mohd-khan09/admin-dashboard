import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import { Row, Col, Icon } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Row align="middle">
 
 <Typography.Title   style={{
        fontWeight:'bold'
      }} level={3} >Customers</Typography.Title>

 <Col>
 <UserOutlined
       style={{
         color: "purple",
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
            title: "Image",
            dataIndex: "image",
            render: (link) => {
              return <Avatar size={50} src={link} />;
            },
          },
          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
        
          },
          {
            title: "Age",
            dataIndex: "age",
           
          },
          {
            title: "Gender",
            dataIndex: "gender",
          },
          {
            title: "Email",
            dataIndex: "email",
          },

          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render:(address)=>{
              return <span>{address.address},  {address.city}</span>
            }
            
          },
          
          {
            title: "BirthDate",
            dataIndex: "birthDate",
            
          },
        
          {
            title: "Height",
            dataIndex: "height",
            
          },
          {
            title: "Weight",
            dataIndex: "weight",
            
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
export default Customers;