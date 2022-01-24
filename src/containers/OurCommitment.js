import React, {useEffect,useState,useRef} from 'react';
import {useHistory} from 'react-router-dom';
import Icon from '@ant-design/icons';
import { Button,Card,Checkbox,Col,Drawer,Dropdown,Form,Image,Input,Layout,Menu,message,Modal,Radio,Row,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';
import C1Image from '../assets/c1.png';
import C2Image from '../assets/c2.png';
import C3Image from '../assets/c3.png';

function OurCommitment(props) {
    return (
        <div className='container top-mr'>
           <Card>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <ul>
                            <li>Sed quasi architecto beatae vitae dicta sunt explicabo.</li>
                            <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, </li>    
                            <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,</li>    
                            <li>i ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.</li>    
                            <li>non proident, sunt in culpa qui officia deserunt mollit anim id est.</li>    
                        </ul>
                        <p>"quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <img alt='demo image' width="100%" src={C1Image}/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <img alt='demo image' width="100%" src={C2Image}/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <img alt='demo image' width="100%" src={C3Image}/>
                    </Col>
                </Row>
            </Card> 
        </div>
    );
}

export default OurCommitment;