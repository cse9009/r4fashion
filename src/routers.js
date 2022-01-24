import React from 'react';
import {Route} from 'react-router-dom';
import Enquiry from './containers/Enquiry';
import Home from './containers/Home';
import OurCommitment from './containers/OurCommitment';
import Products from './containers/Products';
import ProductSpecific from './containers/ProductSpecific';
import Sustainability from './containers/Sustainability';
const BaseRouter = () =>{
    return <>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/:category' component={ProductSpecific}/>
        <Route exact path='/sustainability' component={Sustainability}/>
        <Route exact path='/our-commitment' component={OurCommitment}/>
        <Route exact path='/enquiry' component={Enquiry}/>

    </>
} 

export default BaseRouter;