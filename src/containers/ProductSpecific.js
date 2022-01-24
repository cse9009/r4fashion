import React,{useEffect,useState} from 'react';
import Icon from '@ant-design/icons';
import { Badge,Button,Card,Checkbox,Col,Drawer,Dropdown,Form,Image,Input,Layout,Menu,message,Modal,Radio,Row,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';

const { Meta } = Card;

function ProductSpecific(props) {
    const {category} = props.match.params
    const [productSrc,setProductSrc] = useState('https://image.made-in-china.com/2f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg')
    
    useEffect(()=>{
        if(category != undefined){
            switch (category) {
                case 't-shirt':
                    setProductSrc('https://image.made-in-china.com/2f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg')
                    break;
                case 'polo-shirt':
                    setProductSrc('https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw3aab628b/PH4014_RGM_20.jpg?imwidth=915&impolicy=product')
                    break;
                case 'round-neck':
                    setProductSrc('data:image/jpeg;base64,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')
                    break;
                case 'tank-top':
                    setProductSrc('data:image/jpeg;base64,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')
                    break;
                case 'fashionable-knit':
                    setProductSrc('data:image/jpeg;base64,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')
                    break;
            }
        }
    },[category])
    return (
        <div className='container top-mr'>
            <Card>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className='p1'>
                        <Card>
                            <Image alt={category??'Product Image'} width="100%" src={productSrc} />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ProductSpecific;