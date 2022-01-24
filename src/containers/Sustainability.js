import React, {useEffect,useState,useRef} from 'react';
import {useHistory} from 'react-router-dom';
import Icon from '@ant-design/icons';
import { Button,Card,Checkbox,Col,Drawer,Dropdown,Form,Image,Input,Layout,Menu,message,Modal,Radio,Row,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';

function Sustainability(props) {
    return (
        <div className='container top-mr'>
           <Card>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p>"Sed quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <img alt='demo image' width="100%" src='https://slidebazaar.com/wp-content/uploads/2018/10/role-of-corporate-culture-in-sustainability-powerpoint-template-and-keynote-slide-1.jpg'/>
                    </Col>
                </Row>
            </Card> 
        </div>
    );
}

export default Sustainability;