import React, {useEffect,useState,useRef} from 'react';
import {useHistory} from 'react-router-dom';
import Icon from '@ant-design/icons';
import { Button,Card,Checkbox,Col,Drawer,Dropdown,Form,Image,Input,Layout,Menu,message,Modal,Radio,Row,Upload } from 'antd';
import {BellFilled,CameraFilled,DownCircleFilled,EditOutlined,KeyOutlined,MailFilled,MenuOutlined,MessageFilled,PhoneFilled,
    UserOutlined,VerifiedOutlined,SendOutlined } from '@ant-design/icons';
import SiteLogo from '../../assets/r4_main_building_ltd_logo.jpg'

const SiteHeader = () => {
    const history = useHistory();
    const [loading,setLoading] = useState(false)
    const [passwordResetMobileNumber,setPasswordResetMobileNumber] = useState(null)
    const [loginModalVisible,setLoginModalVisible] = useState(false)
    const [profileChangeModalVisible,setProfileChangeModalVisible] = useState(false)
    const [passwordChangeModalVisible,setPasswordChangeModalVisible] = useState(false)
    const [showResetPasswordModal,setShowResetPasswordModal] = useState(false)
    const [settingsModalVisible,setSettingsModalVisible] = useState(false)
    const [migrateModalVisible,setMigrateModalVisible] = useState(false)
    const [migrateConfirmModalVisible,setMigrateConfirmModalVisible] = useState(false)
    const [menuModalVisible,setMenuModalVisible] = useState(false)
    const [planCost,setPlanCost] = useState(null)
    const [selectedTab,setSelectedTab] = useState('home')
    const [visibilityDrawer, setVisibilityDrawer] = useState(false);

    // Login
    const usernameRef = useRef()
    const passwordRef = useRef()
    // Password Change
    const oldPasswordRef = useRef()
    const newPasswordRef = useRef()
    const newConfirmPasswordRef = useRef()

    // Checking current path for instantiating ManuItem selected
    useEffect(()=>{
        const current_path = window.location.pathname;
        // if(current_path === '/'){
        //     !isAdmin ? setSelectedTab('home') : history.push("/management/first-page")
        // }else if(current_path === '/our-purpose'){
        //     !isAdmin ? setSelectedTab('our_purpose') : history.push("/management/first-page")
        // }else if(current_path === '/registration'){
        //     !isAdmin ? setSelectedTab('registration') : history.push("/management/first-page")
        // }else if(current_path === '/login'){
        //     !isAdmin ? setSelectedTab('login') : history.push("/management/first-page")
        // }else if(current_path === '/management/preliminary'){
        //     history.push("/management/preliminary")
        // }else if(current_path === '/notifications'){
        //     !isAdmin ? setSelectedTab('notifications') : history.push("/notifications")
        // }else if(current_path === '/preliminary-preparation'){
        //     // TODO: something is wrong here 
        //     // !isAdmin ? setSelectedTab('preliminary_preparation') : history.push("/management/first-page")
        //     !isAdmin ? setSelectedTab('preliminary_preparation') : setSelectedTab('preliminary_preparation_admin_panel')
        // }else if(current_path === '/question-bank'){
        //     // !isAdmin ? setSelectedTab('question_bank') : history.push("/management/first-page")
        //     !isAdmin ? setSelectedTab('question_bank') : setSelectedTab('question_bank_admin_panel')
        // }else if(current_path === '/model-test'){
        //     // !isAdmin ? setSelectedTab('model_test') : history.push("/management/first-page")
        //     !isAdmin ? setSelectedTab('model_test') : setSelectedTab('model_test_admin_panel')
        // }else if(current_path === '/phycological-therapy'){
        //     setSelectedTab('phycological_therapy')
        // }else if(current_path === '/more'){
        //     setSelectedTab('more')
        // }else if(current_path === '/recent-issues'){
        //     setSelectedTab('recent_issues')
        // }else if(current_path === '/progress-chart'){
        //     !isAdmin ? setSelectedTab('progress_chart') : history.push("/management/first-page")
        // }else if(current_path === '/ranking'){
        //     !isAdmin ? setSelectedTab('ranking') : history.push("/management/first-page")
        // }
       
    },[window.location.pathname])

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

    const onManuItemClick = ( item, key, keyPath, domEvent ) =>{
        setVisibilityDrawer(false)
        key = item.key
        setSelectedTab(key)
        if(key === 'home'){            
            history.push('/')
            var target = document.getElementById("home");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);

        }else if(key === 'about_us'){
            // document.getElementById('about').scrollIntoView({
            //     behavior: 'smooth', block: "end", inline: "nearest"
            //   });
            history.push('/')
            var target = document.getElementById("about");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);

        }else if(key === 'services'){
            history.push('/')
            var target = document.getElementById("services");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);
        
        }else if(key === 'clients'){
            history.push('/')
            var target = document.getElementById("clients");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);
        
        }else if(key === 'certification'){
            history.push('/')
            var target = document.getElementById("certification");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);
        
        }else if(key === 'contact_us'){
            history.push('/')
            var target = document.getElementById("contact_us");
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target != null ? target.offsetTop-100:0, 700, true);
        }else if(key === 'products'){
            history.push('/products')
            window.scrollTo(0,0)
        }else if(key === 'sustainability'){
            history.push('/sustainability')
            window.scrollTo(0,0)
        }else if(key === 'our_commitment'){
            history.push('/our-commitment')
            window.scrollTo(0,0)
        }
    }
    const showDrawer = () => {
        setVisibilityDrawer(true)
    };
    const onCloseDrawer = () =>{
        setVisibilityDrawer(false)
    }
    const onFinishLogin = (values) => {
        values.preventDefault()
        const username = usernameRef.current.state.value.trim()
        const password = passwordRef.current.state.value.trim()
        if(username !== '' && password !== ''){
            // login(username,password)
            usernameRef.current.state.value = ""
            passwordRef.current.state.value = ""
        }else{
            message.error("You must specify Mobile Number and Password both.")
        }
    };

    const onFinishProfileChange = values =>{
        let {full_name,institute} = values
        if(full_name !== undefined && full_name !== ""){
            const formData = new FormData()
            formData.append('full_name',full_name)
            formData.append('image','')
            formData.append('address','')
            formData.append('email','')
            formData.append('institute',institute??'')
            formData.append('department','')
            formData.append('award_received_address','')
            onProfileUpdate(formData)
        }else{
            message.warn("Full name is required!")
        }
    }

    const onProfileUpdate = formData =>{
        // setLoading(true)
        //     axios({
        //     method: "put",
        //     url: profileUpdateUrl,
        //     headers: { Authorization: `Token ${token}`,'X-CSRFToken': csrftoken },
        //     data: formData
        // })
        // .then(res => {
        //     setLoading(false) 
        //     if(res.status === 200){
        //         // Updated
        //         const updatedProfile = res.data;
        //         profileUpdate(updatedProfile);
        //         // setProfileChangeModalVisible(false)
        //         message.success('Profile updated successfully.')
        //     }else{
        //         message.error("Fail to update profile!")
        //     }
            
        // })
        // .catch(err => {
        //     setLoading(false)
        //     // message.error(JSON.stringify(err))
        // });
    }
    const onConfirmImageCrop =  async file  =>{
        const formData = new FormData()
        formData.append('full_name','')
        formData.append('image',file)
        formData.append('address','')
        formData.append('email','')
        formData.append('institute','')
        formData.append('department','')
        formData.append('award_received_address','')
        onProfileUpdate(formData)
    }

    const handlePasswordChangeOk = () =>{
        const oldPassword = oldPasswordRef.current.state.value.trim()
        const newPassword = newPasswordRef.current.state.value.trim()
        const newConfirmPassword = newConfirmPasswordRef.current.state.value.trim()
        if(oldPassword !== '' && newPassword !== '' && newConfirmPassword){
            if(newPassword === newConfirmPassword){
                setLoading(true)
                // axios({
                //     method: "put",
                //     url: changePasswordUrl,
                //     data:{
                //       old_password: oldPassword,
                //       new_password: newPassword
                //     },
                //     headers: { Authorization: `Token ${token}`,'X-CSRFToken': csrftoken },
                //   })
                // .then(res => {
                //     setLoading(false)
                //     if(res.status === 200){
                //         //Success
                //         oldPasswordRef.current.state.value = ""
                //         newPasswordRef.current.state.value = ""
                //         newConfirmPasswordRef.current.state.value = ""
                //         setPasswordChangeModalVisible(false)
                //         message.success('Your password has been changed.')
                //     }else if(res.status === 203){
                //         //Failure
                //         message.error("You old password is incorrect.")
                //     }                    
                // })
                // .catch(err => {
                //     setLoading(false)
                //     message.error(JSON.stringify(err))
                // });
    
            }else{
                message.error("Confirm password doesn't match.")
            }

        }else{
            message.error("You must specify all fields.")
        }

    }
    const onSendPasswordResetCode = () =>{
        let mobileNumber = parseInt(passwordResetMobileNumber)
        if(mobileNumber > 0 && mobileNumber.toString().length == 10){
            setLoading(true)
            // axios({
            //     method: "post",
            //     url: resetPasswordOtpCreateUrl,
            //     data:{
            //         mobile: `0${mobileNumber}`
            //     },
            //     headers: { 'X-CSRFToken': csrftoken },
            //     })
            // .then(res => {
            //     setLoading(false)
            //     if(res.status === 201){
            //         //Success
            //         // message.success('OTP has been sent. Please check your SMS.')
            //         message.warn('SMS is not implemented yet. Please check the Console to test.')
            //         console.log(res.data);
            //     }else if(res.status === 203){
            //         //Failure
            //         message.error("Mobile number doesn't exists.")
            //     }                    
            // })
            // .catch(err => {
            //     setLoading(false)
            //     // message.error(JSON.stringify(err))
            // });
        }else{
            message.error('You must specify 11 digits accurate mobile number')
        }
    }

    const onFinishResetPassword = values =>{
        let {mobile,otp,new_password,confirmed_password} = values
        if(mobile != undefined && mobile.trim() != '' && otp != undefined && otp.trim() != '' && new_password != undefined && new_password.trim() != ''){
            if(new_password === confirmed_password){
                let mobileNumber = parseInt(passwordResetMobileNumber)
                if(mobileNumber > 0 && mobileNumber.toString().length == 10){
                    setLoading(true)
                    // axios({
                    //     method: "put",
                    //     url: resetPasswordUrl,
                    //     data:{
                    //         mobile: `0${mobileNumber}`,
                    //         password: new_password,
                    //         otp: otp
                    //     },
                    //     headers: { 'X-CSRFToken': csrftoken },
                    //     })
                    // .then(res => {
                    //     setLoading(false)
                    //     if(res.status === 200){
                    //         //Success
                    //         message.success('Reset password is successfull')
                    //         setShowResetPasswordModal(false)
                    //         setPasswordResetMobileNumber(null)
                    //     }else if(res.status === 203){
                    //         //Failure
                    //         message.error("Fail to reset passsword")
                    //     }                    
                    // })
                    // .catch(err => {
                    //     setLoading(false)
                    //     // message.error(JSON.stringify(err))
                    // });
                }else{
                    message.error('You must specify 11 digits accurate mobile number')
                }
            }else{
                message.error('Confirm password is mismatch')
            }
        }else{
            message.error('All fields are required')
        }
    }
    
    const handleSettingsOk = () =>{

    }
    const handleSettingsCancel = () =>{
        setSettingsModalVisible(false)
    }
    const onChangeTheme = e => {
        console.log('Theme checked', e.target.value);
    };
    const onChangeNotify = e => {
        console.log('Notify checked', e.target.value);
    };
    const onMigrateClick = e =>{
        setMigrateModalVisible(true)
    }
    const handleMigrateCancel = () =>{
        setMigrateModalVisible(false)
    }
    const onMigratePlanClick = plan_type =>{
        if(plan_type === 'free_plan'){
            setPlanCost(null)
        }else if(plan_type === 'general_plan'){
            setPlanCost('200')
        }else if(plan_type === 'special_plan'){
            setPlanCost('3000')
        }
        setMigrateModalVisible(false)
        setMigrateConfirmModalVisible(true)
    }
    const handleMigrateConfirmOk = () =>{

    }
    const handleMigrateConfirmCancel = () =>{
        setMigrateConfirmModalVisible(false)
    }
    const onAgreeChange  = (e) =>{
        console.log(`checked = ${e.target.checked}`);
    }
    const handleMenuCancel = () =>{
        setMenuModalVisible(false)
    }
    return (
        <>
            {/* Wide Screen */}
            <div className="hide-on-small more">
                <Row>
                    <Col span={10} style={{textAlign:'left',color:'white'}}>
                        <img src={SiteLogo} alt='R4 Fashion Wear PVT. LTD.' style={{borderRadius:'5px'}}/>
                    </Col>
                    <Col span={14} style={{textAlign:'right',color:'white'}}>
                        <Row>
                            <Col span={18} style={{textAlign:'right'}}>
                                <a style={{color:'white'}} href='tel:+88-02-47670100'>
                                    <Icon component={PhoneFilled}/>&nbsp;
                                    +88-02-47670100
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a style={{color:'white'}} href="fax:+880247671083">
                                    <Icon component={MessageFilled}/>&nbsp;
                                    FAX: +88 02 47671083
                                </a>
                                <br/>
                                <a style={{color:'white'}} href="mailto:rashelr4@gmail.com">
                                    <Icon component={MailFilled}/>&nbsp;
                                    rashelr4@gmail.com
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a style={{color:'white'}} href="mailto:rsknit@rsknit.com">
                                    <Icon component={MailFilled}/>&nbsp;
                                    rsknit@rsknit.com
                                </a>
                            </Col>
                            <Col span={6} style={{textAlign:'left',paddingLeft:'1rem'}}>
                                <Button onClick={()=>{history.push('/enquiry');window.scrollTo(0,0)}}>Get a Free Quote</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* <h1 className="flow-text" style={{color:'#fff'}}>জব সল্যুশন গুরু</h1>
                    <p className="nm" style={{color:'#fff'}}>স্বপ্ন পূরণের লক্ষে, আমরা আছি তোমাদের পাশে</p> */}
                </Row>
                <div style={{textAlign:'right'}}>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={[selectedTab]} onClick={onManuItemClick} style={{textAlign:'right',display:'inherit',paddingTop:'1.5rem',border:'0',backgroundColor: '#a11f1f !important'}}>
                        <Menu.Item key="home">Home</Menu.Item>                                
                        <Menu.Item key="about_us">About Us</Menu.Item>
                        <Menu.Item key="services">Services</Menu.Item>
                        <Menu.Item key="clients">Clients</Menu.Item>
                        <Menu.Item key="products">Products</Menu.Item>
                        <Menu.Item key="sustainability">Sustainability</Menu.Item>
                        <Menu.Item key="our_commitment">Our Commitment</Menu.Item>
                        <Menu.Item key="certification">Certification</Menu.Item>
                        <Menu.Item key="contact_us">Contact Us</Menu.Item>
                    </Menu>
                </div>
            </div>
            {/* //   Mobile Viewed Menu  */}
            <div className="show-on-small">
                <Row>
                    <Col span={4}>
                        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} size={'large'} style={{backgroundColor:'white'}}/>
                    </Col>
                    <Col span={20} className='left-align' style={{color:'white'}}>
                        {/* <h1 className="flow-text" style={{color:'#fff'}}>জব সল্যুশন গুরু</h1>
                        <p style={{color:'#fff'}}>স্বপ্ন পূরণের লক্ষে, আমরা আছি তোমাদের পাশে</p> */}
                        <p className='flow-text'>R4 Fashion Wear PVT. LTD.</p>
                        <Row>
                            <Col span={14} style={{textAlign:'right'}}>
                            {/* <img src={SiteLogo} alt='R4 Fashion Wear PVT. LTD.' style={{borderRadius:'5px',width:'100%'}}/> */}
                            <a style={{color:'white'}} href='tel:+88-02-47670100'>
                                    <Icon component={PhoneFilled}/>&nbsp;
                                    +88-02-47670100
                                </a>
                            </Col>
                            <Col span={10} style={{textAlign:'left',paddingLeft:'1rem'}}>
                                <Button size='small' onClick={()=>{history.push('/enquiry');window.scrollTo(0,0)}}>Get a Free Quote</Button>
                            </Col>
                        </Row>
                    </Col>                   
                </Row>
            </div>
            {/* Mobile Drawer */}
            <Drawer            
                placement={"left"}
                closable={false}
                onClose={onCloseDrawer}
                visible={visibilityDrawer}
                key={"left"}
                >
                    <Menu theme="light" mode="inline" defaultSelectedKeys={[selectedTab]} onClick={onManuItemClick} style={{textAlign:'left',paddingTop:'1.5rem',border:'0',backgroundColor: 'red !important'}}>
                        <Menu.Item key="home">Home</Menu.Item>                                
                        <Menu.Item key="about_us">About Us</Menu.Item>
                        <Menu.Item key="services">Services</Menu.Item>
                        <Menu.Item key="clients">Clients</Menu.Item>
                        <Menu.Item key="products">Products</Menu.Item>
                        <Menu.Item key="sustainability">Sustainability</Menu.Item>
                        <Menu.Item key="our_commitment">Our Commitment</Menu.Item>
                        <Menu.Item key="certification">Certification</Menu.Item>
                        <Menu.Item key="contact_us">Contact Us</Menu.Item>
                    </Menu>
            </Drawer>
        </>
    );
};

export default SiteHeader;