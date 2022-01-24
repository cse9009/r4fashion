import React,{useEffect} from 'react';
import Icon from '@ant-design/icons';
import { Badge,Button,Card,Checkbox,Col,Drawer,Dropdown,Form,Image,Input,Layout,Menu,message,Modal,Radio,Row,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,DownOutlined,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';
import BackgroundVideo from '../assets/background_video_50.mp4'
import R4MainBuilding from '../assets/r4_main_building.jpg'
import OfficeImageTwo from '../assets/2.png'
import BCIImage from '../assets/bci.png'
import BSCIImage from '../assets/bsci.jpg'
import ISOImage from '../assets/iso.jpg'
import OekoTexImage from '../assets/oeko_tex.jpg'
import SisImage from '../assets/sis.png'
import R4FashionWearMap from '../assets/r4_map.png'

const { Meta } = Card;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const Home = () => {
    function animate(elem, style, unit, from, to, time, prop) {
        if (!elem) {
          return;
        }
        var start = new Date().getTime(),
          timer = setInterval(function() {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
              elem[style] = (from + step * (to - from)) + unit;
            } else {
              elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
              clearInterval(timer);
            }
          }, 25);
        if (prop) {
          elem[style] = from + unit;
        } else {
          elem.style[style] = from + unit;
        }
      }
    return (
        <>
            <div id='home' style={{position:'relative',height:'100vh'}}>
                <video autoPlay loop muted>
                    <source src={BackgroundVideo} type='video/mp4'/>
                </video>
                <div id="home_title">
                    <div className='center-align'>
                    R4 FASHION WEAR (PVT.) LTD. IS A 100% EXPORT ORIENTED KNIT GARMENTS INDUSTRY,
                    </div>
                    <div className='center-align' onClick={()=>{
                        var target = document.getElementById("about");
                        animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);
                    }} style={{cursor:'pointer'}}>
                        <Icon component={DownOutlined} style={{fontSize:'56px'}}/>
                    </div>
                </div>
            </div>
            {/* About */}
            <div className='container'>
                <Card id="about">
                    <div className='flow-text center-align'>ABOUT</div>
                    <hr style={{width:'20%',border:'2px dashed'}}/>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='p1'>
                            <Badge.Ribbon text="2016">
                                <Card className='bold'>
                                    YEAR OF ESTABLISHMENT
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="KNIT WEAR MANUFACTURER & EXPORTER" color="pink" className='about'>
                                <Card className='bold'>
                                    ACTIVITY
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="PRIVATE LIMITED COMPANY" color="red" className='about'>
                                <Card className='bold'>
                                    ORGANIZATION TYPE
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="455" color="cyan">
                                <Card className='bold'>
                                    NUMBER OF EMPLOYEE
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="40" color="green">
                                <Card className='bold'>
                                    PROFESSIONAL ADMINISTRATIVE OFFICER
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="30" color="purple">
                                <Card className='bold'>
                                    CLINICAL, SALE’S & H R M RELATED OFFICER
                                </Card>
                            </Badge.Ribbon>
                            <Badge.Ribbon text="3" color="volcano">
                                <Card className='bold'>
                                    DOCTOR & NURSES  
                                </Card>
                            </Badge.Ribbon>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='p1 center-align'>
                            <Image src={OfficeImageTwo}/>
                        </Col>
                    </Row>
                </Card>
            </div>
            {/* Services */}
            <div className='container'>
                <Card id="services">
                    <div className='flow-text center-align'>SERVICES</div>
                    <hr style={{width:'20%',border:'2px dashed'}}/>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="KNITTING" src="https://static.wixstatic.com/media/e1aef3_448febd566cf4679bdf3b5c7269414d8~mv2.png/v1/crop/x_79,y_0,w_1168,h_884/fill/w_223,h_156,al_c,q_85,usm_0.66_1.00_0.01/e1aef3_448febd566cf4679bdf3b5c7269414d8~mv2.webp" />}
                            >
                                <Meta title="KNITTING" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="YARN DYEING" src="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/crop/x_130,y_0,w_3739,h_2666/fill/w_225,h_156,al_c,q_80,usm_0.66_1.00_0.01/Colorful%20yarn.webp" />}
                            >
                                <Meta title="YARN DYEING" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="FABRIC DYEING" src="https://static.wixstatic.com/media/0ad3bfa355624f64baa9697dac0b41e1.jpg/v1/crop/x_142,y_0,w_4084,h_2912/fill/w_223,h_156,al_c,q_80,usm_0.66_1.00_0.01/Fabric%20Detail.webp" />}
                            >
                                <Meta title="FABRIC DYEING" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="CUTTING" src="https://static.wixstatic.com/media/e1aef3_79124fb7248f41fda46a672ac1354cc6~mv2.png/v1/crop/x_168,y_0,w_926,h_660/fill/w_223,h_156,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202018-07-13%20at%207_55_56%20PM.webp" />}
                            >
                                <Meta title="CUTTING" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="PRINTING & EMBROIDERY" src="https://static.wixstatic.com/media/e1aef3_bcdb671a7425460e89ec6ae5f2a8c9b5~mv2.png/v1/crop/x_0,y_54,w_1120,h_799/fill/w_223,h_158,al_c,q_85,usm_0.66_1.00_0.01/EMBROIDERY_PNG.webp" />}
                            >
                                <Meta title="PRINTING & EMBROIDERY" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="ALL OVER PRINT" src="https://static.wixstatic.com/media/6ed7db4286254942af1e8ff1fe074475.jpg/v1/crop/x_0,y_371,w_2856,h_2036/fill/w_225,h_158,al_c,q_80,usm_0.66_1.00_0.01/Hands%20Pattern.webp" />}
                            >
                                <Meta title="ALL OVER PRINT" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="SEWING & FINISHING" src="https://static.wixstatic.com/media/e1aef3_8974502471124befab41157522afa932~mv2.png/v1/crop/x_0,y_10,w_1256,h_896/fill/w_223,h_158,al_c,q_85,usm_0.66_1.00_0.01/Sewing.webp" />}
                            >
                                <Meta title="SEWING & FINISHING" />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                            <Card
                                style={{ width: '100%' }}
                                cover={<img alt="QUALITY CONTROL" src="https://static.wixstatic.com/media/e1aef3_3beea154b1364170b243d16660892d0c~mv2.png/v1/crop/x_25,y_0,w_1209,h_862/fill/w_223,h_158,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202018-07-14%20at%2011_09_41%20AM_pn.webp" />}
                            >
                                <Meta title="QUALITY CONTROL" />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
            {/* Clients */}
            <div className='container center-align'>
                <div id="clients" className='footer-logo-section'>
                    <div className='flow-text center-align white-text'>Clients</div>
                    <hr style={{width:'20%',border:'2px dashed white'}}/>
                    <Card>
                        <img src={'https://thumbs.dreamstime.com/b/client-pink-blue-color-word-text-logo-icon-suitable-card-typography-design-133479315.jpg'} height="60" alt="Logo"/>
                    </Card>
                    <Card>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjZ0VFjwJ2ZZNGrDn8V2RkCtN6Am2O52-6LSN0P9trhB3ysfc7wsrF2YOKEiS2eI7AVY&usqp=CAU'} height="60" alt="Logo"/>
                    </Card>
                    <Card>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz3jQIOnbOQOssAaOx5sFtyvKkHP9VPeQZcK9F0dGp9eyD5Rh-Xdv2NqjR_i6pudysEk&usqp=CAU'} height="60" alt="Logo"/>
                    </Card>
                    <Card>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DmVpOS5TN7dsh6bLkA2DdqPqtn90cB2fcAij-Oq25JUGjpDNJImtMGEaq9WnD_3iwXU&usqp=CAU'} height="60" alt="Logo"/>
                    </Card>
                    <Card>
                        <img src={'https://cdn4.vectorstock.com/i/thumb-large/44/03/coaching-health-and-fitness-logo-vector-13804403.jpg'} height="60" alt="Logo"/>
                    </Card>
                </div>
            </div>
            {/* Certification */}
            <div className='container center-align'>
                <div id="certification" className='footer-logo-section'>
                    <div className='flow-text center-align white-text'>Certification</div>
                    <hr style={{width:'20%',border:'2px dashed white'}}/>
                    <Card>
                        <img src={BCIImage} height="60" alt="BCI"/>
                        <Meta title="BCI" />
                    </Card>
                    <Card>
                        <img src={BSCIImage} height="60" alt="BSCI"/>
                        <Meta title="BSCI" />
                    </Card>
                    <Card>
                        <img src={ISOImage} height="60" alt="ISO"/>
                        <Meta title="ISO" />
                    </Card>
                    <Card>
                        <img src={OekoTexImage} height="60" alt="OEKO-TEX"/>
                        <Meta title="OEKO-TEX" />
                    </Card>
                    <Card>
                        <img src={SisImage} height="60" alt="SIS CERT"/>
                        <Meta title="SIS CERT"/>
                    </Card>
                </div>
            </div>
            {/* Contact Us */}
            <div className='container'>
                <Card id="contact_us">
                    <div className='flow-text center-align'>Contact Us</div>
                    <hr style={{width:'20%',border:'2px dashed'}}/>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className=''>
                            <Image src={R4FashionWearMap} alt='R4 Fashion Wear PVT. LTD. Map'/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className=''>
                            <Image src={R4MainBuilding} alt='R4 Fashion Wear PVT. LTD. Main Building'/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='p1'>
                            <h3 className='bold'>Inquiries</h3>
                            <p>For any inquiries, questions or commendations, please call: +88 01919 164 164 or fill out the following form</p>
                            <Form {...layout} name="nest-messages" className='custom-form'>
                                <Form.Item name='name' label="Name" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='email' label="Email" rules={[{ type: 'email',required:true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='subject' label="Subject" rules={[{ required:true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='message' label="Message" rules={[{ required:true }]}>
                                    <Input.TextArea rows='4' />
                                </Form.Item>
                                <div className='right-align'>
                                    <Button type="danger" htmlType="submit">
                                    Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} className='p1'>
                            <h3 className='bold'>R4 FASHION WEAR (PVT). LTD.</h3>
                            <p>PLOT #A-96 BSCIC HOSIERY INDUSTRIAL ESTATE, SHASONGAON, FATULLAH, NARAYANGANJ-1420.</p>
                            {/* <div>Email: rashelr4@gmail.com</div>
                            <div>Tel: +88-02-47670100</div>         */}
                            {/* <div>FAX: +88 02 47671083</div>                                      */}
                            <a style={{color:'black'}} href='tel:+88-02-47670100'>
                                <Icon component={PhoneFilled}/>&nbsp;
                                +88-02-47670100
                            </a>
                            <br/>
                            <a style={{color:'black'}} href="fax:+880247671083">
                                <Icon component={MessageFilled}/>&nbsp;
                                FAX: +88 02 47671083
                            </a>
                            <br/>
                            <a style={{color:'black'}} href="mailto:rashelr4@gmail.com">
                                <Icon component={MailFilled}/>&nbsp;
                                rashelr4@gmail.com
                            </a>   
                            <br/>
                            <a style={{color:'black'}} href="mailto:rsknit@rsknit.com">
                                <Icon component={MailFilled}/>&nbsp;
                                rsknit@rsknit.com
                            </a>     
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
};

export default Home;