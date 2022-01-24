import React from 'react';
import { Button,Card, Col, Layout,Row,Typography} from 'antd';
import Icon from '@ant-design/icons';
import {BellFilled,CameraFilled,DownCircleFilled,FacebookFilled,FilePdfFilled,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined,TwitterCircleFilled,YoutubeFilled } from '@ant-design/icons';
const { Footer } = Layout;
const {Link} = Typography;

function SiteFooter(props) {
    return (
        <>
        <Footer style={{backgroundColor:'#ab2323',color:'#fff',minHeight:'80px'}}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} style={{textAlign:'center',backgroundColor:'#00000061'}}>
                   <div style={{padding:'1rem',cursor:'pointer',}}>
                        <Icon component={FilePdfFilled} style={{fontSize:'34px'}}/>
                        Click Here<br/>to Donwload
                   </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="footer-link-pd">
                    <p className="bold" style={{fontSize:'16px'}}>Quick Links</p>
                    <Link className="link" href="#">Utilities</Link>
                    <Link className="link" href="#">Buyers</Link>
                    <Link className="link" href="#">Enquiry</Link>
                    {/* <Link className="link" href="#">Certificates</Link> */}
                    <Link className="link" href="#">IT</Link>
                    <Link className="link" href="#">Export</Link>
                    <Link className="link" href="#">Career</Link>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="footer-link-pd">
                    <p className="bold" style={{fontSize:'16px'}}>Follow Us</p>
                    <a style={{color:'white'}} href="#">
                        <Icon component={FacebookFilled}/>&nbsp;
                        Facebook
                    </a><br/>
                    <a style={{color:'white'}} href="#">
                        <Icon component={YoutubeFilled}/>&nbsp;
                        YouTube
                    </a><br/>
                    <a style={{color:'white'}} href="#">
                        <Icon component={TwitterCircleFilled}/>&nbsp;
                        Twitter
                    </a>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="footer-link-pd">
                    <p className="bold" style={{fontSize:'16px'}}>Contacts</p>
                    <a style={{color:'white'}} href='tel:+88-02-47670100'>
                        <Icon component={PhoneFilled}/>&nbsp;
                        +88-02-47670100
                    </a>
                    <br/>
                    <a style={{color:'white'}} href="fax:+880247671083">
                        <Icon component={MessageFilled}/>&nbsp;
                        FAX: +88 02 47671083
                    </a>
                    <br/>
                    <a style={{color:'white'}} href="mailto:rashelr4@gmail.com">
                        <Icon component={MailFilled}/>&nbsp;
                        rashelr4@gmail.com
                    </a>
                    <br/>
                    <a style={{color:'white'}} href="mailto:rsknit@rsknit.com">
                        <Icon component={MailFilled}/>&nbsp;
                        rsknit@rsknit.com
                    </a>
                    <br/><br/>
                    <a style={{color:'white'}} href='tel:+8801919164164'>
                        <Icon component={UserOutlined} style={{backgroundColor:'white',color:'red'}}/>&nbsp;
                        MD. MAHIDE MASUD RASHEL
                        <div className='center-align'>
                            <small>(MANAGING DIRECTOR)</small>
                            <br/>
                            <small>VOICE: +88 01919 164 164</small>
                        </div>
                    </a>
                    {/* <Link className="link" href="#">bpsc</Link>
                    <Link className="link" href="#">dpe</Link>
                    <Link className="link" href="#">erecruitment</Link> */}
                </Col>
            </Row>
        </Footer>
        {/* <div className='footer-logo-section'>
            <Card>
            <img src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'} width="40" height="40" alt="Logo"/>
            </Card>
            <Card>
            <img src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'} width="40" height="40" alt="Logo"/>
            </Card>
            <Card>
            <img src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'} width="40" height="40" alt="Logo"/>
            </Card>
            <Card>
            <img src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'} width="40" height="40" alt="Logo"/>
            </Card>
            <Card>
            <img src={'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'} width="40" height="40" alt="Logo"/>
        </Card>
        </div> */}
        <Footer style={{backgroundColor: '#360606',color:'#fff',padding:'1rem'}}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="copyright-text nm">©2022 R4 Fashion Wear PVT. LTD. All Rights Reserved.</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <Link className="link center-align" href="/why-we-do/">Privacy Policy</Link>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <Link className="link terms-condition-text" href="/why-we-do/">Terms & Conditions</Link>
                </Col>
            </Row>
        </Footer>
        </>
    );
}

export default SiteFooter;