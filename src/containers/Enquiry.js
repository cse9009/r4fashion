import React,{useEffect} from 'react';
import Icon from '@ant-design/icons';
import { Badge,Button,Card,Checkbox,Col,DatePicker,Drawer,Dropdown,Form,Image,Input,InputNumber,Layout,Menu,message,Modal,Radio,Row,Select,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,DownOutlined,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

function Enquiry(props) {
    return (
        <div className='container top-mr'>
            <Card>
                <h3 className='center-align'>Please fill out this form to send an order enquiry</h3>
                <Form {...layout} name="nest-messages" className='custom-form'>
                    <Form.Item name='name' label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name='email' label="Email" rules={[{ type: 'email'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='country' label="Country">
                        <Input />
                    </Form.Item>
                    <Form.Item name='color' label='Product Color'>
                        <Select
                            // style={{ width: 200 }}
                            placeholder="--Select--"
                        >
                            <Option value="red">Red</Option>
                            <Option value="blue">Blue</Option>
                            <Option value="green">Green</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='product_for' label='Product For'>
                        <Select
                            // style={{ width: 200 }}
                            placeholder="--Select--"
                        >
                            <Option value="gents">Gents</Option>
                            <Option value="ladies">Ladies</Option>
                            <Option value="child">Child</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='size' label='Product Size'>
                        <Select
                            // style={{ width: 200 }}
                            placeholder="--Select--"
                        >
                            <Option value="sx">SX</Option>
                            <Option value="s">S</Option>
                            <Option value="m">M</Option>
                            <Option value="l">L</Option>
                            <Option value="xl">XL</Option>
                            <Option value="xxl">XXL</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='quantity' label="Quantity">
                        <InputNumber placeholder='How many pices?' />
                    </Form.Item>
                    <Form.Item name='delivery_date' label="Delivery Date">
                        <DatePicker size={'small'} />
                    </Form.Item>
                    <Form.Item name='message' label="Message">
                        <Input.TextArea rows='4' />
                    </Form.Item>
                    <div className='right-align'>
                        <Button type="danger" htmlType="submit">
                            Send Enquiry
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default Enquiry;