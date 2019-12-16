import React, { Component } from 'react';
import HeaderOne from '../Header/HeaderOne';
import Products from '../Section/Products';
import HeadingOne from '../Section/HeadingOne';
import BeforeFooter from '../Footer/BeforeFooter';
import Footer from '../Footer/Footer';
import Benefits from '../Section/Benefits';
import { CarInsuranceData } from '../utils/data';

let id = 0;

const Plans = props => (
    <React.Fragment>
        <div className="row">
            <div className="col-md-12">
                <h3>Conocé nuestros <strong>planes</strong></h3>
                <div className="subrayado center"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-6 col-md-6">
                <h5>
                    Cobertura<br />
                    <strong>Terceros Completo<br />
                        (TC4)</strong>
                </h5>
            </div>
            <div className="col-xs-6 col-md-6">
                <h5 className="derecha">
                    Cobertura<br />
                    <strong>Todo Riesgo<br />
                        (TR)</strong>
                </h5>
            </div>
        </div>
        <List data={props.plans.coverage} />
        <Accordion plans={props.plans} onClick={props.accordionClick} />
    </React.Fragment>
);

const List = props => (
    <div id="comparativo">
        {props.data.map(item => (
            <div key={id++}>
                <div className="row">
                    <div className="col-xs-12 col-md-12 hiddenDesktop">{item.content}</div>
                </div>

                <div className="row renglon">
                    <div className="col-xs-6 col-md-2">
                        <div className={item.available ? 'igual' : 'diferente'}></div>
                    </div>
                    <div className="col-md-8 hiddenMob">
                        <p>{item.content}</p>
                    </div>
                    <div className="col-xs-6 col-md-2">
                        <div className="igual"></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const Accordion = props => (
    <div id="accordion">
        <div className="accordion-container">
            <a href="#beneficios" className="accordion-titulo" onClick={props.onClick}>
                Beneficios 0KM<span className="toggle-icon"></span>
            </a>
            <div className="accordion-content">
                <List data={props.plans.benefits} />
            </div>
        </div>
        <div className="accordion-container" onClick={props.onClick}>
            <a href="#beneficios" className="accordion-titulo">Servicios adicionales<span className="toggle-icon"></span></a>
            <div className="accordion-content">
                <List data={props.plans.additional} />
            </div>
        </div>
    </div>
);


class CarInsurance extends Component {
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
        window.location.href = CarInsuranceData.contactLink;
    }

    render() {
        const { benefits, plans, products, heading, photoTop, contactLink } = CarInsuranceData;

        return (
            <React.Fragment>
                <HeaderOne photoTop={photoTop}/>
                <section id="main">
                    <div className="container wrapper">
                        <HeadingOne {...heading}  contactLink={contactLink} />
                        <Benefits benefits={benefits} />
                        <Plans plans={plans} accordionClick={this.accordionClick} />
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

export default CarInsurance;