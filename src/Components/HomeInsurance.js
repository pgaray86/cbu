import React, { Component } from 'react';
import HeaderOne from '../Header/HeaderOne';
import Products from '../Section/Products';
import HeadingOne from '../Section/HeadingOne';
import BeforeFooter from '../Footer/BeforeFooter';
import Footer from '../Footer/Footer';
import List from '../Section/SimpleList';
import { HomeInsuranceData } from '../utils/data';
import Benefits from '../Section/Benefits';

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

const Accordion = props => (
    <div id="accordion">
        <div className="accordion-container">
            <a href="#adicionales" className="accordion-titulo" onClick={props.onClick}>
                Servicios adicionales<span className="toggle-icon"></span>
            </a>
            <div className="accordion-content">
                <List data={props.coverage} />
            </div>
        </div>
    </div>
);

class HomeInsurance extends Component {
    accordionClick = (e) => {
        var node = e.target;
        var contenido = window.$(node).next(".accordion-content");
        if (contenido.css("display") === "none") { //open		
            contenido.slideDown(250);
            window.$(node).addClass("open");
        }
        else { //close		
            contenido.slideUp(250);
            window.$(node).removeClass("open");
        }
        e.preventDefault();
    }

    getInsurance() {
        window.location.href = HomeInsuranceData.contactLink;
    }

    render() {
        const { heading, photoTop, coverage, products, benefits, additional, contactLink } = HomeInsuranceData;

        return (
            <React.Fragment>
                <HeaderOne photoTop={photoTop} />
                <section id="main">
                    <div className="container wrapper">
                        <HeadingOne {...heading}  contactLink={contactLink} />
                        <Benefits benefits={benefits} />
                        <Coverage coverage={coverage} />
                        <Accordion coverage={additional} onClick={this.accordionClick} />
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Servicio <strong>exclusivo</strong></h3>
                                <div className="subrayado center"></div>
                                <p className="center"><strong>Urgencias y Emergencias Médicas:</strong> producidas dentro de la vivienda asegurada, las 24 hs. los 365 días sin cargo adicional. Este beneficio es para el titular de la póliza, su grupo familiar, visitas.</p>
                            </div>
                        </div>
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

export default HomeInsurance;