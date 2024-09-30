
import React from 'react'
import { Typography,Row, Col,Image} from 'antd'
import image from '../images/bg_image2.jpg';
const {Title, Text}=Typography;
const Home = () => {
  return (
    <div className="container">
     <div className="content">
      <h2 className="heading">
        Welcome to 
        <br/>
       <span className="sub-heading"> COMESA M&E Portal</span>
        </h2>
        <p className="heading-text">
        Build and Manage your products with us..
        </p> 
      </div>
       <Row style={{  width:'100%'}} className="page-container">
        <Col span={12} className="image-col">
          <Image 
            src={image}
            alt="Company Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop:'20px'}}
          />
        </Col>
        <Col span={12} className="description-col" >
          <Title level={2} className="heading">About Our Company</Title>
          <Text className="description-text">
            Welcome to our company! We are dedicated to providing the best solutions for our clients. 
            Our team of experts works tirelessly to ensure that we meet your needs and exceed your expectations. 
            With a focus on innovation and quality, we strive to be the industry leader in our field. 
            <br/>
            Join us as we embark on this exciting journey together!
          </Text>
        </Col>
      </Row>
       
      </div>
  )
}

export default Home
