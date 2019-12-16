import React, { Component } from 'react';
import HeaderOne from '../Header/HeaderOne';
import Products from '../Section/Products';
import HeadingOne from '../Section/HeadingOne';
import BeforeFooter from '../Footer/BeforeFooter';
import Footer from '../Footer/Footer';
import List from '../Section/SimpleList';
import { LifeInsuranceData } from '../utils/data';

const Coverage = props => (
    <React.Fragment>
        <div className="row">
            <div className="col-md-12">
                <h3>Conocé nuestra <strong>cobertura</strong></h3>
                <div className="subrayado center"></div>
            </div>
        </div>
        <List data={props.coverage} />
    </React.Fragment>
);

class LifeInsurance extends Component {
    getInsurance() {
        window.location.href = LifeInsuranceData.contactLink;
    }

    render() {
        const { heading, photoTop, coverage, products, contactLink } = LifeInsuranceData;

        return (
            <React.Fragment>
                <HeaderOne photoTop={photoTop} />
                <section id="main">
                    <div className="container wrapper">
                        <HeadingOne {...heading}  contactLink={contactLink} />
                        <Coverage coverage={coverage}/>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <input type="button" name="button" id="button" className="home pie" value="Quiero mi seguro" 
                                onClick={this.getInsurance} />
                            </div>
                        </div>
                        <Products products={products} />
                        <BeforeFooter />
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default LifeInsurance;